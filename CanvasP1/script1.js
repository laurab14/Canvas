var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

//Corp de la maison
ctx.beginPath();
ctx.moveTo(150,150);
ctx.lineTo(300,150);
ctx.lineTo(300,300);
ctx.lineTo(150,300);
ctx.fillStyle = "lightblue"
ctx.closePath();
ctx.fill();

//toit de la maison
ctx.beginPath();
ctx.lineTo(150,150);
ctx.lineTo(225,80);
ctx.lineTo(300,150);
ctx.fillStyle = "peru"
ctx.closePath();
ctx.fill();

//fenetre de la Maisonette
ctx.beginPath();
ctx.lineTo(170,190);
ctx.lineTo(170,220);
ctx.lineTo(200,220);
ctx.lineTo(200,190);
ctx.fillStyle = "peru"
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.lineTo(250,190);
ctx.lineTo(250,220);
ctx.lineTo(280,220);
ctx.lineTo(280,190);
ctx.fillStyle = "peru"
ctx.closePath();
ctx.fill();

//Porte de la Maisonette
ctx.beginPath();
ctx.lineTo(210,300);
ctx.lineTo(210,250);
ctx.lineTo(240,250);
ctx.lineTo(240,300);
ctx.fillStyle = "peru"
ctx.closePath();
ctx.fill();
