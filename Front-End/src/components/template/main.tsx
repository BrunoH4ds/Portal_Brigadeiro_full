import { UserProvider } from "@/context/UserContext";
import Footer from "./footer";
import NavBar from "./navBar";
import { TaskProvider } from "@/context/TaskContext";

export interface MainProps {
  children: React.ReactNode; 
  className?: string;
  semCabecalho?: boolean;
  semRodape?: boolean;
}

export default function Main({ children, className, semCabecalho, semRodape }: MainProps) {
  return (
    <UserProvider>
      <TaskProvider>
        <div
          className={`relative flex flex-col flex-1 bg-blue-950 bg-cover bg-center ${className}`} 
          style={{ backgroundImage: `url("/BG.png")` }}  // Pode se considerar usar Tailwind para background, mas está correto assim
        >
          {/* Condicional para exibir ou não o cabeçalho */}
          {!semCabecalho && <NavBar />}

          {/* Conteúdo */}
          <main className="flex flex-1 min-h-screen w-screen justify-center items-center text-white">
            {children}
          </main>

          {/* Rodapé condicional */}
          {!semRodape && <Footer />}
        </div>
      </TaskProvider>
    </UserProvider>
  );
}
