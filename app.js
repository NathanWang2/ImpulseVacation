var express = require('express')
var app = express()
var dbconnection = require("./api/data/db.js");
var path = require("path");


app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
});

app.use(express.static(path.join(__dirname, "public")));
app.use("/node_modules", express.static(__dirname + "/node_modules"));
// app.use("/api", routes);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
