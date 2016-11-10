var express = require("express")
var app = express();
var http = require('http').Server(app)
var io = require("socket.io")(http);
var appJs = require('./public/js/app.js')
app.use(express.static('public'))




app.get('/', (req, res) => {
  res.sendFile(__dirname +"/index.html")
})

http.listen("3001", () => {
  console.log("Its working")
})
