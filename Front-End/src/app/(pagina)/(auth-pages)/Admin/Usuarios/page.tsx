"use client";

import { useState } from "react";
import { UsersArrayAluno } from "@/database/UsersArrayAluno";
import { UsersArrayProfessor } from "@/database/UsersArrayProfessor";
import UserModal from "@/components/Page_Components/comp_admin/comp_users/UserModal";
import UserList from "@/components/Page_Components/comp_admin/comp_users/UserList";

// Tipo unificado inferido dos arrays de alunos e professores
type User = typeof UsersArrayAluno[number] | typeof UsersArrayProfessor[number];

export default function UsersAdmin() {
  const [alunos, setAlunos] = useState<typeof UsersArrayAluno>(UsersArrayAluno);
  const [professores, setProfessores] = useState<typeof UsersArrayProfessor>(UsersArrayProfessor);
  const [filterType, setFilterType] = useState<"Aluno" | "Professor">("Aluno");
  const [adminFilter, setAdminFilter] = useState<"todos" | "admin" | "naoAdmin">("todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  // Abrir modal (adicionar ou editar)
  const openModal = (user?: User) => {
    if (user) {
      setModalData(user);
      setIsEditing(true);
    } else {
      setModalData(null);
      setIsEditing(false);
    }
    setIsModalOpen(true);
  };

  // Fechar modal
  const closeModal = () => {
    setModalData(null);
    setIsModalOpen(false);
    setIsEditing(false);
  };

  // Filtrar usuários por nome e tipo de admin
  const filterUsers = (list: User[]) => {
    return list.filter((user) => {
      const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesAdmin =
        adminFilter === "todos"
          ? true
          : adminFilter === "admin"
          ? user.admin
          : !user.admin;
      return matchesSearch && matchesAdmin;
    });
  };

  const allFilteredUsers =
    filterType === "Professor"
      ? filterUsers(professores)
      : filterUsers(alunos);

  const usersToDisplay = allFilteredUsers.slice(0, visibleCount);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Gerenciar Usuários</h2>

      {!isModalOpen && (
        <div className="bg-white/50 p-6 rounded-lg shadow-md">
          <div className="mb-6 flex flex-col gap-4 w-full">
            <div className="flex flex-wrap gap-4 w-full">
              {/* Botões */}
              <button
                onClick={() => openModal()}
                className="flex-1 cursor-pointer bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
              >
                Adicionar
              </button>
              <button
                onClick={() => setFilterType("Aluno")}
                className={`flex-1 py-2 px-4 rounded ${
                  filterType === "Aluno"
                    ? "bg-blue-800 text-white"
                    : "bg-white/50 text-blue-800 border cursor-pointer"
                }`}
              >
                Alunos
              </button>
              <button
                onClick={() => setFilterType("Professor")}
                className={`flex-1 py-2 px-4 rounded ${
                  filterType === "Professor"
                    ? "bg-blue-800 text-white"
                    : "bg-white/50 text-blue-800 border cursor-pointer"
                }`}
              >
                Professores
              </button>

              {/* Select Admin */}
              <select
                value={adminFilter}
                onChange={(e) => setAdminFilter(e.target.value as "todos" | "admin" | "naoAdmin")}
                className="flex-1 cursor-pointer p-2 rounded min-w-[140px] bg-gray-800 text-white"
              >
                <option value="todos">Todos</option>
                <option value="admin">Admins</option>
                <option value="naoAdmin">Não Admins</option>
              </select>
            </div>

            {/* Campo de busca */}
            <input
              type="text"
              placeholder="Buscar por nome..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border-2 border-blue-900 rounded-md bg-zinc-800/40 text-white"
            />
          </div>

          {/* Lista de usuários */}
          <div className="flex flex-col">
            <UserList
              usersToDisplay={usersToDisplay}
              visibleCount={visibleCount}
              setVisibleCount={setVisibleCount}
              openModal={openModal}
              allFilteredUsers={allFilteredUsers}
            />
          </div>
        </div>
      )}

      {/* Modal de adicionar/editar usuário */}
      <UserModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        user={modalData}
        isEditing={isEditing}
      />
    </div>
  );
}
