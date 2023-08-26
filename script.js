let timerVal = 60;
let score = 0;
let hitval = document.getElementById("hitval");

function bubbleCreate() {
    let bubbleCode = "";
    for (let i = 0; i <= 251; i++) {
        bubbleCode += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`
    }
    document.getElementById("p-bottom").innerHTML = bubbleCode;
}

function incScoreValue() {
    score += 10;
    document.getElementById("scoreval").textContent = score;
}

function timeCount() {
    timer.textContent = timerVal;
    let timerInt = setInterval(() => {
        if (timerVal >= 0) {
            timer.textContent = timerVal--
        } else {
            clearInterval(timerInt);
            document.getElementById("gameover").style.visibility = 'visible';
        }
    }, 1000);
}

function setHitValue() {
    let rn = Math.floor(Math.random() * 10);
    hitval.textContent = rn;
}

function bubbleHitHandler() {
    setHitValue();
}

timeCount();
bubbleCreate();
setHitValue();

let bubbles = document.querySelectorAll('.bubble');

bubbles.forEach(bubble => {
    bubble.addEventListener('click', () => {
        (bubble.textContent === hitval.textContent) && incScoreValue();
        bubbleHitHandler();
        bubble.textContent = Math.floor(Math.random() * 10);
    });
});