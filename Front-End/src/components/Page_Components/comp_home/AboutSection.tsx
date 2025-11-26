import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="flex flex-col items-center lg:flex-row justify-around m-10 gap-10">
      {/* Texto */}
      <div className="flex flex-col p-5 lg:w-1/2 justify-center text-center md:text-left">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold bg-white/50 rounded-md p-2 text-blue-800">Quem Nós Somos...</h1>
          <p className="text-lg mt-4">
            Somos uma instituição pública vinculada ao Governo do Estado de São
            Paulo, comprometida com a formação de profissionais altamente
            qualificados para o mercado de trabalho. Oferecemos cursos técnicos
            em diversas áreas, com foco em uma educação de qualidade, acessível
            e transformadora.
          </p>
          <p className="text-lg mt-4">
            Nosso compromisso é com a excelência no ensino, preparando nossos
            alunos com habilidades práticas, conhecimento teórico e uma visão
            inovadora. Buscamos desenvolver não apenas competências
            profissionais, mas também valores como ética, cidadania e
            responsabilidade social.
          </p>
          <p className="text-lg mt-4">
            Em Nossa Instituição, acreditamos que a educação é uma ferramenta de
            transformação social, e trabalhamos todos os dias para oferecer uma
            formação que prepare nossos estudantes para o futuro e para os
            desafios do mundo do trabalho.
          </p>
        </div>
      </div>

      {/* Imagem */}
      <div className="relative w-full lg:w-[500px] h-[300px] lg:h-[400px] rounded-md shadow-2xl grayscale hover:grayscale-0 transition-all duration-300 md:mt-0">
        <Image
          src="/Home/class.png"
          alt="Quem Nos somos"
          width={500}
          height={400}
          draggable={false}
          className="rounded-md object-cover w-full h-full object-top"
        />
      </div>
    </section>
  );
}
