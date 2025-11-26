import FaqInfoBlock from "@/components/Page_Components/comp_faq/FaqInfoBlock";
import { IconBook } from "@tabler/icons-react";

export default function Faq() {
  return (
    <div className="flex-1 mt-28 mb-8 mx-3 md:mx-12 bg-white/50 backdrop-blur-md p-8 rounded-lg shadow-xl">
      <div className="flex flex-col items-center text-blue-800 justify-center mb-6">
        <IconBook size={70} className="mb-1" />
        <h1 className="text-5xl font-bold mb-2 text-center">
          Perguntas Frequentes
        </h1>
        <p className="text-xl text-white text-center">
          Aqui você encontra algumas das perguntas mais comuns sobre a
          Brigadeiro.
        </p>
      </div>

      <div className="bg-white/50 p-6 rounded-lg shadow-md space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Sobre a Escola Brigadeiro Eduardo Gomes:
          </h2>
          {/* Perguntas frequentes sobre a escola */}
          <div className="space-y-6">
            <FaqInfoBlock
              title="O que a Escola Estadual Brigadeiro Eduardo Gomes Oferece?"
              description="Ensino médio e cursos técnicos."
            />
            <FaqInfoBlock
              title="Quais cursos a Escola Estadual Brigadeiro Eduardo Gomes oferece?"
              description="Até o momento são 3 cursos técnicos, exclusivos para o ensino médio (Educação Profissional)."
            />
            <FaqInfoBlock
              title="A Escola Estadual Brigadeiro Eduardo Gomes é integral?"
              description= "Até o momento, temos dois horários: manhã (não integral, do 6º ano do Ensino Fundamental ao 1º ano do Ensino Médio) e tarde (integral, do 2º ao 3º ano do Ensino Médio)."
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}