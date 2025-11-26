"use client";
import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";

interface Props {
  name: string;
  description: string;
  image: string;
}

export default function TeacherCard({ name, description, image }: Props) {
  return (
    <div className="flex flex-col items-center bg-white/50 backdrop-blur-md rounded-md p-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full lg:w-[350px] h-[250px] lg:h-[300px]">
        <Image
          src={image}
          alt={name}
          width={500}
          height={400}
          draggable={false}
          className="object-cover w-full h-full border-b-4 border-blue-800"
        />
        <div className="absolute flex justify-end top-2.5 right-2.5 text-amber-300">
          {[...Array(5)].map((_, i) => (
            <IconStarFilled key={i} />
          ))}
        </div>
      </div>
      <h1 className="text-blue-800 text-2xl font-bold mt-4">{name}</h1>
      <p className="mt-4 text-center">{description}</p>
    </div>
  );
}
