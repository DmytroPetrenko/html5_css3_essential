window.onload = function () {
  var canvas = document.getElementById("UkraineFlag");
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.rect(0, 0, 500, 150);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.rect(0, 150, 500, 150);
  ctx.closePath();
  ctx.fill();

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  }

  canvas.addEventListener(
    "mousemove",
    function (evt) {
      var mousePos = getMousePos(canvas, evt);
      var circle = writeCircle(canvas, mousePos.x, mousePos.y);
    }
  );

  function writeCircle(canvas, x, y) {
    var context = canvas.getContext("2d");
    var img = document.getElementById("img");
    context.strokeStyle = "#000";
     context.fillStyle = "#fc0";
     context.beginPath();
     context.drawImage(img, x, y)
     context.closePath();
     context.fill();
  }
};
