interface InfoBlockProps {
  title: string;
  description: string;
  isContato?: boolean;
  borderColor?: string;
  className?: string;
}

export default function FaqInfoBlock({
  title,
  description,
  isContato,
  borderColor = "border-blue-800",
  className = "",
}: InfoBlockProps) {
  return (
    <div
      className={`
        ${isContato ? "" : `border-l-4 rounded-md ${borderColor} pl-4`} 
         ${className}
      `}
    >
      <h3
        className={`${
          isContato ? "text-2xl" : "text-xl"
        } font-semibold text-gray-800 mt-2`}
      >
        {title}
      </h3>
      <p className="text-lg text-gray-700 mb-2">{description}</p>
    </div>
  );
}
