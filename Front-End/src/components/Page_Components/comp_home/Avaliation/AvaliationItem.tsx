// components/Page_Components/comp_home/AvaliationItem.tsx

import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";

interface AvaliationItemProps {
  name: string;
  image: string;
  rating: number;
  texts: string[];
}

export default function AvaliationItem({ name, image, rating, texts }: AvaliationItemProps) {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between p-5 gap-5 w-full">
      {/* Texto */}
      <div className="flex flex-col justify-center md:w-1/2">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold mt-4">{name}</h1>
          {texts.map((text, idx) => (
            <p key={idx} className="mt-4 text-justify text-lg max-w-3xl">{text}</p>
          ))}
        </div>
      </div>

      {/* Imagem + estrelas */}
      <div className="relative max-w-[400px] h-[350px]">
        <Image
          src={image}
          alt={name}
          width={500}
          height={400}
          draggable={false}
          className="object-cover w-full h-full"
        />
        <div className="absolute flex justify-end bottom-2.5 left-2.5">
          <div className="flex gap-0.5 text-amber-300">
            {[...Array(rating)].map((_, i) => (
              <IconStarFilled key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
