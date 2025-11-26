import { PerformanceChart } from "@/components/Page_Components/comp_admin/PerformanceChart";
import { TaskList } from "@/components/Page_Components/comp_admin/TaskList";
import StatCard from "@/components/Page_Components/comp_admin/StatCard";
import {
  IconUser,
  IconFileText,
  IconNews,
  IconMessage,
} from "@tabler/icons-react";
import LastUsersCard from "@/components/Page_Components/comp_admin/LastUserCard";

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl text-gray-800 font-semibold">Visão Geral</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-3 gap-5 items-center justify-between">
        {/* Estatísticas Rápidas */}
        <StatCard
          icon={<IconUser />}
          title="Usuarios"
          value={100}
          description="Total de usuários"
        />
        <StatCard
          icon={<IconFileText />}
          title="Páginas"
          value={50}
          description="Total de páginas"
        />
        <StatCard
          icon={<IconNews />}
          title="Notícias"
          value={30}
          description="Total de notícias"
        />
        <StatCard
          icon={<IconMessage />}
          title="Contatos"
          value={20}
          description="Total de contatos"
        />
      </div>
      {/* Tarefas Pendentes */}
      <TaskList />

      {/* Gráfico de Tendências */}
      <PerformanceChart />

      {/* Últimos Usuários */}
      <LastUsersCard />
    </div>
  );
}
