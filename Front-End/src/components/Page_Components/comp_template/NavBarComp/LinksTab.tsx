import { IconHomeFilled } from "@tabler/icons-react";
import Link from "next/link";

export default function LinksTab() {
  return (
    <ul className="flex flex-col md:flex-row items-center justify-center font-semibold gap-3 md:gap-7 w-full text-base md:text-base">
      {/* Notícias */}
      <li className="w-full md:w-auto">
        <Link
          href="/Noticias"
          className="block w-full text-center px-4 py-2 md:px-0 md:py-0 rounded-md 
          bg-white/30 hover:bg-blue-800 hover:text-white transition-all duration-300 
          md:bg-transparent md:hover:bg-transparent md:hover:text-blue-800"
        >
          Notícias
        </Link>
      </li>

      {/* Cursos */}
      <li className="w-full md:w-auto">
        <Link
          href="/Nossos-Cursos"
          className="block w-full text-center px-4 py-2 md:px-0 md:py-0 rounded-md 
          bg-white/30 hover:bg-blue-800 hover:text-white transition-all duration-300 
          md:bg-transparent md:hover:bg-transparent md:hover:text-blue-800"
        >
          Cursos
        </Link>
      </li>

      {/* Home Icon */}
      <li className="w-full md:w-auto">
        <Link
          href="/"
          className="block w-full text-center px-4 py-2 md:px-0 md:py-0 rounded-md 
    bg-white/30 hover:bg-blue-800 hover:text-white transition-all duration-300 
    md:bg-transparent md:hover:bg-transparent md:hover:text-blue-800"
        >
          {/* Texto visível apenas no mobile */}
          <span className="block md:hidden">Início</span>

          {/* Ícone visível a partir do md (tablet+) */}
          <IconHomeFilled size={24} className="hidden md:block mx-auto" />
        </Link>
      </li>

      {/* Contato */}
      <li className="w-full md:w-auto">
        <Link
          href="/Contato"
          className="block w-full text-center px-4 py-2 md:px-0 md:py-0 rounded-md 
          bg-white/30 hover:bg-blue-800 hover:text-white transition-all duration-300 
          md:bg-transparent md:hover:bg-transparent md:hover:text-blue-800"
        >
          Contato
        </Link>
      </li>

      {/* FAQ */}
      <li className="w-full md:w-auto">
        <Link
          href="/Faq"
          className="block w-full text-center px-4 py-2 md:px-0 md:py-0 rounded-md 
          bg-white/30 hover:bg-blue-800 hover:text-white transition-all duration-300 
          md:bg-transparent md:hover:bg-transparent md:hover:text-blue-800"
        >
          FAQ
        </Link>
      </li>
    </ul>
  );
}
