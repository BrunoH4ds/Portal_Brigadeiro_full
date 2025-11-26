"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import Loading from "@/components/optional/Loading";
import NotFoundError from "@/components/optional/NotFoundError";

interface ProtectedRouteProps {
  children: React.ReactNode;
  expectedId: string;
  expectedType: string;
}

export default function ProtectedRoute({
  children,
  expectedId,
  expectedType,
}: ProtectedRouteProps) {
  const { isLoggedIn, isLoading, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push("/Entrar");
    }
  }, [isLoading, isLoggedIn, router]);

  if (isLoading) return <Loading />;

  if (!isLoggedIn) return null;

  // Só chega aqui se já está logado
  const isUserAuthorized =
    user && user._id === parseInt(expectedId) && user.type === expectedType;

  if (!isUserAuthorized) {
    return <NotFoundError accessDenied />;
  }

  return <>{children}</>;
}
