let timerDisplay = document.getElementById("timer-display");
let startButton = document.getElementById("start-button");
let resetButton = document.getElementById("reset-button");

let minutes = 25;
let seconds = 0;
let timer;

function startTimer() {
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(timer);
      timerDisplay.textContent = "Time's up!";
      return;
    }
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function resetTimer() {
  clearInterval(timer);
  minutes = 25;
  seconds = 0;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);