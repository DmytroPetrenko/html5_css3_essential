addEventListener("message", function (e) {
  //var arr = new Uint16Array(100000);

  //this.crypto.getRandomValues(e.data[0]);

  //arr.forEach((element) => {
  //  element = Math.random() * 100;
  //});

  //window.crypto.getRandomValues(arr);

  //e.data[0].sort(function(a, b) {
  //  return a-b;
  //})

  for (let index = 0; index < 100; index++) {
    if (index < 100) {
      postMessage(index + 1 + " = " + e.data[0][index] + "<br />");
    }
  }

  e.data[0].sort(function (a, b) {
    return a - b;
  });
  for (let index = 0; index < 100; index++) {
    if (index < 100) {
      postMessage(index + 1 + " = " + e.data[0][index] + "<br />");
    }
  }
});
