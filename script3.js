const express = require('express')
const app = express()

app.use(function(req,res,next){   //middleware runs before any route 
    console.log("Hello from middelware...");
    next();
});


app.get('/', function (req, res){       //(main route)
  res.send('Hello From Home...')
})


app.get('/profile1', function (req, res){       //(profile1 route)
    res.send('Hello From pro1...')
  })


  app.get('/profile2', function (req, res){       //(profile2 route)
    res.send('Hello From pro2...')
  })
  

app.listen(3000);