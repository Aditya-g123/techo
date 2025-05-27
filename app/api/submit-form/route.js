import clientPromise from "@/lib/mongodb";
import Form from "../../../models/Form";

export async function POST(req) {
  try {
    const body = await req.json();

    const client = await clientPromise;

  
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection("submissions");

    const result = await collection.insertOne(body);

    return new Response(JSON.stringify({ message: "Success", id: result.insertedId }));
  } catch (error) {
    console.error(error);
    return new Response("Error inserting data", { status: 500 });
  }
}
