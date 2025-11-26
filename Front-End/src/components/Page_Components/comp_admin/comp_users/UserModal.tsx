"use client";

import { useEffect, useState } from "react";
import { IconX } from "@tabler/icons-react";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  user?: Partial<User>;
  isEditing: boolean;
}

export default function UserModal({
  isOpen,
  closeModal,
  user,
  isEditing,
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Ra, setRa] = useState("");
  const [Rg, setRg] = useState("");
  const [type, setType] = useState<"Aluno" | "Professor">("Aluno");
  const [turma, setTurma] = useState("");
  const [curso, setCurso] = useState("");
  const [materia, setMateria] = useState("");
  const [admin, setAdmin] = useState(false);
  const [error, setError] = useState("");
  
  //efeito de preencher os dados no input ou nao
  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setPassword(user.password || "");
      setRa(user.Ra || "");
      setRg(user.Rg || "");
      setType(user.type === "Professor" ? "Professor" : "Aluno");
      setTurma(user.turma || "");
      setCurso(user.curso || "");
      setMateria(user.materia || "");
      setAdmin(!!user.admin); // garante que será um boolean
    } else {
      resetForm();
    }
  }, [user]);

  //Funcao para resetar o formulario
  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setRa("");
    setRg("");
    setType("Aluno");
    setTurma("");
    setCurso("");
    setMateria("");
    setAdmin(false);
    setError("");
  };

  //Funcao para validar
  const validateForm = () => {
    if (!name || !email || !password) {
      setError("Preencha todos os campos obrigatórios.");
      return false;
    }

    if (type === "Aluno" && !turma && !Ra) {
      setError("Informe a turma do aluno.");
      return false;
    }

    if (type === "Professor" && !materia && !Rg) {
      setError("Informe a matéria do professor.");
      return false;
    }
    setError("");
    return true;
  };

  //Funcao para criar ou editar
  const handleSubmit = () => {
    if (!validateForm()) return;

    const data = {
      name,
      email,
      password,
      Ra: type === "Aluno" ? Ra : undefined,
      Rg: type === "Professor" ? Rg : undefined,
      admin,
      type,
      turma: type === "Aluno" ? turma : undefined,
      curso: type === "Aluno" ? curso : undefined,
      materia: type === "Professor" ? materia : undefined,
    };
    if (isEditing) {
      console.log("Atualizando usuário:", data);
      //enviar as informações para o banco de dados (editado)
    } else {
      console.log("Criando novo usuário:", data);
      //enviar as informações para o banco de dados (Criado)
    }

    closeModal();
  };
  //Funcao para deletar usuario
  const handleDelete = () => {
    //enviar as informações para o banco de dados (remover)
    console.log("removendo Usuario", user._id);
    closeModal();
  };

  return (
    isOpen && (
      <div className="bg-white/50 text-black p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">
            {isEditing ? "Editar Usuário" : "Adicionar Usuário"}
          </h2>
          <button
            onClick={closeModal}
            className="text-xl cursor-pointer font-bold text-gray-500 hover:text-black"
          >
            <IconX size={30} />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <label>
            <span className="font-semibold">Nome:</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Bruno Henrique"
              className="w-full border p-2 rounded mt-1"
            />
          </label>

          <label>
            <span className="font-semibold">Email:</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemplo@aluno.educacao.sp.gov.br"
              className="w-full border p-2 rounded mt-1"
            />
          </label>

          <label>
            <span className="font-semibold">Senha:</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Defina uma senha segura"
              className="w-full border p-2 rounded mt-1"
            />
          </label>

          {type === "Aluno" && (
            <label>
              <span className="font-semibold">RA:</span>
              <input
                type="text"
                value={Ra}
                onChange={(e) => setRa(e.target.value)}
                placeholder="Ex: 00011035887833SP"
                className="w-full border p-2 rounded mt-1"
              />
            </label>
          )}

          {type === "Professor" && (
            <label>
              <span className="font-semibold">RG:</span>
              <input
                type="text"
                value={Rg}
                onChange={(e) => setRg(e.target.value)}
                placeholder="Ex: 49.009.298-6"
                className="w-full border p-2 rounded mt-1"
              />
            </label>
          )}

          <label>
            <span className="font-semibold">Tipo:</span>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as "Aluno" | "Professor")}
              className="w-full border p-2 rounded mt-1"
            >
              <option value="Aluno">Aluno</option>
              <option value="Professor">Professor</option>
            </select>
          </label>

          {type === "Aluno" && (
            <>
              <label>
                <span className="font-semibold">Turma:</span>
                <input
                  type="text"
                  value={turma}
                  onChange={(e) => setTurma(e.target.value)}
                  placeholder="Ex: 2º B"
                  className="w-full border p-2 rounded mt-1"
                />
              </label>
              <label>
                <span className="font-semibold">Curso (opcional):</span>
                <input
                  type="text"
                  value={curso}
                  onChange={(e) => setCurso(e.target.value)}
                  placeholder="Ex: Desenvolvimento de Sistemas"
                  className="w-full border p-2 rounded mt-1"
                />
              </label>
            </>
          )}

          {type === "Professor" && (
            <label>
              <span className="font-semibold">Matéria:</span>
              <input
                type="text"
                value={materia}
                onChange={(e) => setMateria(e.target.value)}
                placeholder="Ex: Matemática, Física..."
                className="w-full border p-2 rounded mt-1"
              />
            </label>
          )}

          <label className="flex items-center gap-2 mt-2">
            <button
              onClick={() => setAdmin(!admin)}
              className={`flex-1 px-6 py-2 text-sm font-semibold rounded-md border-2 transition-all ${
                admin
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "bg-gray-200 border-gray-400"
              } hover:bg-blue-500 hover:border-blue-500 cursor-pointer`}
            >
              Admin
            </button>
          </label>

          {isEditing && (
            <div className="text-sm text-gray-500 mt-2">
              <span className="font-semibold">Adicionado em:</span>{" "}
              {new Date(user.createdAt).toLocaleDateString()}
              <br />
              <span className="font-semibold">ID:</span> {user._id}
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="mt-2 cursor-pointer bg-green-600 hover:bg-green-700 text-white py-2 rounded"
          >
            {isEditing ? "Salvar Alterações" : "Adicionar Usuário"}
          </button>

          {isEditing && (
            <button
              onClick={handleDelete}
              className="mt-2 cursor-pointer bg-red-600 hover:bg-red-700 text-white py-2 rounded"
            >
              Remover Usuario
            </button>
          )}

          {error && (
            <p className="text-center text-red-600 text-sm mt-1">{error}</p>
          )}
        </div>
      </div>
    )
  );
}
