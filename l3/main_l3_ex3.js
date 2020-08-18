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
  // var target = document.getElementById("target");

  var target = document.getElementsByClassName("cart");

  Array.prototype.forEach.call(target, (element) => {
    //if (element == event.target) {
      element.style.border = "3px dotted #000";
    //}
  });

  //target.forEach((element) => {
   // if (element == event.target) {
   //   target.style.border = "3px dotted #000";
 //   }
//  });

  //target.style.border = "3px dotted #000";
}

function dragleave(event) {
  var target = document.getElementsByClassName("cart");

  Array.prototype.forEach.call(target, (element) => {
    //if (element == event.target) {
      element.style.border = "0";
    //}
  });


  //var target = document.getElementById("target");

  //target.style.border = "0";
}
