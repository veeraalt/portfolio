const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs');
const path = require('path');

app.use(express.json())
app.use(cors())

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

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)