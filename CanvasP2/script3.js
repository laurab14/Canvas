var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

// Visage de tibiscuit
ctx.beginPath();
ctx.arc(200,80,50,0,Math.PI*2,true);
ctx.fillStyle = "peru"
ctx.closePath();
ctx.fill();

//yeux
ctx.beginPath();
ctx.arc(185,70,6,0,Math.PI*2,true);
ctx.arc(215,70,6,0,Math.PI*2,true);
ctx.fillStyle = "white"
ctx.closePath();
ctx.fill();

//sourcils gauche
ctx.beginPath();
ctx.fillStyle = "lightblue"
ctx.moveTo(172,56);
ctx.quadraticCurveTo(185,44,194,60);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "peru"
ctx.moveTo(172,58);
ctx.quadraticCurveTo(185,46,194,62);
ctx.closePath();
ctx.fill();

//sourcil droit
ctx.beginPath();
ctx.fillStyle = "lightblue"
ctx.moveTo(204,56);
ctx.quadraticCurveTo(217,44,226,60);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "peru"
ctx.moveTo(204,58);
ctx.quadraticCurveTo(217,46,226,62);
ctx.closePath();
ctx.fill();

//bras
ctx.beginPath();
ctx.moveTo(100,130);
ctx.lineTo(300,130);
ctx.lineWidth = 30;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.strokeStyle ="peru"
ctx.closePath();
ctx.stroke();

 //corps
ctx.beginPath();
ctx.moveTo(200,130);
ctx.lineTo(200,260);
ctx.lineWidth = 80;
ctx.strokeStyle ="peru"
ctx.closePath();
ctx.stroke();

//Jambe gauche
ctx.beginPath();
ctx.moveTo(225,260);
ctx.lineTo(225,375);
ctx.lineWidth = 30;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.strokeStyle ="peru"
ctx.closePath();
ctx.stroke();

//Jambe droite
ctx.beginPath();
ctx.moveTo(175,260);
ctx.lineTo(175,375);
ctx.lineWidth = 30;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.strokeStyle ="peru"
ctx.closePath();
ctx.stroke();

//milieux jambe
ctx.beginPath();
ctx.moveTo(200,290);
ctx.lineTo(200,375);
ctx.lineWidth = 20;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.strokeStyle ="white"
ctx.closePath();
ctx.stroke();

//bouton boule de gomme
ctx.beginPath();
ctx.arc(200,170,12,0,Math.PI*2,true);
ctx.arc(200,210,12,0,Math.PI*2,true);
ctx.fillStyle = "purple"
ctx.closePath();
ctx.fill();

//bouton boule de gomme sucre
ctx.beginPath();
ctx.arc(200,170,12,0,Math.PI*2,true);
ctx.arc(200,210,12,0,Math.PI*2,true);
ctx.fillStyle = "purple"
ctx.closePath();
ctx.fill();

//bouche
ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "#b53434";
ctx.moveTo(185,90);
ctx.quadraticCurveTo(200,115,215,90);
ctx.closePath();
ctx.stroke();
