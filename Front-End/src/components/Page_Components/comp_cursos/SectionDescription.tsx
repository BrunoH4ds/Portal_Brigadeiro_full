interface SectionDescriptionProps {
    title: string;
    description: string;
}

export default function SectionDescription({ title, description }: SectionDescriptionProps) {
    return (
        <div className="flex flex-col items-center space-y-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-900 font-semibold mb-4">
                {title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-justify mb-5">
                {description}
            </p>
        </div>
    );
}
