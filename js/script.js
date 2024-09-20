const time=document.getElementById('timeDisplay');
time.innerText="00:00.00"
const start = document.getElementById('startBtn');
start.innerText="Start";
start.classList.add('green-background');
const lap = document.getElementById('lapBtn');
lap.innerText="Lap";
lap.classList.add('darkgray-background');

start.addEventListener('click', () => {
    lap.disabled=false;
    lap.classList.remove('darkgray-background');
    lap.classList.add('gray-background');

    if (start.innerText==="Start") {
        start.innerText="Stop";
        start.classList.remove('green-background');
        start.classList.add('red-background');
        lap.innerText="Lap";
    } 
    else if(start.innerText==="Stop"){
        start.innerText="Start";
        start.classList.remove('red-background');
        start.classList.add('green-background');
        lap.innerText="Reset";
    }
});
