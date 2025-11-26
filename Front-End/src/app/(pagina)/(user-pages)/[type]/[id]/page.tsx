"use client";

import React from "react";
import { UsersArrayAluno } from "@/database/UsersArrayAluno";
import { UsersArrayProfessor } from "@/database/UsersArrayProfessor";
import { useUser } from "@/context/UserContext";
import ProtectedRoute from "@/components/Protection/ProtectedRoute";
import NotFoundError from "@/components/optional/NotFoundError";
import UserSidebar from "@/components/Page_Components/comp_user/UserSidebar";
import UserInfoCard from "@/components/Page_Components/comp_user/UserInfoCard";
import UserLinksGrid from "@/components/Page_Components/comp_user/UserLinksGrid";

interface StudentPageProps {
  params: { id: string; type: string };
}

export default function StudentPage({ params }: StudentPageProps) {
  const { id, type } = React.use(params);
  const { logout } = useUser();

  //funcao para ler a lista de usuarios e encontrar o ID
  const AccountOBJ =
    type === "Aluno"
      ? UsersArrayAluno.find((a) => a._id === parseInt(id))
      : UsersArrayProfessor.find((p) => p._id === parseInt(id));

  //se nao encontrou da erro
  if (!AccountOBJ) return <NotFoundError />;

  return (
    <ProtectedRoute expectedId={id} expectedType={type}>
      <div className="flex-col lg:flex-row flex-1 mt-28 mb-8 mx-3 gap-8 lg:gap-0 p-8 lg:p-0 lg:mx-12 bg-white/50 backdrop-blur-md rounded-lg shadow-xl flex">
        <UserSidebar user={AccountOBJ} type={type} handleLogout={logout} />
        <div className="flex flex-1 flex-col lg:m-8 gap-8">
          <UserInfoCard user={AccountOBJ} />
          <UserLinksGrid />
        </div>
      </div>
    </ProtectedRoute>
  );
}
