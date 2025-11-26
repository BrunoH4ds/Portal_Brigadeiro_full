import Link from "next/link";

interface IconButtonProps {
  label: string;
  url: string;
  icon: React.ReactNode;
  newTab?: boolean;
  variant: "github" | "linkedin" | "instagram" | "twitter" | "facebook" | "youtube" | "whatsapp" | "telegram";
}

export default function IconButton({
  label,
  url,
  icon,
  newTab = false,
  variant,
}: IconButtonProps) {
  // Mapeando as variantes para as classes de estilo
  const variantClasses = {
    github: "bg-gray-800 text-white hover:bg-gray-700", // GitHub: preto e branco
    linkedin: "bg-blue-700 text-white hover:bg-blue-600", // LinkedIn: azul
    instagram: "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:opacity-80", // Instagram: degradê
    twitter: "bg-blue-500 text-white hover:bg-blue-400", // Twitter: azul
    facebook: "bg-blue-600 text-white hover:bg-blue-500", // Facebook: azul
    youtube: "bg-red-600 text-white hover:bg-red-500", // YouTube: vermelho
    whatsapp: "bg-green-500 text-white hover:bg-green-400", // WhatsApp: verde
    telegram: "bg-blue-500 text-white hover:bg-blue-400", // Telegram: azul claro
  };

  return (
    <Link
      href={url}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
      className={`inline-flex flex-1 justify-center items-center gap-1 px-3 py-1.5 rounded-md ${variantClasses[variant]} transition-colors duration-200 text-sm sm:text-base font-medium`}
    >
      {icon}
      {label}
    </Link>
  );
}
