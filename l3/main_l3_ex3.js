// dragstart, dragend, dragenter, dragleave, dragover, drop

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));

  event.target.style.border = "3px solid green";
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function dragenter(event) {
  event.currentTarget.style.border = "3px dotted #000";
}

function dragleave(event) {
  event.currentTarget.style.border = "none";
}
