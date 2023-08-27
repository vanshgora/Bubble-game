let timerVal = 6;
let score = 0;
let highestScore = localStorage.getItem('highscore')?localStorage.getItem('highscore'):0;
let hitval = document.getElementById("hitval");
let endscore = document.querySelector("#gameover span");
let gameoverPannel = document.getElementById("gameover-pannel");

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
            timer.textContent = timerVal--;
            if(timerVal === 4) {
                document.getElementById('beep').src = "mixkit-system-beep-buzzer-fail-2964.wav";
            } 
        } else {
            clearInterval(timerInt);
            if (score >= highestScore) {
                highestScore = score;
                localStorage.setItem("highscore", highestScore);
                gameoverPannel.innerHTML = `<p>It's highest score!:${highestScore}<p>
                <input type = 'text' placeholder = 'Enter your name'/>
                <a id = "reset-btn" href = "index.html"> Save </a>`;
                document.getElementById('beep').src = "";
            } else {
                endscore.textContent = `score: ${score}`
                document.getElementById('beep').src = "";
            }
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