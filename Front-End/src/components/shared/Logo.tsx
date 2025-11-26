import Image from "next/image";
import Link from "next/link";

export interface LogoProps {
  logo?: boolean;
  Logorounded?: boolean;
  width?: number;
  height?: number;
}

export default function Logo({
  logo = true,
  Logorounded = true,
  width = 85,
  height = 0,
}: LogoProps) {
  return (
    <Link href="/">
      {Logorounded && (
        <div className="flex w-auto items-center">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={width}
            height={height}
            draggable={false}
          />
        </div>
      )}
      {logo && (
        <div className="flex w-auto items-center">
          <Image
            src="/Logo_Fitness.png"
            alt="Logo"
            width={width}
            height={height}
            draggable={false}
          />
        </div>
      )}
    </Link>
  );
}
