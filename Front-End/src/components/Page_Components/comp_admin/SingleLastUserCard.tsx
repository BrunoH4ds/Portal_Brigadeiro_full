interface User {
  _id: string;
  name: string;
  created_at: string;
}

interface Props {
  user: User;
}

export default function SingleLastUserCard({ user }: Props) {
  // Evita erro caso a data venha undefined
  const rawDate = user.created_at ? new Date(user.created_at) : null;

  const formattedDate = rawDate
    ? rawDate.toLocaleDateString("pt-BR", {
        timeZone: "UTC",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    : "--/--/----";

  return (
    <div className="flex bg-blue-900 p-2 rounded-md justify-between items-center">
      <div className="flex flex-col">
        <span className="font-semibold text-white">{user.name}</span>
      </div>
      <span className="text-xs text-gray-300">{formattedDate}</span>
    </div>
  );
}
