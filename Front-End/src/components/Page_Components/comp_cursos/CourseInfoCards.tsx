import { ReactNode } from "react";

interface CourseInfoCardsProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export default function CourseInfoCards({ icon, title, description }: CourseInfoCardsProps) {
    return (
        <div className="bg-white/50 flex flex-col items-center w-full md:w-1/2 text-blue-800 p-6 rounded-lg shadow-md mb-8 space-y-4">
            {icon}
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-lg font-semibold text-gray-700">{description}</p>
        </div>
    );
}
