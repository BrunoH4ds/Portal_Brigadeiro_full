interface Props {
  _id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  Ra: string;
  admin: boolean;
  type: "Aluno" | "Professor";
  turma?: string;
  curso?: string;
  materia?: string;
  openModal: (user: Props) => void;
}

export default function SingleItemUsers(props: Props) {
  return (
    <div
      onClick={() => props.openModal(props)}
      className="cursor-pointer bg-blue-900 p-4 rounded-md text-white mb-4 hover:bg-blue-800 transition-colors"
    >
      <div className="flex justify-between items-center">
        <div>
          <span className="font-semibold text-gray-200">Nome:</span> {props.name}
          <div className="text-sm text-gray-300">
            <span className="font-semibold">Tipo:</span> {props.type} {" | "}
            <span className="font-semibold">Admin:</span> {props.admin ? "Sim" : "Não"}
          </div>
        </div>
        <div className="text-xs text-gray-300 text-right">
          <span className="block font-semibold">Adicionado em:</span>
          {new Date(props.createdAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}
