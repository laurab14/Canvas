var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

ctx.beginPath();
//cône de la glace
ctx.fillStyle = "peru"
ctx.moveTo(200,220);
ctx.lineTo(200,220);
ctx.lineTo(160,140);
ctx.lineTo(240,140);
ctx.closePath();
ctx.fill();

// Boule de glace
ctx.beginPath();
ctx.fillStyle = "brown"
ctx.moveTo(160,140);
ctx.quadraticCurveTo(200,40,240,140);
ctx.closePath();
ctx.fill();
