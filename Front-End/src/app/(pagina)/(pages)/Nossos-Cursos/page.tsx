"use client";
import React, { useRef, useState } from "react";
import CourseInfoCards from "@/components/Page_Components/comp_cursos/CourseInfoCards";
import ImageTextSection from "@/components/Page_Components/comp_cursos/ImageTextSection";
import SectionDescription from "@/components/Page_Components/comp_cursos/SectionDescription";
import CursosArray from "@/database/Fixed/CursosArray";
import Header from "@/components/optional/header";
import CursosIntroSection from "@/components/Page_Components/comp_cursos/CursosIntroSection";

export default function Cursos() {
  const [cursoSelecionado, setCursoSelecionado] = useState(null);
  const cursoRef = useRef(null); // ref para scroll

  // Função para selecionar curso
  const selecionarCurso = (cursoId) => {
    // Função para encontrar o curso na lista de cursos
    const curso = CursosArray.find((curso) => curso.id === cursoId);
    setCursoSelecionado(curso);

    // Aguarda atualização do estado e faz scroll com animação
    setTimeout(() => {
      if (cursoRef.current) {
        cursoRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // delay para garantir que o conteúdo seja renderizado
  };

  return (
    <div className="flex flex-1 flex-col text-white scroll-smooth">
      <CursosIntroSection
        cursos={CursosArray}
        selecionarCurso={selecionarCurso}
      />

      {/* Conteúdo Dinâmico/Exibição do Curso selecionado */}
      {cursoSelecionado && (
        <section
          ref={cursoRef}
          id={cursoSelecionado.id}
          className="flex flex-col"
        >
          <Header
            titulo={cursoSelecionado.titulo}
            image_URl={cursoSelecionado.HeaderImageSrc}
          />
          <div className="flex flex-col w-full justify-between sm:flex-col sm:items-center md:flex-row md:items-stretch">
            <div className="flex flex-col items-center p-5 bg-white/50 backdrop-blur-md rounded-md justify-end w-full mb-8 md:mx-12 mt-8">
              {cursoSelecionado.sections.map((section, index) => (
                <SectionDescription
                  key={index}
                  title={section.title}
                  description={section.description}
                />
              ))}
              {cursoSelecionado.infoCards.map((card, index) => (
                <CourseInfoCards
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              ))}
              {cursoSelecionado.imageSections.map((section, index) => (
                <ImageTextSection
                  key={index}
                  reverse={index % 2 === 0}
                  imageSrc={section.imageSrc}
                  imageAlt={section.imageAlt}
                  title={section.title}
                  description={section.description}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
