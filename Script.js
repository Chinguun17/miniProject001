document.querySelector('#startStop').addEventListener('click', start);
document.querySelector('#restart').addEventListener('click', restart);

let seconds = 00;
let minutes = 0;
let hours = 0;

let dispSec = 0;
let dispMin = 0;
let dispHr = 0;

status = "stopped";
interval = null;

function stopWatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
    if (seconds < 10) {
    dispSec = "0" + seconds.toString();
  } else {
    dispSec = seconds;
    }

  if (minutes < 10) {
    dispMin = "0" + minutes.toString();
  } else {
    dispMin = minutes;
    }
  if (hours < 10) {
    dispHr = "0" + hours.toString();
  } else {
    dispHr = hours;
    }
  

  display.innerHTML = dispHr + ":" + dispMin + ":" + dispSec;

}


function start() {
  if (status === "stopped") {
   interval = window.setInterval(stopWatch, 1000);
   startStop.innerHTML = "Stop";
   status = "started";
  }else {
    window.clearInterval(interval);
    startStop.innerHTML = "Continue";
    status = "stopped";
    }  

}

function restart() {
  window.clearInterval(interval);
  startStop.innerHTML = "Start";
  display.innerHTML = "00:00:00";
  restart.innerHTML = "Restart"
  seconds = 0;
  minutes = 0;
  hours = 0;
  status = "stopped"
  
}
