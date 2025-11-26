import { IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { useUser } from "@/context/UserContext";

// Definir a tipagem para 'user'
interface User {
  name: string;
  turma?: string;
}

interface UserSidebarProps {
  user: User;
  type: string;
  handleLogout: () => void;
}

export default function UserSidebar({ user, type, handleLogout }: UserSidebarProps) {
  const { isAdmin, isLoggedIn } = useUser();

  return (
    <div className="w-full lg:w-1/4 lg:p-6 border-0 lg:border-r border-white/50 transition-all duration-300 ease-in-out">
      <div className="flex flex-col justify-center h-full">
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <span className="flex justify-center items-center">
              <div className="flex items-center justify-center w-50 h-50 bg-white/50 rounded-full p-3">
                <IconUser size={200} className="text-blue-800" />
              </div>

              {/* Exibição do campo Turma */}
              {user?.turma && (
                <p className="absolute right-9 bottom-5 text-3xl font-semibold bg-white/50 backdrop-blur-md text-gray-800 rounded-full p-2 transform translate-x-1/2 translate-y-1/2">
                  {user.turma}
                </p>
              )}
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 text-center mt-5">{user.name}</h1>
          <p className="text-2xl font-bold text-blue-800 text-center mb-6">{type}</p>
        </div>

        <div className="flex flex-col justify-end">
          {/* Botão de Administração (exibido apenas para admin) */}
          {isAdmin && isLoggedIn && (
            <Link href="/Admin">
              <button className="text-xl text-gray-800 bg-blue-800 hover:bg-blue-700 cursor-pointer py-2 px-6 text-white rounded-md w-full mt-4">
                Administração
              </button>
            </Link>
          )}

          {/* Botão de logout (exibido apenas se o usuário estiver logado) */}
          {isLoggedIn && (
            <button
              className="cursor-pointer bg-red-700 hover:bg-red-600 py-2 px-6 text-white rounded-md w-full mt-4"
              onClick={handleLogout}
            >
              Sair
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
