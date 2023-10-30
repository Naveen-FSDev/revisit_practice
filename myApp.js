const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send(` <form action='/answer' method="POST">
  <p>What is your Name...?</p>
  <input name="answer" autocomplete="off">
  <button>Submit</button>
  `
  )
})

app.post('/answer', function(req, res){
  if(req.body.answer == 4 || 5){
  res.send(`<p>this is answer page</p> <a href='/'>Home</a` )
  }
  else { 
  res.send(`<p>you are probihited</p>
  <a href='/'>Home</a>`)
  }
}
)


app.listen(3000)