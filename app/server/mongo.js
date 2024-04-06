import { MongoClient } from 'mongodb';

const { MONGODB_URI, DATABASE_NAME } = process.env;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (!DATABASE_NAME) {
  throw new Error('Please define the DATABASE_NAME environment variable inside .env.local');
}

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = await client.db(DATABASE_NAME);

  cachedClient = client;
  cachedDb = db;

  console.log("Connected to Database");
  return { client, db };
}

export default connectToDatabase;
