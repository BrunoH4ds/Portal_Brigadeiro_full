interface User {
  email: string;
  Ra?: string;
  Rg?: string;
  curso?: string;
  materia?: string;
}

export default function UserInfoCard({ user }: { user: User }) {
  // Função para exibir um campo com título condicional e valor
  const renderField = (label: string, value: string | undefined) => {
    if (value) {
      return (
        <>
          <h2 className="text-2xl font-semibold text-gray-800">{label}:</h2>
          <p className="text-lg text-gray-700">{value}</p>
        </>
      );
    }
    return null;
  };

  return (
    <div className="bg-white/50 p-6 rounded-lg shadow-md space-y-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center">Dados Pessoais</h1>

      {/* Exibindo email */}
      {renderField('Email', user.email)}

      {/* Exibindo RA ou RG */}
      {user.Ra || user.Rg ? (
        <h2 className="text-2xl font-semibold text-gray-800">
          {user.Ra ? "Ra" : "Rg"}:
        </h2>
      ) : null}
      <p className="text-lg text-gray-700">{user.Ra || user.Rg}</p>

      {/* Exibindo Curso ou Matéria */}
      {user.curso || user.materia ? (
        <h2 className="text-2xl font-semibold text-gray-800">
          {user.curso ? "Curso" : "Matéria"}:
        </h2>
      ) : null}
      <p className="text-lg text-gray-700">{user.curso || user.materia}</p>
    </div>
  );
}
