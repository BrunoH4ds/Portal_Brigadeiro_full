export default function Methodology() {
  return (
    <section
      className="flex flex-col items-center lg:flex-row justify-around p-5 gap-10 bg-blend-darken bg-cover bg-center"
      style={{
        backgroundImage: `url("/Home/atention.png")`, // Usa a URL da imagem recebida via props
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Cor de fundo com opacidade para escurecer
      }}
    >
      <div className="flex flex-col justify-center items-center w-3/4 h-full text-white px-5">
        <h1 className="font-bold text-5xl sm:text-7xl">Metodologia</h1>
        <p className="mt-4 text-center">
          Nos adotamos uma metodologia ativa de ensino, que coloca o aluno como
          protagonista do seu aprendizado. Acreditamos na integração entre
          teoria e prática, proporcionando experiências reais e desenvolvendo
          habilidades técnicas e sociais que preparam os alunos para o mercado
          de trabalho.
        </p>
        <p className="mt-4 text-center">
          Nosso foco é a aprendizagem colaborativa, com o uso de tecnologias
          inovadoras e projetos que estimulam a criatividade, a resolução de
          problemas e o pensamento crítico.
        </p>
        <a
          href="https://midiasstoragesec.blob.core.windows.net/001/2022/02/prticas-pedaggicas-e-metodologias-de-ensino-das-modalidades-e-atendimento-especializado--volume-1-1.pdf"
          className="mt-6 bg-blue-900 hover:bg-blue-800 rounded-md p-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Saiba mais.
        </a>
      </div>
    </section>
  );
}
