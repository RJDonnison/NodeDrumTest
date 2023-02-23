//*Beat key S = snare K = Kick T1 = Tom 1 T2 = Tom 2 F = Floor tom . = rest H = High hat C = crash R = ride
//TODO: Add bpm setter, add pause play, add timeline bar

const beat = "H K,H,H S,H,H K,H,H S,H";
var beatArray = beat.split(",");

const baseColor = "#000";
const blinkTime = 100;

function play() {
  var bpm = document.getElementById("input").value;
  let interval = (60 / bpm) * 1000;
  setInterval(DisplayBeat(), interval);
}

let i = 0;
function DisplayBeat() {
  if (i < beatArray.length) {
    if (beatArray[i] == ".") return i++;
    if (beatArray[i].indexOf(" ") >= 0) {
      let currentBeatArray = beatArray[i].split(" ");

      currentBeatArray.forEach((e) => {
        blink(e);
      });
    } else blink(beatArray[i]);

    i++;
  }
}

function blink(drum) {
  var d = document.getElementById(drum);

  d.style.backgroundColor =
    d.style.backgroundColor == d.dataset.color ? baseColor : d.dataset.color;

  setTimeout(function () {
    d.style.backgroundColor =
      d.style.backgroundColor == d.dataset.color ? baseColor : d.dataset.color;
  }, blinkTime);
}
