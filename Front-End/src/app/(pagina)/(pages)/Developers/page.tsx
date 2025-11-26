import ImageTextSection from "@/components/Page_Components/comp_cursos/ImageTextSection";
import SectionDescription from "@/components/Page_Components/comp_cursos/SectionDescription";
import IconButton from "@/components/Page_Components/comp_devs/IconButton";
import Header from "@/components/optional/header";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

export default function Developers() {
  return (
    <div className="flex flex-col bg-white/50 backdrop-blur-md text-black min-h-screen">
      <Header
        titulo="Desenvolvedores"
        image_URl="https://www.michaelpage.com.au/sites/michaelpage.com.au/files/2022-01/Software%20Developer.jpg"
      />

      <main className="px-4 py-8 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        {/* Info da pagina */}
        <div className="text-center mb-12">
          <SectionDescription
            title="Equipe de Desenvolvimento"
            description="Conheça a equipe responsável pela criação deste projeto. Cada membro contribuiu com habilidades únicas para entregar uma solução completa e inovadora."
          />
        </div>

        {/* Desenvolvedores */}
        <div className="space-y-12">
          {/** João Silva */}
          <div className="transition duration-300 hover:scale-[1.02]">
            <ImageTextSection
              background
              imageSrc="/dev/dev5.png"
              imageAlt="Bruno Henrique"
              title="Bruno Henrique - Front-end Developer"
              description="Responsável pela criação das interfaces, navegação intuitiva e design responsivo. tenho paixão por transformar ideias em experiências visuais memoráveis."
              extraContent={
                <div className="flex flex-wrap gap-3">
                  <IconButton
                    label="GitHub"
                    url="https://github.com/BrunoH4ds"
                    icon={<IconBrandGithub size={20} />}
                    variant="github"
                    newTab
                  />
                </div>
              }
            />
          </div>

          <div className="transition duration-300 hover:scale-[1.02]">
            <ImageTextSection
              background
              reverse
              imageSrc="/Dev/dev3.png"
              imageAlt="Isaias Ribeiro"
              title="Isaias Ribeiro - Back-end Developer"
              description="Especialista em APIs, bancos de dados e integração de sistemas. mente por trás da infraestrutura que garante a estabilidade e performance do projeto."
              extraContent={
                <div className="flex flex-wrap gap-3">
                  <IconButton
                    label="GitHub"
                    url="https://github.com/IasPY"
                    icon={<IconBrandGithub size={20} />}
                    variant="github"
                    newTab
                  />
                  <IconButton
                    label="Instagram"
                    url="https://github.com/joaosilva"
                    icon={<IconBrandInstagram size={25} />}
                    variant="instagram"
                    newTab
                  />
                  <IconButton
                    label="Linkedin"
                    url="https://github.com/joaosilva"
                    icon={<IconBrandLinkedin size={25} />}
                    variant="linkedin"
                    newTab
                  />
                  
                </div>
              }
            />
          </div>

          {/** Carlos Mendes */}
          <div className="transition duration-300 hover:scale-[1.02]">
            <ImageTextSection
              background
              imageSrc="/dev/dev4.png"
              imageAlt="Joao Victor"
              title="Joao Victor - Cientista de Dados"
              description="Responsável pela criação do banco de dados e a integração contínua e infraestrutura. assegurou que o projeto fosse escalável e eficiente."
              extraContent={
                <div className="flex flex-wrap gap-3">
                  <IconButton
                    label="GitHub"
                    url="https://github.com/joaosilva"
                    icon={<IconBrandGithub size={20} />}
                    variant="github"
                    newTab
                  />
                  <IconButton
                    label="Instagram"
                    url="https://github.com/joaosilva"
                    icon={<IconBrandInstagram size={25} />}
                    variant="instagram"
                    newTab
                  />
                  <IconButton
                    label="Linkedin"
                    url="https://github.com/joaosilva"
                    icon={<IconBrandLinkedin size={25} />}
                    variant="linkedin"
                    newTab
                  />
                </div>
              }
            />
          </div>

          {/** Marina Rocha */}
          <div className="transition duration-300 hover:scale-[1.02]">
            <ImageTextSection
              background
              reverse
              imageSrc="/dev/dev2.png"
              imageAlt="Emilly Araujo"
              title="Emilly Araujo - UI/UX Designer"
              description="Criadora da identidade visual e da experiência do usuário. trouxe conceitos modernos de design, garantindo que o produto fosse intuitivo e agradável de usar."
              extraContent={
                <div className="flex flex-wrap gap-3">
                  <IconButton
                    label="GitHub"
                    url="https://github.com/joaosilva"
                    icon={<IconBrandGithub size={20} />}
                    variant="github"
                    newTab
                  />
                  <IconButton
                    label="Instagram"
                    url="https://github.com/joaosilva"
                    icon={<IconBrandInstagram size={25} />}
                    variant="instagram"
                    newTab
                  />
                  <IconButton
                    label="Linkedin"
                    url="https://github.com/joaosilva"
                    icon={<IconBrandLinkedin size={25} />}
                    variant="linkedin"
                    newTab
                  />
                  
                </div>
              }
            />
          </div>

          {/** Lucas Fernandes */}
          <div className="transition duration-300 hover:scale-[1.02]">
            <ImageTextSection
              background
              imageSrc="/dev/dev1.png"
              imageAlt="Gabriel Dos Santos"
              title="Gabriel Dos Santos - Auxiliador de registros"
              description="Responsável por integrar as diferentes camadas do sistema, Lucas atuou tanto no backend quanto no frontend, garantindo que tudo funcionasse de forma coesa."
              extraContent={
                <div className="flex flex-wrap gap-3">
                  <IconButton
                    label="GitHub"
                    url="https://github.com/joaosilva"
                    icon={<IconBrandGithub size={20} />}
                    variant="github"
                    newTab
                  />
                  <IconButton
                    label="Instagram"
                    url="https://github.com/joaosilva"
                    icon={<IconBrandInstagram size={25} />}
                    variant="instagram"
                    newTab
                  />
                  <IconButton
                    label="Linkedin"
                    url="https://github.com/joaosilva"
                    icon={<IconBrandLinkedin size={25} />}
                    variant="linkedin"
                    newTab
                  />
                  
                </div>
              }
            />
          </div>
        </div>
      </main>
    </div>
  );
}
