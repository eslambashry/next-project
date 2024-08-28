const { MongoClient } = require("mongodb");

let mongoClient;
let clientPromise;
if (!clientPromise) {
  mongoClient = new MongoClient("mongodb://localhost:27018/posts");
  clientPromise = mongoClient.connect();
}

export default clientPromise;