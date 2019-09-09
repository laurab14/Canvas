var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

ctx.beginPath();
//corp de la voiture
ctx.fillStyle = "black"
ctx.fillRect(50,200,325,75);
//toit de la voiture
ctx.fillStyle = "grey"
ctx.fillRect(170,150,150,50);
ctx.fill();

//parbrise avant et arrière
ctx.beginPath();
ctx.fillStyle = "lightblue"
ctx.moveTo(150,200);
ctx.lineTo(170,150);
ctx.lineTo(170,200);
ctx.lineTo(150,200);
ctx.moveTo(320,150);
ctx.lineTo(320,200);
ctx.lineTo(350,200);
ctx.lineTo(320,150);
ctx.closePath();
ctx.fill();

//roue avant
ctx.beginPath();
ctx.fillStyle = "grey"
ctx.arc(170,275,30,0,Math.PI*2,false);
ctx.stroke();
ctx.fill();

//roue arrière
ctx.beginPath();
ctx.fillStyle = "grey"
ctx.arc(320,275,30,0,Math.PI*2,false);
ctx.stroke();
ctx.fill();
