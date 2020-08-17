// dragstart, dragend, dragenter, dragleave, dragover, drop

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}
