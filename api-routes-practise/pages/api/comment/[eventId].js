import { MongoClient } from "mongodb";

async function connectToDB() {
  let client;
  try {
    client = new MongoClient('mongodb+srv://thealpha06:thealpha06@cluster0.6xsrrev.mongodb.net/');
    await client.connect();
  } catch (error) {
    console.error('Failed to connect to database:', error.message);
    throw new Error('Failed to connect to the database');
  }

  return client;
}

async function handler(req, res) {

  const eventId = req.query.eventId;

  if (req.method === 'POST') {
    const { email, name, text } = req.body;
    if (
      !email ||
      email.trim() === '' ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      return res.status(422).json({
        message: 'Invalid input.'
      })
    }
    const newComment = {
      id: eventId,
      email,
      name,
      text
    }
    const client = await connectToDB();
    const db = client.db('nextjs');
    const commentsCollection = db.collection('comments');
    await commentsCollection.insertOne(newComment);
    client.close();
    return res.status(201).json({
      message: 'Comment added successfully!',
      comment: newComment
    })
  } else if (req.method === 'GET') {

    const client = await connectToDB();
    const db = client.db('nextjs');
    const commentsCollection = db.collection('comments');
    const comments = await commentsCollection.find({ id: `${eventId}` }).toArray();
    return res.status(200).json({
      message: 'Comment fetched successfully!',
      comments: comments
    })
  }
  return res.status(200).json({ message: 'OK' })
}

export default handler;