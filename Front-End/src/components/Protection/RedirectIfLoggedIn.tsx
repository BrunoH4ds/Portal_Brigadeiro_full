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
      // user_type vem do backend: "Aluno", "Professor", "Admin"
      const path = `/${user.user_type}/${user._id}`;
      router.push(path);
    }
  }, [isLoggedIn, isLoading, user, router]);

  if (isLoading) return <Loading />;

  // Se o usuário já está logado, não deve renderizar a página de login
  if (isLoggedIn && user) return null;

  return <>{children}</>;
}
