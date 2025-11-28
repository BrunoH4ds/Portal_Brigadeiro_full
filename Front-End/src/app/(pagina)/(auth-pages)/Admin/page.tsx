"use client";

import { useEffect, useState } from "react";
import { PerformanceChart } from "@/components/Page_Components/comp_admin/PerformanceChart";
import { TaskList } from "@/components/Page_Components/comp_admin/TaskList";
import StatCard from "@/components/Page_Components/comp_admin/StatCard";
import LastUsersCard from "@/components/Page_Components/comp_admin/LastUserCard";

import {
  IconUser,
  IconFileText,
  IconNews,
  IconMessage,
} from "@tabler/icons-react";
import { getStats } from "../../../../../api/statsCrud";

export default function AdminPage() {
  const [stats, setStats] = useState({
    users: 0,
    news: 0,
    contacts: 0,
    pages: 0,
  });

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await getStats();
        if (res) {
        setStats(res);
        }
      } catch (e) {
        console.error("Erro ao carregar estatísticas:", e);
      }
    }

    loadStats();
  }, []);

  return (
      <div>
        <h2 className="text-2xl text-gray-800 font-semibold">Visão Geral</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-3 gap-5 items-center justify-between">
          <StatCard
            icon={<IconUser />}
            title="Usuários"
            value={stats.users}
            description="Total de usuários"
          />
          <StatCard
            icon={<IconFileText />}
            title="Páginas"
            value={stats.pages}
            description="Total de páginas"
          />
          <StatCard
            icon={<IconNews />}
            title="Notícias"
            value={stats.news}
            description="Total de notícias"
          />
          <StatCard
            icon={<IconMessage />}
            title="Contatos"
            value={stats.contacts}
            description="Total de contatos"
          />
        </div>

        <TaskList />
        <PerformanceChart />
        <LastUsersCard />
      </div>
  );
}
