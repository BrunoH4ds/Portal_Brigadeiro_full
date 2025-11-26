import MainAdmin from "@/components/template_admin/MainAdmin";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainAdmin>
      {children}
    </MainAdmin>
  );
}
