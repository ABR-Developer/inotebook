const connectToMongo = require('./db');
const express = require('express');
const { Router } = require('express');

connectToMongo();

const app = express()
const port = 3000

app.get('/', (req, res) => {        // This is the one endpoint
  res.send('Hello World!')
})
app.use('/api/notes', require("./routes/notes"))
app.use('/api/auth', require("./routes/auth"))

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})