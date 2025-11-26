interface StatCardProps {
  title: string;
  value: number;
  description: string;
  icon: React.ReactNode;
}

const StatCard = ({ title, value, description, icon }: StatCardProps) => {
  return (
    <div className="bg-white/50 w-full p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-blue-900 text-white rounded-full">{icon}</div>
        <h3 className="text-xl text-gray-800 font-semibold">{title}</h3>
      </div>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default StatCard;
