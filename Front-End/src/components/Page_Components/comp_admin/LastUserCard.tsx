"use client";

import { useEffect, useState } from "react";
import { getLastUsers } from "../../../../api/usersCrud";
import SingleLastUserCard from "./SingleLastUserCard";

interface User {
  _id: string;
  name: string;
  user_type: string;
  created_at: string;
}

export default function LastUsersCard() {
  const [professors, setProfessors] = useState<User[]>([]);
  const [students, setStudents] = useState<User[]>([]);
  
  useEffect(() => {
    async function loadUsers() {
      const list = await getLastUsers();
      if (!list) return;

      setProfessors(list.filter(u => u.user_type === "Professor").slice(0, 4));
      setStudents(list.filter(u => u.user_type === "Aluno").slice(0, 4));
    }

    loadUsers();
  }, []);

  return (
    <div className="bg-gray-100/50 p-6 mt-8 rounded-lg shadow-md">
      <h3 className="font-semibold text-gray-800 text-lg">Últimos Usuários</h3>
      <p className="text-sm text-gray-700 mt-2">
        Veja os últimos usuários registrados na plataforma.
      </p>

      <div className="mt-4 flex flex-col gap-8 md:flex-row">
        {/* Professores */}
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800 text-lg">Professores</h4>
          <div className="space-y-2 mt-2">
            {professors.map((user) => (
              <SingleLastUserCard key={user._id} user={user} />
            ))}
          </div>
        </div>

        {/* Alunos */}
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800 text-lg">Alunos</h4>
          <div className="space-y-2 mt-2">
            {students.map((user) => (
              <SingleLastUserCard key={user._id} user={user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
