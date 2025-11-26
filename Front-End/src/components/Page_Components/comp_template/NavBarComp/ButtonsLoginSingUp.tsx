import { useUser } from "@/context/UserContext";
import { IconUser } from "@tabler/icons-react";
import Link from "next/link";

export default function ButtonsLoginSignUp() {
  const { user, isLoggedIn } = useUser();

  return (
    <div className="flex items-center justify-end w-full md:w-auto">
      {isLoggedIn && user ? (
        <Link
          href={`/${user.type}/${user._id}`}
          className="flex items-center justify-center gap-3 px-4 py-2 rounded-md w-full 
          bg-white/30 hover:bg-blue-800 hover:text-white transition-all duration-300 
          md:bg-transparent md:hover:bg-transparent md:hover:text-black md:w-auto"
        >
          {/* Texto do usuário */}
          <div className="flex flex-col text-right">
            <h1 className="leading-tight">
              Olá, <strong>{user.name}</strong>
            </h1>
          </div>

          {/* Ícone */}
          <span className="bg-white/20 rounded-full p-1">
            <IconUser size={26} />
          </span>
        </Link>
      ) : (
        <Link
          href="/Entrar"
          className="block text-center w-full md:w-auto px-4 py-2 rounded-md 
          bg-blue-900 text-white hover:bg-blue-800 transition-all duration-300"
        >
          Entrar
        </Link>
      )}
    </div>
  );
}
