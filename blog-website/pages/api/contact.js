function handler(req, res) {
  if(req.method === 'POST') {
    const { email, name, message }  = req.body;

    if(!email || !email.includes('@') || name.trim() === '' || !message || !name || message.trim() === '') {
      res.status(422).json({
        message: 'Invalid input!'
      })
      return;
    }

    const newMessage = {
      email,
      name,
      message
    }
    console.log(newMessage);
    res.status(201).json({
      message: 'Success!'
    })
  }
}

export default handler;