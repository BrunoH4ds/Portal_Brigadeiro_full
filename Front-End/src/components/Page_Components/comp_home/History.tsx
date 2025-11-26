import Image from "next/image";

export default function History() {
  return (
    <section className="flex flex-col bg-white/50 backdrop-blur-md items-center lg:flex-row justify-around p-5 gap-10">
      {/* Imagem */}
      <div className="relative w-full lg:w-[500px] h-[300px] lg:h-[400px] rounded-md  md:mt-0">
        <Image
          src="/home/School.png"
          alt="Escola"
          width={500}
          height={400}
          className="rounded-md object-cover w-full h-full"
        />
      </div>
      {/* Texto */}
      <div className="flex flex-col lg:w-1/2  justify-center">
        <h1 className="text-3xl font-bold border-b-2 text-blue-800">Nossa Historia</h1>
        <p className="mt-4">
          A nossa historia começou com uma visão do Governo do Estado de São
          Paulo de expandir o acesso à educação técnica de qualidade para jovens
          em todas as regiões. Com a crescente demanda por profissionais
          qualificados em diversas áreas técnicas, foi identificada a
          necessidade de uma escola pública que oferecesse cursos voltados para
          a formação de mão de obra especializada.
        </p>
        <p className="mt-4">
          A construção da escola iniciou-se em um momento de grande
          transformação no sistema educacional do Estado. Em um terreno no
          coração da comunidade, que antes era um espaço desutilizado, foi
          planejada uma infraestrutura moderna, com salas de aula equipadas,
          laboratórios técnicos e áreas de convivência para os alunos.
        </p>
        <p className="mt-4">
          A nossa escola foi inaugurada com grande entusiasmo pela comunidade
          local e autoridades estaduais, sendo um marco importante para a
          educação técnica na região. A partir de sua fundação, milhares de
          estudantes passaram por nossas portas.
        </p>
        <p className="mt-4">
          Desde então nossa Escola tem se mantido fiel ao seu propósito inicial:
          formar profissionais de excelência, preparados para atender às
          necessidades do mercado de trabalho e contribuir para o
          desenvolvimento da sociedade. O legado da escola continua vivo a cada
          estudante que se forma e segue seus caminhos, levando consigo os
          conhecimentos adquiridos e a experiência de ter sido parte dessa
          história.
        </p>
      </div>
    </section>
  );
}
