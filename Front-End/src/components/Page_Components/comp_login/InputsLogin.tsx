'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "../../../../api/authCrud";
import { useUser } from "@/context/UserContext";

export default function InputsLogin() {
  const router = useRouter();
  const { login } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Preencha todos os campos");
      return;
    }

    const res = await loginUser({ email, password });

    if (!res) {
      setError("Email ou senha incorretos");
      return;
    }

    const user = res.user;

    // salva o usuário no context
    login(user);

    // redireciona conforme o user_type
    router.push(`/${user.user_type}/${user._id}`);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full gap-2 mb-3">


      <h6>E-mail</h6>
      <input
        className="w-4/5 mb-2 p-2 border-2 border-blue-900 rounded-md bg-zinc-800/40 text-white"
        placeholder="Seu Email"
        value={email}
        onChange={(e) => setEmail(e.target.value.toLowerCase())}
        type="email"
        />

      <h6>Senha</h6>
      <input
        className="w-4/5 p-2 border-2 border-blue-900 rounded-md bg-zinc-800/40 text-white"
        placeholder="Sua Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        />
      {error && <p className="text-red-600">{error}</p>}
      <button
        className="mt-2 w-4/5 p-2 rounded-md bg-blue-900 hover:bg-blue-800 text-white cursor-pointer"
        onClick={handleLogin}
        >
        Entrar
      </button>
    </div>
  );
}
