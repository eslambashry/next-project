import clientPromise from "@/app/lib/mongodb";

export async function GET(req) {
  const id = req.nextUrl.searchParams.get("id");
  const client = await clientPromise;
  const db = client.db("post");
  let response;
  if (id) {
    const post = await db.collection("posts").findOne({ id: +id });
    response = post;
  } else {
    const posts = await db.collection("posts").find({}).toArray();
    response = posts;
  }

  return new Response(JSON.stringify(response));
}
