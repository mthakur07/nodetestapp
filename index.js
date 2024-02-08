const express = require('express')  
// import 'dotenv/config'  - // you can also write like this
require('dotenv').config() ; 
 
const app = express()
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send("this is about Routes!!")
})
app.get('/login', (req, res) => {
    //res.send(" Welcome to logging in!")
    res.send(`<h1>This is h1 tag</h1>`)
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})


