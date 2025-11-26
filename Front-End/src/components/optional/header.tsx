import { IconArrowBadgeDownFilled } from "@tabler/icons-react";

export interface HeaderProps {
  titulo: string;
  sub_titulo?: string;
  data?: string;
  author?: string;
  image_URl: string;
  fadeTop?: boolean;
  fadeBottom?: boolean;
  fadeTopColor?: string;     // ex: "from-black"
  fadeBottomColor?: string;  // ex: "from-blue-950"
}

export default function Header({
  titulo,
  sub_titulo,
  author,
  data,
  image_URl,
  fadeTop = false,
  fadeBottom = false,
  fadeTopColor = "from-blue-950",
  fadeBottomColor = "from-blue-950",
}: HeaderProps) {
  return (
    <header
      className="relative flex flex-col w-screen h-screen bg-cover bg-center bg-blend-darken"
      style={{
        backgroundImage: `url(${image_URl})`,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* FADE SUPERIOR */}
      {fadeTop && (
        <div
          className={`absolute top-0 left-0 w-full h-10 bg-gradient-to-b ${fadeTopColor} to-transparent pointer-events-none`}
        />
      )}

      {/* Conteúdo centralizado */}
      <div className="flex flex-col justify-center items-center w-full h-full text-white px-12">
        <h1 className="font-bold text-4xl sm:text-7xl">{titulo}</h1>
        {sub_titulo && <p className="mt-2 text-lg">{sub_titulo}</p>}
      </div>

      {/* Rodapé com dados e ícone */}
      <div className="flex flex-col justify-end items-center text-white z-10">
        <div
          className={`flex ${
            !author && !data ? "justify-center" : "justify-between"
          } w-full items-center text-white mb-8 px-6 sm:px-12`}
        >
          {author && <p className="mt-2 text-lg font-bold text-left">Autor: {author}</p>}
          <IconArrowBadgeDownFilled size={50} className="flex-none mx-2"/>
          {data && <p className="mt-2 text-lg font-bold text-right">Publicação: {data}</p>}
        </div>
      </div>

      {/* FADE INFERIOR */}
      {fadeBottom && (
        <div
          className={`absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t ${fadeBottomColor} to-transparent pointer-events-none`}
        />
      )}
    </header>
  );
}
