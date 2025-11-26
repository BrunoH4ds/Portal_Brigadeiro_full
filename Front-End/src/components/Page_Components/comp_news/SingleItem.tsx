import Image from "next/image";
import Link from "next/link";

interface SingleItemProps {
  _id: number;
  title: string;
  image: string;
}

export default function SingleItem({
  _id,
  title,
  image,
}: SingleItemProps) {
  return (
    <Link href={`/Noticia/${_id}`}>
      <div className="rounded-md shadow-md overflow-hidden">
        <div className="relative flex flex-col justify-end items-center rounded-md p-5 bg-[#1313138f] backdrop-blur-lg hover:bg-blue-900 transition-all duration-300 w-auto h-96 cursor-pointer">
          <Image
            src={image}
            alt={`Noticia: ${title}`}
            layout="fill"
            draggable={false}
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-40"
          />
          <h3 className="text-white text-2xl font-bold text-center mt-4">{title}</h3>
        </div>
      </div>
    </Link>
  );
}
