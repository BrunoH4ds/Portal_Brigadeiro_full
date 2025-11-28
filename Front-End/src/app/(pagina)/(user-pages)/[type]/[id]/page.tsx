"use client";

import { useUser } from "@/context/UserContext";
import ProtectedRoute from "@/components/Protection/ProtectedRoute";
import NotFoundError from "@/components/optional/NotFoundError";
import UserSidebar from "@/components/Page_Components/comp_user/UserSidebar";
import UserInfoCard from "@/components/Page_Components/comp_user/UserInfoCard";
import UserLinksGrid from "@/components/Page_Components/comp_user/UserLinksGrid";
import React from "react";

interface StudentPageProps {
  params: { id: string; type: string };
}

export default function StudentPage({ params }: StudentPageProps) {
  const { id, type } = React.use(params);
  const { user } = useUser();

  return (
    <ProtectedRoute expectedId={id} expectedType={type}>
      {/* Se o contexto não carregou usuário, mostra erro */}
      {!user ? (
        <NotFoundError />
      ) : (
        <div className="flex-col lg:flex-row flex-1 mt-28 mb-8 mx-3 gap-8 lg:gap-0 p-8 lg:p-0 lg:mx-12 bg-white/50 backdrop-blur-md rounded-lg shadow-xl flex">
          <UserSidebar user={user} type={type} />
          <div className="flex flex-1 flex-col lg:m-8 gap-8">
            <UserInfoCard user={user} />
            <UserLinksGrid />
          </div>
        </div>
      )}
    </ProtectedRoute>
  );
}
