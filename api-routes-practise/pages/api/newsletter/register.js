import { MongoClient } from 'mongodb';

function handler(req, res) {
  if (req.method === 'POST') {
    MongoClient.connect('mongodb+srv://thealpha06:thealpha06@cluster0.6xsrrev.mongodb.net/', function (err, client) {
      if (err) throw err;
      const db = client.db('nextjs');
      console.log('db')
      db.collection("emails").insertOne(req.body, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        client.close();
      });
    });
    return res.status(201).json({ message: 'Subscribed!' });
  }
  return res.status(404).json({ message: 'Route not found!' });
}

export default handler;