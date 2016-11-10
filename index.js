var express = require("express")
var app = express();
var http = require('http').Server(app)
var io = require("socket.io")(http);
var appJs = require('./public/js/app.js')
app.use(express.static('public'))

// function changeColor(number, color){
//   $("#square" + number).css("background-color", color)
//   console.log("this function is being used")
// }


app.get('/', (req, res) => {
  res.sendFile(__dirname +"/index.html")

})
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    var msgArray=msg.split(',')
    // changeColor(msgArray[0],msgArray[1])
  });
});


http.listen("3001", () => {
  console.log("Its working")
})
