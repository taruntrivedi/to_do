var express= require("express"),
    mongoose = require("mongoose"),
    flash = require("connect-flash"),
    bodyParser = require("body-parser");

var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var routes = require("./routes/server");

app.use(routes);

app.listen(process.env.PORT||8080,process.env.IP, function(){
    console.log("todo server is running");
})
