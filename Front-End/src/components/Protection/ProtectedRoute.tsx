"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import Loading from "@/components/optional/Loading";
import NotFoundError from "@/components/optional/NotFoundError";

interface ProtectedRouteProps {
  children: React.ReactNode;
  expectedId: string;
  expectedType: string; // "Aluno" | "Professor" | "Admin"
}

export default function ProtectedRoute({
  children,
  expectedId,
  expectedType,
}: ProtectedRouteProps) {
  const { isLoggedIn, isLoading, user } = useUser();
  const router = useRouter();

  // Se não estiver logado, redireciona
  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push("/Entrar");
    }
  }, [isLoading, isLoggedIn, router]);

  if (isLoading) return <Loading />;
  if (!isLoggedIn || !user) return null;

  // 🔐 Verificação correta de autorização
  const isUserAuthorized =
    user._id === expectedId && user.user_type === expectedType;

  if (!isUserAuthorized) {
    return <NotFoundError accessDenied />;
  }

  return <>{children}</>;
}
