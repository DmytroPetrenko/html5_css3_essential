var canvas1 = document.getElementById("canvas1");
var ctx1 = canvas1.getContext("2d");

// Create gradient
var grd = ctx1.createRadialGradient(200, 125, 10, 200, 125, 250);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
// Fill with gradient
ctx1.fillStyle = grd;
ctx1.fillRect(0, 0, 400, 250);


var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");
var img = document.getElementById("img");
ctx2.drawImage(img, 0, 0);