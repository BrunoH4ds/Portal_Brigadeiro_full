import {
  IconDeviceLaptop,
  IconTruckDelivery,
  IconCode,
  IconBooks,
} from "@tabler/icons-react";

interface Curso {
  id: string;
  titulo: string;
  cor: string;
}

interface CursosIntroSectionProps {
  cursos: Curso[];
  selecionarCurso: (id: string) => void;
}

export default function CursosIntroSection({
  cursos,
  selecionarCurso,
}: CursosIntroSectionProps) {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center py-20 px-6 text-white overflow-hidden">
      {/* Ícones de fundo */}
      <IconDeviceLaptop className="absolute top-10 left-10 w-32 h-32 text-white/10" />
      <IconTruckDelivery className="absolute top-40 right-16 w-28 h-28 text-white/10" />
      <IconCode className="absolute bottom-40 left-[20%] w-24 h-24 text-white/10 rotate-12" />
      <IconBooks className="absolute bottom-10 right-12 w-28 h-28 text-white/10" />

      {/* Conteúdo principal */}
      <div className="z-10 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Conheça todos os cursos que oferecemos
        </h1>
        <p className="text-lg text-gray-300 mb-10 max-w-xl">
          Clique em uma área para ver mais informações sobre o curso.
        </p>

        <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {cursos.map((curso) => (
            <button
              key={curso.id}
              className={`${curso.cor} cursor-pointer hover:brightness-125 text-white text-lg font-semibold py-4 px-6 rounded-lg shadow-lg transition-all duration-300`}
              onClick={() => selecionarCurso(curso.id)}
            >
              {curso.titulo}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
