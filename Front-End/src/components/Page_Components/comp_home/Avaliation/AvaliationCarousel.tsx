// components/Page_Components/comp_home/AvaliationCarousel.tsx

"use client";

import { useState } from "react";
import { IconArrowBadgeLeftFilled, IconArrowBadgeRightFilled } from "@tabler/icons-react";
import AvaliationsArray from "@/database/Fixed/AvaliationsArray";
import AvaliationItem from "./AvaliationItem";

export default function AvaliationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? AvaliationsArray.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === AvaliationsArray.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="flex flex-col p-5 gap overflow-hidden">
      {/* Título e botões */}
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <h1 className="text-6xl font-bold p-2 text-center md:text-left">
          Avaliação de nossos estudantes
        </h1>
        <div className="flex items-center my-5 gap-5">
          <button onClick={prevSlide} className="p-1 text-white bg-white/50 hover:bg-blue-800 rounded-full cursor-pointer">
            <IconArrowBadgeLeftFilled size={50} />
          </button>
          <button onClick={nextSlide} className="p-1 text-white bg-white/50 hover:bg-blue-800 rounded-full cursor-pointer">
            <IconArrowBadgeRightFilled size={50} />
          </button>
        </div>
      </div>

      {/* Carrossel */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)`,  }}
      >
        {AvaliationsArray.map((avaliation) => (
          <div key={avaliation.id} className="w-full shrink-0">
            <AvaliationItem {...avaliation} />
          </div>
        ))}
      </div>
    </section>
  );
}
