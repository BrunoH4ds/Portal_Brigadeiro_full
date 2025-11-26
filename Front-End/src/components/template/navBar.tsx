"use client";
import { useState } from "react";
import Logo from "../shared/Logo";
import LinksTab from "../Page_Components/comp_template/NavBarComp/LinksTab";
import ButtonsLoginSignUp from "../Page_Components/comp_template/NavBarComp/ButtonsLoginSingUp";
import { IconMenu2 } from "@tabler/icons-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-screen bg-white/50 text-black px-5 py-1 backdrop-blur-md z-20">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex-1">
          <div className="flex">
            <Logo Logorounded={false} />
          </div>
        </div>

        {/* Links centralizados */}
        <div className="hidden md:flex justify-center flex-1 mx-5">
          <LinksTab />
        </div>

        {/* Botões ou usuário */}
        <div className="hidden md:flex justify-end flex-1">
          <ButtonsLoginSignUp />
        </div>

        {/* Botão Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black cursor-pointer">
            <IconMenu2 />
          </button>
        </div>
      </div>

      {/* Mobile Menu com animação */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-800 ${
          isMenuOpen ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          <LinksTab />
          <hr className="w-full border-black/30 md:hidden" />
          <ButtonsLoginSignUp />
        </div>
      </div>
    </nav>
  );
}
