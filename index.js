let timerId;
let count = 0;

const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
    clearInterval(timerId); // останавливаем таймер
});

const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
    if (count === 0) {
        timerId = setInterval(updateClock, 1000);
        count++;
    } else if (count === 1) {
        return;
    }
});

function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    clock.textContent = hours + ':' + minutes + ':' + seconds;
    count = 0;
}
