let time;
let count=0;

function updateDisplay() {
    document.getElementById('timerDisplay').textContent=count;
}

function updateTime() {
    count++;
    updateDisplay();
}

function start() {
    time=setInterval(updateTime,1000);
}

function stop() {
    clearInterval(time);
    count=0;
    updateDisplay();
}

function pause() {
    clearInterval(time);
}

function resume() {
    start();
}

