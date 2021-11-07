const express = require('express');
const bodyParser = require('body-parser');
const sender = require('./mailer.js');

const app = express()
const parse = bodyParser.json()
const port = 9988

app.post('/', parse, (req, res) => {
  const {body, title} = req.body;
  sender(title, body);
  res.send({
    code: 200,
    message: 'done!'
  })
})

app.listen(port, () => {
  console.log(`Mailer active at http://localhost:${port}`)
})