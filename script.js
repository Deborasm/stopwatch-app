let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

const display = document.getElementById("display");
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");

startStopButton.addEventListener("click", toggleStartStop);
resetButton.addEventListener("click", reset);

function toggleStartStop() {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
        startStopButton.textContent = "Iniciar";
    } else {
        interval = setInterval(updateTime, 1000);
        isRunning = true;
        startStopButton.textContent = "Parar";
    }
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function reset() {
    clearInterval(interval);
    isRunning = false;
    startStopButton.textContent = "Iniciar";
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.textContent = "00:00:00";
}
