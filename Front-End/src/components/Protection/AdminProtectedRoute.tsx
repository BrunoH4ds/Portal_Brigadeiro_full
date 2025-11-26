"use client";

import { useEffect } from "react";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import Loading from "@/components/optional/Loading";
import NotFoundError from "../optional/NotFoundError";

export default function AdminProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAdmin, isLoading, isLoggedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push("/Entrar");
    }
  }, [isLoading, isLoggedIn, router]);

  if (isLoading) {
    return <Loading />;
  }

  if (!isAdmin) {
    return <NotFoundError accessDenied />;
  }

  return <>{children}</>;
}
