"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import Loading from "@/components/optional/Loading";

export default function RedirectIfLoggedIn({ children }: { children: React.ReactNode }) {
  const { isLoggedIn, isLoading, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isLoggedIn && user) {
      const path = `/${user.type}/${user._id}`; // Caminho dinâmico com base no tipo de usuário
      router.push(path);
    }
  }, [isLoggedIn, isLoading, user, router]);

  if (isLoading) return <Loading />;

  // Se estiver logado, não renderiza o conteúdo do componente
  if (isLoggedIn && user) return null;

  return <>{children}</>; // Caso não esteja logado, renderiza o conteúdo normalmente
}
