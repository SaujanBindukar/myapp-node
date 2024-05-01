const express = require('express')
const app = express()
const port = 3000

//middle ware-> convert request into json
app.use(express.json());

app.get('/sample', (req, res) => {

    //sending response to client
  res.send('Hello World! from my computer')
})

app.get('/users', (req, res) => {
  const username= req.query.username;
  //sending response to client
res.send('Hello users here ' +username);
})


app.post('/users',(req,res)=>{

  const myQuery= req.query.param;
  console.log(myQuery);

  res.json(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



