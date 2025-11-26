import Link from "next/link";

export default function FooterNavLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-7 text-center md:text-left">
      <div className="flex flex-col items-center">
        <p className="text-lg text-blue-800">Links úteis</p>
        <Link href="/" className="text-sm my-1 hover:text-blue-800">
          Inicio
        </Link>
        <Link href="/Noticias" className="text-sm my-1 hover:text-blue-800">
          Noticias
        </Link>
        <Link href="/Nossos-Cursos" className="text-sm my-1 hover:text-blue-800">
          Cursos
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-lg text-blue-800">Contato</p>
        <Link href="/Contato" className="text-sm my-1 hover:text-blue-800">
          Telefone
        </Link>
        <Link href="/Contato" className="text-sm my-1 hover:text-blue-800">
          Localização
        </Link>
        <Link href="/Contato" className="text-sm my-1 hover:text-blue-800">
          Emails
        </Link>
      </div>
    </div>
  );
}
