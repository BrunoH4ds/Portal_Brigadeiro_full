import Image from "next/image";
import Link from "next/link";

export interface LinkPortal {
  href: string;
  image: string;
  alt: string;
  name: string;
}

export default function LinkPortal({ href, alt, name, image }: LinkPortal) {
  return (
    <div>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl font-semibold text-gray-800"
      >
        <div className="flex w-full h-full md:w-auto bg-white/50 hover:bg-blue-900/50 hover:text-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2">
            <Image
              src={image}
              width={70}
              height={50}
              alt={alt}
              className="rounded-md"
            />
            <span className="truncate max-w-full text-wrap">{name}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
