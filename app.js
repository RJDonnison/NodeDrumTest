//*Beat key S = snare K = Kick T1 = Tom 1 T2 = Tom 2 F = Floor tom . = rest H = High hat C = crash R = ride space between drums on same beat and comma between beats
//TODO: add pause, add timeline bar, look into doubles in one beat

const blinkTime = 100;

var i = 0;
var playBeat;
var beatArray;
function play() {
  let bpm = document.getElementById("inputBPM").value;
  let interval = (60 / bpm) * 1000;

  let beat = document.getElementById("inputBeat").value;
  beatArray = beat.split(",");

  i = 0;

  clearInterval(playBeat);
  playBeat = setInterval(DisplayBeat, interval);
}

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

//!BPM > 500 causing colors to stick on when playing more than 2 beats of same drum in a row something to do with blink speed
function blink(drum) {
  var audio = new Audio(`audio/${drum}.wav`);
  audio.play();

  var d = document.getElementById(drum);
  var baseColor = d.style.backgroundColor;
  d.style.backgroundColor =
    d.style.backgroundColor == d.dataset.color ? baseColor : d.dataset.color;

  setTimeout(function () {
    d.style.backgroundColor =
      d.style.backgroundColor == d.dataset.color ? baseColor : d.dataset.color;
  }, blinkTime);
}
