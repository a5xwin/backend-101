//dynamic routing using :

const express = require('express')
const app = express()

app.set("view engine","ejs");      //configuring ejs


app.get("/", function (req, res){       //(main route)
  res.send('Hello From Home...')
})


app.get("/profile", function (req, res){       //(profile1 route)
    res.send('Hello From profile...')
  })


  app.get("/profile/:username", function (req, res){       //(profile2 route)
    res.send(`Hello from ${req.params.username}`);
  })
  

app.listen(3000);