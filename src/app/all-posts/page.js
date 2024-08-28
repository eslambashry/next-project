import clientPromise from "@/lib/mongodb";
import Link from "next/link";
import React from "react";

async function page(params) {
  const { id } = params;
  const client = await clientPromise;
  const db = client.db();
  const posts = await db.collection("posts").find({}).toArray();
  

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
        {posts.map((post) => (
          <div key={post._id} className="bg-white shadow-md rounded-lg p-6 dark:bg-gray-800">
            <Link href={`/all-posts/${post.id}`}>
          
            <h1 className="mb-4 text-2xl font-bold leading-none tracking-tight text-gray-800 dark:text-white">
              {post.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {post.body}
            </p>
        </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
