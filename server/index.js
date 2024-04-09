const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs');
const path = require('path');
const history = require('connect-history-api-fallback');
const emailjs = require('@emailjs/nodejs');

require('dotenv').config();

app.use(express.json())
app.use(cors())
app.use(history());

app.get('/api/projects/:lang', (request, response) => {
  const lang = request.params.lang;

  const dataPath = path.join(__dirname, `./data/projects_${lang}.json`);
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
    } else {
      const projects = JSON.parse(data);
      response.json(projects);
    }
  });
})

app.post('/api/send-email', (req, res) => {
  const formData = req.body;

  emailjs
    .send(
      process.env.MAIL_SERVICE_ID,
      process.env.MAIL_TEMPLATE_ID,
      formData,
      { 
        publicKey: process.env.MAIL_PUBLIC_KEY,
        privateKey: process.env.MAIL_PRIVATE_KEY
      }
    )
    .then(
      () => res.status(200).send('Email sent successfully'),
      (error) => res.status(500).send(`Failed to send email: ${JSON.stringify(error)}`),
    );
});

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
