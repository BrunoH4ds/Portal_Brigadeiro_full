import { IconX } from "@tabler/icons-react";
import Link from "next/link";

interface ErrorPageProps {
  accessDenied?: boolean;
}

export default function ErrorPage({ accessDenied = false }: ErrorPageProps) {
  return (
    <div className="flex justify-center items-center rounded-md bg-white/50 backdrop-blur-md text-gray-800 mt-28 mb-8 mx-8">
      <div className="flex flex-col md:flex-row items-center p-8 justify-center">
        <IconX size={150} stroke={1} className="text-red-800" />
        <div className="flex flex-col text-center items-center">
          <h1 className="text-3xl font-bold text-gray-800">
            {accessDenied ? "Acesso Negado" : "Página Não Encontrada"}
          </h1>
          <p className="text-lg w-3/4 text-gray-700 mb-5">
            {accessDenied
              ? "Você não tem permissão para acessar esta página."
              : "A página que você está procurando não existe ou foi removida."}
          </p>
          <Link href="/" passHref>
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-lg cursor-pointer">
              Voltar para a Página Inicial
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
