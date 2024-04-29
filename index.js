const express = require('express')
const app = express()
const port = 3000

app.get('/sample', (req, res) => {

    //sending response to client
  res.send('Hello World! from my computer')
})

app.get('/users', (req, res) => {
  const username= req.query.username;


  //sending response to client
res.send('Hello users here ' +username);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})