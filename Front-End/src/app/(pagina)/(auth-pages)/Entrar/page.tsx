import InputsLogin from "@/components/Page_Components/comp_login/InputsLogin";
import RedirectIfLoggedIn from "@/components/Protection/RedirectIfLoggedIn";
import Image from "next/image";

export default function Login() {
  return (
    <RedirectIfLoggedIn>
      <div className="flex flex-1 justify-center items-center mt-28 mb-8">
        <div className="flex flex-col w-4/5 md:w-2/3 lg:w-auto justify-center items-center border border-blue-900 bg-zinc-50/50 backdrop-blur-sm p-5 rounded-md">
          <Image src="/Logo.png" alt="Logo" width={150} height={150} draggable={false} />
          <h1 className="font-bold text-2xl text-blue-900 text-center">
            Area do Aluno e Professor
          </h1>
          <p className="text-1xl text-center w-5/6">
            Caso tenha Problemas com o login entre em contato com um responsável
            da instituição
          </p>
          <div className="my-2 w-5/6 border-b border-black/30" />
          {/* Inputs para login */}
          <div className="flex flex-col justify-center items-center w-full">
            <InputsLogin />
          </div>
        </div>
      </div>
    </RedirectIfLoggedIn>
  );
}
