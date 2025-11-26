import Link from "next/link";
import Logo from "../shared/Logo";
import FooterNavLinks from "../Page_Components/comp_template/footerComp/FooterNavLinks";
import Social from "../Page_Components/comp_template/footerComp/Social";
import { IconMapPin, IconPhoneCall } from "@tabler/icons-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <section className="flex flex-col items-center bg-white/50 text-black p-5 backdrop-blur-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 px-5">
          <Logo logo={false} width={180} />
          {/* Links de Navegação */}
          <div>
            <FooterNavLinks />
          </div>

          {/* Redes Sociais */}
          <Social />
        </div>

        {/* More Infos */}
        <div className="container mx-auto gap-10 px-5 flex justify-between flex-col md:flex-row mt-5">
          <div className="flex items-center justify-center">
            <Link href="/Developers">
              <p className="text-sm hover:text-blue-800 transition-colors">
                Desenvolvedores
              </p>
            </Link>
            <span className=" mx-2">|</span>
            <Link href="/Politica-de-Privacidade">
              <p className="text-sm hover:text-blue-800 transition-colors">
                Política de Privacidade
              </p>
            </Link>
          </div>
          <div className="flex justify-center">
            <p className="text-sm ">
              &copy; {currentYear} PortalBeg.com - Todos os direitos reservados
            </p>
          </div>
        </div>
        <hr className="border-black/30 my-5 w-3/4" />
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 px-5">
          <div className="flex items-center gap-2">
            <IconMapPin size={40} />
            <Link
              href="https://maps.app.goo.gl/K6dbV9aZV2KkhyGE9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline"
            >
              R. João Amado Coutinho, 1010 - Conj. Res. Elisio Teixeira Leite,
              São Paulo - SP, 02815-140
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <IconPhoneCall size={40} />
            <p className="text-sm">+55 11 3971-2787</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
