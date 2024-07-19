let ms = 0, s = 0, m = 0, h = 0;
let timer;
const dis = document.querySelector('.time');
const laps = document.querySelector('.laps');
const clearButton = document.querySelector('.clear');

function start() {
    if (!timer) {
        timer = setInterval(run, 10);
    }
}

function run() {
    ms++;
    if (ms == 100) {
        ms = 0;
        s++;
    }
    if (s == 60) {
        s = 0;
        m++;
    }
    if (m == 60) {
        m = 0;
        h++;
    }
    dis.innerHTML = getTimer();
}

function getTimer() {
    return (h < 10 ? "0" + h : h) + " : " + (m < 10 ? "0" + m : m) + " : " + (s < 10 ? "0" + s : s) + " : " + (ms < 10 ? "0" + ms : ms);
}

function pause() {
    if(timer){
    clearInterval(timer);
    timer = false;
    }
}
function reset() {
    if(timer){
    clearInterval(timer);
    timer = false;
    }
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    dis.innerHTML = getTimer();    
}
function lap() {
    const li = document.createElement('li');
    li.innerText = getTimer();
    laps.appendChild(li);
    clearButton.style.display = 'block';
    
}
function clearLap() {
    laps.innerHTML = '';
    clearButton.style.display = 'none';
}
