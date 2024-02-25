const timerHour = document.querySelector(".timerHour");
const timerMin = document.querySelector(".timerMin");
const timerSec = document.querySelector(".timerSec");
const timerMs = document.querySelector(".timerMs");
const startbutton = document.querySelector(".buttonA");
const stopbutton = document.querySelector(".buttonB");
const resetbutton = document.querySelector(".buttonC");

let elapsedMs = 0;

startbutton.addEventListener('click', () => {

    startbutton.disabled = true;
    stopbutton.disabled = false;
    resetbutton.disabled = false;

    let stratMs = Date.now();

    timerId = setInterval(() => {
        const nowMs = Date.now();
        elapsedMs = nowMs - stratMs;
        const ms = elapsedMs % 1000
        const stringMs = String(ms);
        ms2 = stringMs.slice(0,1)
        timerMs .textContent = ms2;

        const sec = Math.floor(elapsedMs / 1000) % 60;
        timerSec .textContent = sec;

        const min = Math.floor(elapsedMs / 1000 / 60) % 60; 
        timerMin .textContent = min;

        const hour = Math.floor(elapsedMs / 1000 / 60 / 60) % 60;
        timerHour .textContent = hour

        stratMs = Date.now() - elapsedMs;

    }, 10);

    stratMs -= elapsedMs;

});

stopbutton.addEventListener('click', () => {

    startbutton.disabled = false;
    stopbutton.disabled = true;
    resetbutton.disabled = false;

    clearInterval(timerId);
});

resetbutton.addEventListener('click', () => {

    startbutton.disabled = false;
    stopbutton.disabled = true;
    resetbutton.disabled = true;

    clearInterval(timerId);

    elapsedMs = 0;

    timerHour .textContent = "0";
    timerMin .textContent = "0";
    timerSec .textContent = "0";
    timerMs .textContent = "0";

});