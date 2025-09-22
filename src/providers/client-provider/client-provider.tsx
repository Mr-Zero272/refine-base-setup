"use client";
import { AppLogo } from "@components/icons";
import "@i18n";
import { authProvider, directusClient } from "@libs/directus";
import {
  ApartmentOutlined,
  AssignmentTurnedInOutlined,
  AutoAwesomeMosaicOutlined,
  BuildCircleOutlined,
  FlagOutlined,
  FolderOutlined,
  FolderSharedOutlined,
  GroupsOutlined,
  ListAltOutlined,
  ListOutlined,
  PaymentsOutlined,
  PieChartOutlined,
  StackedLineChartOutlined,
} from "@mui/icons-material";
import { accessControlProvider } from "@providers/access-control-provider";
import {
  I18nProvider,
  IRefineOptions,
  Refine,
  ResourceProps,
} from "@refinedev/core";
import { RefineKbar } from "@refinedev/kbar";
import { useNotificationProvider } from "@refinedev/mui";
import routerProvider from "@refinedev/nextjs-router";
import { dataProvider } from "@tspvivek/refine-directus";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import MuiProvider from "./mui-provider";

const RESOURCES: ResourceProps[] = [
  {
    name: "dashboard",
    list: "/dashboard",
    meta: {
      icon: <StackedLineChartOutlined />,
    },
  },
  {
    name: "payment_transactions",
    list: "/payment_transactions",
    create: "/payment_transactions/create",
    show: "/payment_transactions/:id",
    meta: {
      icon: <PieChartOutlined />,
    },
  },
  {
    name: "__listings__",
    meta: {
      icon: <ApartmentOutlined />,
    },
  },
  {
    name: "listings",
    list: "/listings",
    create: "/listings/create",
    show: "/listings/:id",
    edit: "/listings/:id/edit",
    meta: {
      icon: <ApartmentOutlined />,
      parent: "__listings__",
    },
  },
  {
    name: "listing_categories",
    list: "/listing_categories",
    create: "/listing_categories/create",
    show: "/listing_categories/:id",
    edit: "/listing_categories/:id/edit",
    meta: {
      icon: <FolderSharedOutlined />,
      parent: "__listings__",
    },
  },
  {
    name: "listing_facilities",
    list: "/listing_facilities",
    create: "/listing_facilities/create",
    show: "/listing_facilities/:id",
    edit: "/listing_facilities/:id/edit",
    meta: {
      parent: "__listings__",
      icon: <BuildCircleOutlined />,
    },
  },
  {
    name: "listing_attributes",
    list: "/listing_attributes",
    create: "/listing_attributes/create",
    show: "/listing_attributes/:id",
    edit: "/listing_attributes/:id/edit",
    meta: {
      parent: "__listings__",
      icon: <ListAltOutlined />,
    },
  },
  {
    name: "__projects__",
    meta: {
      icon: <FolderOutlined />,
    },
  },
  {
    name: "projects",
    list: "/projects",
    create: "/projects/create",
    show: "/projects/:id",
    edit: "/projects/:id/edit",
    meta: {
      parent: "__projects__",
      icon: <FolderOutlined />,
    },
  },
  {
    name: "project_attributes",
    list: "/project_attributes",
    create: "/project_attributes/create",
    show: "/project_attributes/:id",
    edit: "/project_attributes/:id/edit",
    meta: {
      parent: "__projects__",
      icon: <ListAltOutlined />,
    },
  },
  {
    name: "project_facilities",
    list: "/project_facilities",
    create: "/project_facilities/create",
    show: "/project_facilities/:id",
    edit: "/project_facilities/:id/edit",
    meta: {
      parent: "__projects__",
      icon: <BuildCircleOutlined />,
    },
  },
  {
    name: "review-listings",
    list: "/review-listings",
    meta: {
      icon: <AssignmentTurnedInOutlined />,
    },
  },
  {
    name: "directus_users",
    list: "/users",
    create: "/users/create",
    edit: "/users/:id/edit",
    show: "/users/:id",
    meta: {
      icon: <GroupsOutlined />,
    },
  },
  {
    name: "listing_plans",
    list: "/listing_plans",
    create: "/listing_plans/create",
    edit: "/listing_plans/:id/edit",
    show: "/listing_plans/:id",
    meta: {
      icon: <PaymentsOutlined />,
    },
  },
  {
    name: "advertising_banners",
    list: "/advertising_banners",
    create: "/advertising_banners/create",
    edit: "/advertising_banners/:id/edit",
    show: "/advertising_banners/:id",
    meta: {
      icon: <AutoAwesomeMosaicOutlined />,
    },
  },
  {
    name: "violations",
    list: "/violations",
    meta: {
      icon: <FlagOutlined />,
    },
  },

  // Hidden resources
  {
    name: "project_attributes",
    list: "/project_attributes",
    show: "/project_attributes/:id",
    edit: "/project_attributes/:id/edit",
    meta: {
      icon: <ListOutlined />,
      hide: true,
    },
  },
  {
    name: "project_facilities",
    list: "/project_facilities",
    meta: {
      hide: true,
    },
  },
  {
    name: "investor",
    list: "/investor",
    meta: {
      hide: true,
    },
  },
  {
    name: "projects_project_facilities",
    list: "/investor",
    meta: {
      hide: true,
    },
  },
  {
    name: "project_investor",
    list: "/project_investor",
    meta: {
      hide: true,
    },
  },
  {
    name: "project_files",
    list: "/project_files",
    meta: {
      hide: true,
    },
  },
  {
    name: "assets",
    list: "/assets",
    meta: {
      hide: true,
    },
  },
  {
    name: "directus_files",
    list: "/directus_files",
    meta: {
      hide: true,
    },
  },
  {
    name: "review-listings",
    list: "/review-listings",
    meta: {},
  },
  {
    name: "listing_status_history",
    meta: {
      hide: false,
    },
  },
];

const OPTIONS: IRefineOptions = {
  syncWithLocation: true,
  warnWhenUnsavedChanges: true,
  // useNewQueryKeys: true,
  textTransformers: {
    humanize(text) {
      return text;
    },
    plural(word) {
      return word;
    },
    singular(word) {
      return word;
    },
  },

  title: {
    text: "TekCommerce Dashboard",
    icon: <AppLogo />,
  },
  disableTelemetry: true,
  liveMode: "auto",
};

const DATA_PROVIDER = dataProvider(directusClient);

export default function ClientProvider({ children }: React.PropsWithChildren) {
  const { t, i18n } = useTranslation();
  // @ts-ignore
  const i18nProvider: I18nProvider = useMemo(
    () => ({
      changeLocale(locale, options) {
        i18n.changeLanguage(locale);
      },
      getLocale() {
        return i18n.language;
      },
      translate(key, options, defaultMessage) {
        return t(key, options);
      },
    }),
    [i18n, t]
  );

  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={DATA_PROVIDER}
      notificationProvider={useNotificationProvider}
      authProvider={authProvider}
      accessControlProvider={accessControlProvider}
      i18nProvider={i18nProvider}
      resources={RESOURCES}
      options={OPTIONS}
    >
      <MuiProvider>{children}</MuiProvider>
      <RefineKbar />
    </Refine>
  );
}
