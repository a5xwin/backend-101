const express = require("express")
const app = express()

app.set("view engine","ejs");      //configuring ejs
app.use(express.static('./public'));  //configuring express static


app.get("/", function (req, res){       //(main route)
  res.render("index")      //send changed to render and write name of file in views folder without .ejs extension
})

app.get("/aboutus", function (req, res){       
  res.render("aboutus")      
})

app.get("/error", function (req, res){       
  res.render("error")      
})


app.use(function errorHandler (err, req, res, next) {     //error handling
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})




app.listen(3000);