import React from "react";

const page = async (props: any) => {
  const photos = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${props.params.id}`
  );
  const result = await photos.json();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-thin text-center text-gray-800 mb-6">
        DYNAMIC ROUTES
      </h1>
      <div className="bg-white shadow-md rounded-lg border border-gray-200 p-6 w-full max-w-3xl">
        <div className="mb-4">
          <h2 className="text-4xl font-semibold text-gray-700">
            <strong>Name:</strong> {result.title}
          </h2>
        </div>
        <div className="mb-4">
          <p className="text-2xl text-gray-600">
            <strong>ID:</strong> {result.id}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-2xl text-gray-600">
            <strong>Url:</strong> {result.url}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-2xl text-gray-600">
            <strong>Thumbnail Url:</strong> {result.thumbnailUrl}
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
