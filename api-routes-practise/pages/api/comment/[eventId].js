function handler(req, res) {
  const eventId = req.query.eventId;
  if(req.method === 'POST') {
    console.log(req.body, eventId);
    const { email, name, text } = req.body;
    if(
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
      id: new Date().toISOString(),
      email,
      name,
      text
    }
    console.log(newComment)
    return res.status(201).json({
      message: 'Comment added successfully!',
      comment: newComment
    })
  } else if( req.method === 'GET') {
    
    const dummyList = [
      { id: 'c1', name: 'Sunny', text: 'A first comment!' },
      { id: 'c2', name: 'Shubham', text: 'A second comment!' },
    ];

    return res.status(200).json({
      message: 'Comment fetched successfully!',
      comments: dummyList
    })
  }
  return res.status(200).json({ message: 'OK'})
}

export default handler;