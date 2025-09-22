import { readUserPermissions, ReadUserPermissionsOutput } from "@directus/sdk";
import { directusClient } from "@libs";
import { AccessControlProvider } from "@refinedev/core";
import { AuthHelper } from "@tspvivek/refine-directus";

let _userPermissions: Promise<ReadUserPermissionsOutput> | undefined;
let _token: string | undefined;

const allowedResources = ["dashboard", "review-listings"];

const directusAuthHelper = AuthHelper(directusClient);

export const accessControlProvider: AccessControlProvider = {
  can: async ({ action, params, resource }) => {
    if (resource?.startsWith("__") && resource?.endsWith("__")) {
      return {
        can: true,
      };
    }
    if (allowedResources.includes(resource || "")) {
      return {
        can: true,
      };
    }

    const token = await directusAuthHelper.getToken();

    if (!_userPermissions || token !== _token) {
      _userPermissions = directusClient.request(readUserPermissions());
      _token = token;
    }

    const userPermissions = await _userPermissions;
    const resourcePermission = userPermissions[resource!];

    if (!resourcePermission)
      return {
        can: false,
        reason: "You don't have permission to do this collection",
      };

    switch (action) {
      case "list":
      case "show":
        return {
          can: resourcePermission.read.access !== "none",
        };
      case "create":
        return {
          can: resourcePermission.create.access !== "none",
        };
      case "edit":
        return {
          can: resourcePermission.update.access !== "none",
        };
      case "delete":
        return {
          can: resourcePermission.delete.access !== "none",
        };
    }

    return { can: false, reason: "Unrecognized the action" };
  },
};
