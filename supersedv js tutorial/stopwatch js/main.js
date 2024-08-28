let timer = document.getElementById('timer');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let startTime, elapsedTime = 0, intervalId;

function updateTime() {
  let milliseconds = elapsedTime % 1000;
  let seconds = Math.floor(elapsedTime / 1000) % 60;
  let minutes = Math.floor(elapsedTime / (60 * 1000)) % 60;
  let hours = Math.floor(elapsedTime / (60 * 60 * 1000));

  let millisecondsString = milliseconds.toString().padStart(3, '0');
  let secondsString = seconds.toString().padStart(2, '0');
  let minutesString = minutes.toString().padStart(2, '0');
  let hoursString = hours.toString().padStart(2, '0');

  timer.textContent = `${hoursString}:${minutesString}:${secondsString}.${millisecondsString}`;
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  intervalId = setInterval(function() {
    elapsedTime = Date.now() - startTime;
    updateTime();
  }, 10);
}

function stopTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  clearInterval(intervalId);
  elapsedTime = 0;
  updateTime();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);