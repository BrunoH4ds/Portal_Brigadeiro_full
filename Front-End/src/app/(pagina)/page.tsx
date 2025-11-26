import AboutSection from "@/components/Page_Components/comp_home/AboutSection";
import AvaliationCarousel from "@/components/Page_Components/comp_home/Avaliation/AvaliationCarousel";
import History from "@/components/Page_Components/comp_home/History";
import Methodology from "@/components/Page_Components/comp_home/Methodology";
import Teachers from "@/components/Page_Components/comp_home/Teacher/TeachersSection";
import Header from "@/components/optional/header";

export default function Home() {
  return (
    <div className="w-full">
      {/* Renderizando o Header com a largura total da tela */}
      <Header
        titulo="Bem-Vindo Ao Portal Brigadeiro"
        sub_titulo="Aqui você pode encontrar informações sobre a Escola, eventos, horários, e acompanhar nossos alunos."
        image_URl="/home/Header.png"
      />
      <div className="">
        <AboutSection />
        <Methodology/>
        <History />
        <Teachers/>
        <AvaliationCarousel/>
      </div>
    </div>
  );
}
