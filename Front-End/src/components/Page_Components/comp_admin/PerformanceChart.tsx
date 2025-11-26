"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrando os componentes necessários para o Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const PerformanceChart = () => {
  const chartData = {
    labels: Array.from({ length: 30 }, (_, i) => `Dia ${i + 1}`), // Labels dos dias
    datasets: [
      {
        label: "Novos Usuários",
        data: Array.from(
          { length: 30 },
          () => Math.floor(Math.random() * 10) + 1
        ), // Dados simulados
        backgroundColor: "#1c398e", // Cor de fundo das barras
        borderColor: "#1c398e", // Cor da borda das barras
        borderWidth: 1, // Largura da borda das barras
      },
      {
        label: "Páginas Publicadas",
        data: Array.from(
          { length: 30 },
          () => Math.floor(Math.random() * 5) + 1
        ), // Dados simulados
        backgroundColor: "#7D4BFF", // Cor de fundo das barras
        borderColor: "#7D4BFF", // Cor da borda das barras
        borderWidth: 1, // Largura da borda das barras
      },
    ],
  };

  const chartOptions = {
    responsive: true, // Torna o gráfico responsivo
    maintainAspectRatio: false, // Permite que o gráfico ocupe o máximo de espaço disponível
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
  };

  return (
    <div className="flex flex-col mt-8 bg-white/50 p-6 rounded-lg shadow-md">
      <h3 className="font-semibold text-gray-800 text-lg">
        Desempenho dos Últimos 30 Dias
      </h3>
      <p className="mt-2 text-gray-700 text-sm mb-2">
        Visualize o desempenho das suas páginas e notícias no último mês.
      </p>
      <div className="w-full h-72"> {/* Define a altura do gráfico */}
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};
