"use client";
import React, { useEffect, useState } from "react";

function Page({ params }) {
  const { id } = params;
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();

      setData(data);
    };

    fetchData();
  }, [id]);

  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-500 md:text-3xl lg:text-6xl dark:text-white">
        {data?.title}
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        {data?.body}
      </p>
      <div className="flex justify-center items-center gap-10">
        <div>
          <button
            type="button"
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={() => setCount(count + 1)}
            >
            increment
          </button>
        </div>
            <p>{count}</p>
        <div>
        <button
          type="button"
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={() => setCount(count - 1)}
        >
          decrement
        </button>
        </div>
      </div>

    </div>
  );
}

export default Page;
