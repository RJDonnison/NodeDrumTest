//*Beat key S = snare K = Kick T1 = Tom 1 T2 = Tom 2 F = Floor tom . = rest H = High hat C = crash R = ride space between drums on same beat and comma between beats
//TODO: add pause, add timeline bar

const beat = "S,.,S,.,S,S,T1,.,T1,.,T1,T1,F,.,S,.,F,S,S,R,.,C,.,H,.,K,.,T2,T2";
var beatArray = beat.split(",");

const blinkTime = 200;

var i = 0;
var playBeat;
function play() {
  let bpm = document.getElementById("input").value;
  let interval = (60 / bpm) * 1000;

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

//!BPM > 240 causing colors to stick on when playing more than 2 beats in a row
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
