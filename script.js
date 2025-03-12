// script.js
let timer;
let startTime;
let elapsedTime = 0;
let running = false;

function updateTime() {
    const now = Date.now() - startTime + elapsedTime;
    const hours = String(Math.floor(now / 3600000)).padStart(2, '0');
    const minutes = String(Math.floor((now % 3600000) / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((now % 60000) / 1000)).padStart(2, '0');
    document.querySelector('.time').textContent = `${hours}:${minutes}:${seconds}`;
}

function startStopwatch() {
    if (!running) {
        startTime = Date.now();
        timer = setInterval(updateTime, 1000);
        running = true;
    }
}

function pauseStopwatch() {
    if (running) {
        clearInterval(timer);
        elapsedTime += Date.now() - startTime;
        running = false;
    }
}

function resetStopwatch() {
    clearInterval(timer);
    elapsedTime = 0;
    running = false;
    document.querySelector('.time').textContent = '00:00:00';
    document.querySelector('.laps').innerHTML = '';
}

function recordLap() {
    if (running) {
        const lapTime = document.querySelector('.time').textContent;
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap: ${lapTime}`;
        document.querySelector('.laps').appendChild(lapItem);
    }
}
