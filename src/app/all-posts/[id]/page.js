import clientPromise from '@/lib/mongodb';
import { notFound } from 'next/navigation';
import React from 'react'

async function page({params}) {
    let post
    const { id } = params;
    if(params.id>100){
        notFound()
    }
    try{
    const client = await clientPromise;
    const db = client.db();
     post = await db.collection("posts").findOne({ id: +params.id });
    
    }


    catch (error) {
    notFound();
    
  }
  return (
    <div>

        <h1 className="flex justify-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-500 md:text-3xl lg:text-6xl dark:text-white">
        {post?.title}
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        {post?.body}
      </p>  

    </div>
  )
}

export default page
