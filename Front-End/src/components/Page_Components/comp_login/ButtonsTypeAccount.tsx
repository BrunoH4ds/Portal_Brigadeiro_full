"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IconSchool, IconUser } from "@tabler/icons-react";
import { UsersArray } from "@/database/UsersArray";
import { useUser } from "@/context/UserContext";

interface ButtonsTypeAccountProps {
  email: string;
  password: string;
}

export default function ButtonsTypeAccount({ email, password }: ButtonsTypeAccountProps) {
  const router = useRouter();
  const { setUser, setIsLoggedIn, setIsAdmin } = useUser();
  const [selectedType, setSelectedType] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleTypeSelection = (type: string) => {
    setSelectedType(type);
  };

  const handleLogin = () => {
    if (!email || !password) {
      setError("Não esqueça de preencher todos os campos");
      return;
    }

    // procura o usuário no banco único
    const user = UsersArray.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      setError("Email ou senha incorretos");
      return;
    }

    // se for admin → ignora o tipo selecionado
    if (user.role === "admin") {
      setUser(user);
      setIsLoggedIn(true);
      setIsAdmin(true);

      // agora route baseado no user_type
      router.push(`/${user.user_type}/${user._id}`);
      return;
    }

    // se não for admin, precisa validar o tipo escolhido
    if (!selectedType) {
      setError("Selecione o tipo de usuário");
      return;
    }

    const expectedType = selectedType === "aluno" ? "Aluno" : "Professor";

    if (user.user_type !== expectedType) {
      setError("Tipo selecionado não corresponde ao usuário");
      return;
    }

    // login válido
    setUser(user);
    setIsLoggedIn(true);
    setIsAdmin(false);

    // rota dinâmica pelo tipo REAL do usuário
    router.push(`/${user.user_type}/${user._id}`);
  };

  return (
    <div className="flex w-full flex-col items-center gap-1">

      {error && <p className="text-red-600 mb-1">{error}</p>}

      <div className="flex flex-col items-center sm:flex-row gap-5">

        <button
          className={`flex items-center gap-2 p-2 border border-blue-900 rounded-3xl cursor-pointer ${
            selectedType === "aluno"
              ? "bg-blue-900 text-white"
              : "bg-zinc-800/40 hover:bg-blue-900 hover:border-blue-800"
          }`}
          onClick={() => handleTypeSelection("aluno")}
        >
          <IconUser /> Aluno
        </button>

        <button
          className={`flex items-center gap-2 p-2 border border-blue-900 rounded-3xl cursor-pointer ${
            selectedType === "professor"
              ? "bg-blue-900 text-white"
              : "bg-zinc-800/40 hover:bg-blue-900 hover:border-blue-800"
          }`}
          onClick={() => handleTypeSelection("professor")}
        >
          <IconSchool /> Professor
        </button>

      </div>

      <button
        className="mt-2 w-4/5 p-2 rounded-md bg-blue-900 hover:bg-blue-800 text-white cursor-pointer"
        onClick={handleLogin}
      >
        Entrar
      </button>
    </div>
  );
}
