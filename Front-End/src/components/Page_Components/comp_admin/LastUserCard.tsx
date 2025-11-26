import { UsersArrayAluno } from "@/database/UsersArrayAluno";
import { UsersArrayProfessor } from "@/database/UsersArrayProfessor";
import SingleLastUserCard from "./SingleLastUserCard"; // ajuste o caminho se necessário

export default function LastUsersCard() {
  const lastProfessors = [...UsersArrayProfessor]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 4);

  const lastStudents = [...UsersArrayAluno]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 4);

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
            {lastProfessors.map((user) => (
              <SingleLastUserCard key={user._id} user={user} />
            ))}
          </div>
        </div>

        {/* Alunos */}
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800 text-lg">Alunos</h4>
          <div className="space-y-2 mt-2">
            {lastStudents.map((user) => (
              <SingleLastUserCard key={user._id} user={user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
