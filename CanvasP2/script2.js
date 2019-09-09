var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.fillStyle = "blue"
ctx.fillRect(50,50,300,300);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "grey"
ctx.moveTo(150,200);
ctx.quadraticCurveTo(200,80,250,200);
ctx.closePath();
ctx.fill();
//soucoupe spatiale
ctx.beginPath();
ctx.fillStyle = "lightgrey"
ctx.moveTo(100,200);
ctx.quadraticCurveTo(200,130,300,200);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "lightgrey"
ctx.moveTo(100,200);
ctx.quadraticCurveTo(200,270,300,200);
ctx.closePath();
ctx.fill();
