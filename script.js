let startTime;
let running = false;
let interval;

window.onload = function() {
  reset(); // Initialize the display
};

function startStop() {
  if (running) {
    clearInterval(interval);
    document.getElementById("startStop").innerHTML = "Start";
  } else {
    startTime = Date.now() - getElapsedTime();
    interval = setInterval(updateDisplay, 10);
    document.getElementById("startStop").innerHTML = "Stop";
  }
  running = !running;
}

function reset() {
  clearInterval(interval);
  document.getElementById("startStop").innerHTML = "Start";
  document.getElementById("display").innerHTML = "00:00:00";
  running = false;
  startTime = undefined;
  document.getElementById("laps").innerHTML = "";
}

function updateDisplay() {
  const elapsedTime = getElapsedTime();
  const formattedTime = formatTime(elapsedTime);
  document.getElementById("display").innerHTML = formattedTime;
}

function getElapsedTime() {
  return running ? Date.now() - startTime : 0;
}

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const centiseconds = Math.floor((milliseconds % 1000) / 10);

  return (
    pad(minutes) + ":" + pad(seconds) + ":" + pad(centiseconds)
  );
}

function pad(value) {
  return value < 10 ? "0" + value : value;
}
