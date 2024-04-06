import { connectToDatabase } from '../server/mongo';

export default async function handler(req, res) {
  try {
    const { client, db } = await connectToDatabase();
    res.status(200).json({ message: 'Connected to database' });
    await client.close();
  } catch (error) {
    console.error('Error connecting to database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
