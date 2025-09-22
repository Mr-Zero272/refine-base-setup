import { NEXT_PUBLIC_DIRECTUS_URL } from "@config";
import { AuthProvider } from "@refinedev/core";
import {
  AuthHelper,
  AuthenticationData,
  AuthenticationStorage,
  authentication,
  createDirectus,
  realtime,
  rest,
} from "@tspvivek/refine-directus";

export const API_URL =
  typeof window === "undefined"
    ? NEXT_PUBLIC_DIRECTUS_URL
    : `${window.location.origin}/directus-api`;

export const authLocalStorage = () =>
  ({
    get: async () => {
      const data =
        typeof window !== "undefined" &&
        window.localStorage.getItem("directus_storage");
      if (data) {
        return JSON.parse(data);
      }
      return null;
    },

    set: async (value: AuthenticationData | null) => {
      if (!value) {
        return (
          typeof window !== "undefined" &&
          window.localStorage.removeItem("directus_storage")
        );
      }
      return (
        typeof window !== "undefined" &&
        window.localStorage.setItem("directus_storage", JSON.stringify(value))
      );
    },
  } as AuthenticationStorage);

export const directusClient = createDirectus(API_URL)
  .with(authentication("json", { storage: authLocalStorage() }))
  .with(rest())
  .with(
    realtime({
      authMode: "handshake",
    })
  );

export const directusAuthHelper = AuthHelper(directusClient);

export const authProvider: AuthProvider = {
  async login(params) {
    try {
      await directusAuthHelper.login(params.email, params.password);
      console.log({
        email: params.email,
        password: params.password,
      })
      return {
        success: true,
        redirectTo: "/",
        successNotification: {
          message: "Login successful",
          type: "success",
        },
      };
    } catch (error) {
      return {
        success: false,
        error: {
          message: "Invalid email or password",
          name: "Invalid email or password",
        },
      };
    }
  },

  async logout() {
    try {
      await directusAuthHelper.logout();
    } finally {
      return {
        success: true,
        redirectTo: "/login",
        successNotification: {
          message: "Logout successful",
          type: "success",
        },
      };
    }
  },

  async check() {
    // TODO: Temporary bypass authentication for testing
    // For dashboard route, always return authenticated
    // if (typeof window !== "undefined" && window.location.pathname.includes('/dashboard')) {
    //   return {
    //     authenticated: true,
    //   };
    // }

    const token = await directusAuthHelper.getToken();
    if (!token) {
      return {
        authenticated: false,
        redirectTo: "/login",
        logout: true,
      };
    }

    return {
      authenticated: true,
    };
  },

  async getIdentity() {
    try {
      const res = await directusAuthHelper.me({});
      return res;
    } catch (error) {
      await directusAuthHelper.logout();
    }
  },

  async onError(error) {
    return {};
  },
};
