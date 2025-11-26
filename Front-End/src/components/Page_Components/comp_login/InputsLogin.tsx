'use client'

import React, { useState } from "react";
import ButtonsTypeAccount from "./ButtonsTypeAccount";

export default function InputsLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  return (
    <div className="flex flex-col justify-center items-center w-full gap-2 mb-3">
      <h6>E-mail</h6>
      <input
        className="w-4/5 mb-2 p-2 border-2 border-blue-900 rounded-md focus:outline-none ring-0  bg-zinc-800/40 text-white"
        placeholder="Seu Email"
        value={email}
        onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())}
        type="email"
      />
      <h6>Senha</h6>
      <input
        className="w-4/5 p-2 border-2 border-blue-900 rounded-md focus:outline-none ring-0 bg-zinc-800/40 text-white"
        placeholder="Sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      {/* Botoes para definir tipo de usuário */}
      <ButtonsTypeAccount
        email={email}
        password={password}
      />
    </div>
  );
}
