function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body);
    return res.status(201).json({
      message: 'Successfully subscribed!'
    })
  }
  return res.status(404).json({ message: 'Route not found!' });
}

export default handler;