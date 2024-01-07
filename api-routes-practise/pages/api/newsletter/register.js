import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const client = new MongoClient('mongodb+srv://thealpha06:thealpha06@cluster0.6xsrrev.mongodb.net/');
    await client.connect();
    const db = client.db('nextjs');
    const newsletterCollection = db.collection('newsletter');
    await newsletterCollection.insertOne({ email: req.body.email });
    client.close();
    return res.status(201).json({ message: 'Subscribed!' });
  }
  return res.status(404).json({ message: 'No method!' });
}

export default handler;