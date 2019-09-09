var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");
var a = Math.sqrt(2);

//Toit de la maison
ctx.fillStyle = "peru"
ctx.translate(175,100);
ctx.rotate(45 * Math.PI / 180);
ctx.translate(-175,-100)
ctx.fillRect(175-75/a,100-75/a,75*a,75*a);
ctx.translate(175,100);
ctx.rotate(-45 * Math.PI / 180);
ctx.translate(-175,-100);
//Corp de la maison
ctx.fillStyle = "lightblue"
ctx.fillRect(100,100,150,150);

//fenetres Maisonette
ctx.beginPath();
ctx.lineTo(120,120);
ctx.lineTo(120,150);
ctx.lineTo(150,150);
ctx.lineTo(150,120);
ctx.fillStyle = "peru"
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.lineTo(200,120);
ctx.lineTo(200,150);
ctx.lineTo(230,150);
ctx.lineTo(230,120);
ctx.fillStyle = "peru"
ctx.closePath();
ctx.fill();

//porte Maisonette
ctx.beginPath();
ctx.lineTo(160,250);
ctx.lineTo(160,200);
ctx.lineTo(190,200);
ctx.lineTo(190,250);
ctx.fillStyle = "peru"
ctx.closePath();
ctx.fill();
