"use client";
import type { AuthPageProps } from "@refinedev/core";
import { AuthPage as AuthPageBase } from "@refinedev/mui";

export const AuthPage = (props: AuthPageProps) => {
  if (props.type === "login")
    return <AuthPageBase {...props} registerLink={<></>} />;
  return <AuthPageBase {...props} />;
};
