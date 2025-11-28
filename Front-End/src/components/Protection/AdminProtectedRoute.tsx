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

  // Enquanto verifica login → carregando
  if (isLoading) return <Loading />;

  // Se não estiver logado, não renderiza nada (evita flicker)
  if (!isLoggedIn) return null;

  // Agora só chega aqui se estiver logado
  if (!isAdmin) {
    return <NotFoundError accessDenied />;
  }

  return <>{children}</>;
}
