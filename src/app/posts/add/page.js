import clientPromise from '@/lib/mongodb';
import { revalidatePath } from 'next/cache';
import React from 'react'

function AddPost() {
    const addPost = async (formData)=> {
        "use server";
        const title = formData.get("title");
        const description = formData.get("description");
        const client = await clientPromise;
        const db = client.db();
        const res = await db.collection('posts').insertOne({title: title, description: description})
        revalidatePath("/post")


    }
  return (
    <div class="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action={addPost}>
     <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="title">
        Title:
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" name='title' placeholder="Username"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="description">
        Description:
      </label>
      <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" name="title" placeholder="Username"/>
    </div>

      
    </form>
    </div>

  )
}

export default AddPost
