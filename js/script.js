const time=document.getElementById('timeDisplay');
time.innerText="00:00.00";
const start = document.getElementById('startBtn');
start.innerText="Start";
start.classList.add('green-background');
const lap = document.getElementById('lapBtn');
lap.innerText="Lap";
lap.classList.add('darkgray-background');
const pause = document.getElementById('laps');

let milliseconds = 0, seconds = 0, minutes = 0;
let intervalId;

function startTimer() {
    intervalId = setInterval(() => {
        milliseconds += 10;

        if (milliseconds >= 1000) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }

        const formattedTime = 
            (minutes < 10 ? '0' + minutes : minutes) + ':' + 
            (seconds < 10 ? '0' + seconds : seconds) + '.' + 
            (milliseconds / 10 < 10 ? '0' + milliseconds / 10 : milliseconds / 10);
        
        time.innerText = formattedTime;
    }, 10); 
}

function stopTimer() {
    clearInterval(intervalId);
}

function resetTimer() {
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    time.innerText = '00:00.00';
}


start.addEventListener('click', () => {
    lap.disabled=false;
    lap.classList.remove('darkgray-background');
    lap.classList.add('gray-background');

    if (start.innerText==="Start") {
        startTimer();
        start.innerText="Stop";
        start.classList.remove('green-background');
        start.classList.add('red-background');
        lap.innerText="Lap";
    } 
    else if(start.innerText==="Stop"){
        stopTimer();
        start.innerText="Start";
        start.classList.remove('red-background');
        start.classList.add('green-background');
        lap.innerText="Reset";
    }
});

function recordLap() {
    const lapTime = time.innerText;

    const lapItem = document.createElement('div');
    lapItem.classList.add('lap-item');

    const lapNum = document.createElement('span');
    lapNum.classList.add('lap-num');
    lapNum.innerText = `Lap ${pause.children.length + 1}`;

    const lapVal = document.createElement('span');
    lapVal.classList.add('lap-val');
    lapVal.innerText = ` ${lapTime}`;

    lapItem.appendChild(lapNum);
    lapItem.appendChild(lapVal);

    pause.prepend(lapItem);
}


lap.addEventListener('click', ()=>{

    if(lap.innerText==="Lap"){
        if (lap.innerText === "Lap") {
            recordLap();
        }
    }
    else if(lap.innerText==="Reset"){
        resetTimer();
        lap.innerText = "Lap";
        lap.disabled = true;
        lap.classList.remove('gray-background');
        lap.classList.add('darkgray-background');
        pause.innerText="";
    }
});
