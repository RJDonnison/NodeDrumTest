const beat = "R,L,R,L";
var beatArray = beat.split(",");

var bpm = 60;
let interval = (60 / bpm) * 1000;
var t = setInterval(DisplayBeat, interval);

function wait(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

let i = 0;
function DisplayBeat() {
  if (i < +beatArray.length) {
    blink(beatArray[i]);
    i++;
  }
}

function blink(drum) {
  if (document.getElementById(drum)) {
    var d = document.getElementById(drum);
    d.style.backgroundColor =
      d.style.backgroundColor == "pink" ? "black" : "pink";
  }
}
