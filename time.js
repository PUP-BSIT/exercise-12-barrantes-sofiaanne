let time;
let count = 0;

function updateDisplay() {
    document.querySelector('#timer_display').textContent = count;
}

function updateTime() {
    count++;
    updateDisplay();
}

function start() {
    clearInterval(time); 
    time = setInterval(updateTime, 1000);
}


function stop() {
    clearInterval(time);
    count = 0;
    updateDisplay();
}

function pause() {
    clearInterval(time);
}

function resume() {
    start();
}

