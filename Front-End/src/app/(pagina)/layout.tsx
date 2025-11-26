"use client";

import Main from "@/components/template/main";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [key, setKey] = useState(pathname);

  useEffect(() => {
    setKey(pathname); // Atualiza a chave sempre que mudar de página
  }, [pathname]);

  // Verifica se a rota inclui "/Admin/" para esconder o Main
  const hideMainLayout = pathname.startsWith("/Admin");

  return (
    <div key={key}>
      {hideMainLayout ? <Main  semRodape>{children}</Main> : <Main>{children}</Main>}
    </div>
  );
}
