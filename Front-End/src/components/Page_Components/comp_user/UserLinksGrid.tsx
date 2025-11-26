import LinkPortal from "./LinkPortal";

export default function UserLinksGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <LinkPortal
        href="https://saladofuturo.educacao.sp.gov.br"
        image="https://images.sftcdn.net/images/t_app-icon-m/p/9ba2a0a6-dd15-4dcf-a5bb-9edba5d219ff/3011115403/sala-do-futuro-professor-logo"
        name="Sala Do Futuro"
        alt="Sala Do Futuro"
      />
      <LinkPortal
        href="https://cmspweb.ip.tv"
        image="https://s3.sa-east-1.amazonaws.com/edusp-static.ip.tv/room/cards/edusp/julianasanche3225895-sp/pc5HVEaryskRc7tqNGZ0ZhlMscseYU.png"
        name="Cmsp"
        alt="Cmsp"
      />
      <LinkPortal
        href="https://educacaoprofissional.educacao.sp.gov.br"
        image="https://s3.sa-east-1.amazonaws.com/edusp-static.ip.tv/room/cards/edusp/elianemararod3272389-sp/IMwuZGs5eI7GuXy0bXz2ZwvprMIvR1.png"
        name="Educação Profissional"
        alt="Educação Profissional"
      />
      <LinkPortal
        href="https://cursos.alura.com.br"
        image="https://s3.sa-east-1.amazonaws.com/edusp-static.ip.tv/room/cards/edusp/julianasanche3225895-sp/Y6ZcJcrUQRv6ZeIN3uw3Bpb751VErX.png"
        name="Alura"
        alt="Alura"
      />
      <LinkPortal
        href="https://learn.corporate.ef.com"
        image="https://s3.sa-east-1.amazonaws.com/edusp-static.ip.tv/room/cards/edusp/julianasanche3225895-sp/ymjt4ZTmCK2SAc6UNNNOVnwedAmcF8.png"
        name="Speak"
        alt="Speak"
      />
      <LinkPortal
        href="https://livros.arvore.com.br"
        image="https://s3.sa-east-1.amazonaws.com/edusp-static.ip.tv/room/cards/edusp/julianasanche3225895-sp/RbJxeFVGxD8ioStvVh3UvdJEgMQZWI.png"
        name="LeiaSP"
        alt="LeiaSP"
      />
    </div>
  );
}
