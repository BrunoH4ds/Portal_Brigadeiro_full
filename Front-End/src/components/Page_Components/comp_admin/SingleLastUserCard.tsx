interface User {
  _id: string;
  name: string;
  createdAt: string;
}

interface Props {
  user: User;
}

export default function SingleLastUserCard({ user }: Props) {
  // Converta a data para uma string, sem ajustar para o fuso horário local
  const formattedDate = new Date(user.createdAt).toLocaleDateString("pt-BR", {
    timeZone: 'UTC', // Força o uso do UTC na exibição
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  return (
    <div className="flex bg-blue-900 p-2 rounded-md justify-between items-center">
      <div className="flex flex-col">
        <span className="font-semibold">{user.name}</span>
      </div>
      <span className="text-xs text-gray-400">{formattedDate}</span>
    </div>
  );
}
