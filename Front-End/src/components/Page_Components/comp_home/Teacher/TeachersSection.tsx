"use client";
import TeachersArray from "@/database/Fixed/TeachersArray";
import TeacherCard from "./TeacherCard";

export default function TeachersSection() {
  return (
    <section className="flex text-white flex-col justify-around p-5 gap-10">
      <h1 className="text-3xl font-bold bg-white/50 rounded-md p-2 text-blue-800">
        Conheça alguns de nossos professores
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {TeachersArray.map((teacher, index) => (
          <TeacherCard key={index} {...teacher} />
        ))}
      </div>
    </section>
  );
}
