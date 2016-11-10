


var buildBoard = function() {
  for (i=0; i <64; i++) {
    var classname="<div class='square' id = 'square" + i.toString()+ "'></div>"
    console.log(classname)
    var square = $(classname);
    $("body").append(square)
  };
}


module.exports = buildBoard
