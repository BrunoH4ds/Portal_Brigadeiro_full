"use client";

import { useState } from "react";

export default function ContactAdmin() {
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  
  //função para salvar os dados
  const handleSalvar = () => {
    if (!email || !telefone || !endereco) {
      setErro("Preencha todos os campos obrigatórios.");
      setMensagem("");
      return;
    }

    //enviar as informações para o banco de dados

    setErro("");
    setMensagem("Informações de contato atualizadas com sucesso!");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Informações de Contato</h1>

      <div className="flex bg-white/50 p-6 rounded-lg shadow-md text-black flex-col gap-4">
        {/* Inputs para dados */}
        <label>
          <span className="font-semibold">E-mail:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded mt-1"
          />
        </label>

        <label>
          <span className="font-semibold">Telefone:</span>
          <input
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="w-full p-2 border rounded mt-1"
          />
        </label>

        <label>
          <span className="font-semibold">Endereço:</span>
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        {/* Botão para Salvar as Informações */}
        <button
          onClick={handleSalvar}
          className="bg-green-600 cursor-pointer hover:bg-green-700 text-white py-2 px-4 rounded mt-2"
        >
          Salvar Informações
        </button>

        {/* Feedback de validação */}
        {erro && <p className="text-red-600 text-sm mt-1">{erro}</p>}
        {mensagem && <p className="text-green-600 text-sm mt-1">{mensagem}</p>}
      </div>
    </div>
  );
}
