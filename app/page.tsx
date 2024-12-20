import React from "react";
import Link from "next/link";

const Card = async () => {
  let url = await fetch("https://jsonplaceholder.typicode.com/photos");
  let response = await url.json();

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-5xl text-center py-5 font-serif text-gray-800">
        Learning Dynamic Routes
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {
        response.map((photos: any) => (
          <div
            key={photos.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`${photos.id}`} className="block p-4">
                <ul className="list-disc pl-5">
                  <li className="text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors">
                    {photos.title}
                  </li>
                </ul>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
