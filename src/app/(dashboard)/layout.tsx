"use client";
import { CustomLayout } from "@components/layout";
import React from "react";

export default function Layout({ children }: React.PropsWithChildren) {
  // TODO: Temporary disable authentication for testing
  // const { data: user, isLoading } = useGetIdentity<IUser>();
  // useEffect(() => {
  //   if (isLoading) return;
  //   if (!user) window.location.href = "/login";
  // }, [isLoading, user]);
  // if (isLoading) return null;
  
  return (
    <CustomLayout>
      {children}
    </CustomLayout>
  );
}
