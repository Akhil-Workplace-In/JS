const clock = document.getElementById('clock'); // refers to clock node
// let date = new Date();
// console.log(date.toLocaleTimeString());

setInterval(function () { // function runs every second 
  let date = new Date(); // create Date object
  let time = date.toLocaleTimeString(); // convert to local time structure
  clock.innerText = time; //manipulate dom
}, 1000); ///1000 represent in milli seconds...
