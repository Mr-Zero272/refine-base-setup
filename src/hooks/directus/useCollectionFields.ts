import { useCustom } from "@refinedev/core";
import {
  DirectusField,
  readFieldsByCollection,
} from "@tspvivek/refine-directus";
import { useMemo } from "react";

export type UseCollectionFieldsProps = {
  collection: string;
};

const ignoreFields = [
  "policies",
  "password",
  "id",
  "provider",
  "external_identifier",
  "last_access",
  "appearance",
  "user_created",
  "date_created",
  "PERSONAL_INFORMATION",
  "listing_status_history",
];
const ignoreInterfaces = ["tags", "list-o2m"];

const filterField = (field: DirectusField) => {
  if (ignoreFields.includes(field.field)) return false;
  if (field.meta.interface?.startsWith("system")) return false;
  if (field.meta.interface?.startsWith("presentation")) return false;
  if (ignoreInterfaces.includes(field.meta.interface!)) return false;
  return true;
};

export default function useCollectionFields({
  collection,
}: UseCollectionFieldsProps) {
  const command = useMemo(
    () => readFieldsByCollection(collection)(),
    [collection]
  );
  const res = useCustom<DirectusField[]>({
    url: command.path,
    method: command.method as any,
    queryOptions: {
      select(data) {
        return {
          data: data.data.filter(filterField),
        };
      },
    },
  });
  return res;
}
