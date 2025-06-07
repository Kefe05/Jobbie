import { Infinity } from "lucide-react";

export default function Categories() {
  type Category = {
    name: string;
  };

  const categories: Category[] = [
   {
    name: "Software Development",
   }
  ];


  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <div className="flex items-center space-x-2">
              <Infinity className="w-6 h-6 text-gray-700" />
              <span className="font-semibold">{category.name}</span>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}
