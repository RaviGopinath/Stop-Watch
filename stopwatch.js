const timer = document.getElementById("time");
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var resetButton = document.getElementById("reset");

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

startButton.addEventListener('click', startTimer)

function startTimer() {
    if (stoptime == true) {
        stoptime = false;
        timeCycle();
    }
}

stopButton.addEventListener('click', stopTimer)

function stopTimer() {
    if (stoptime == false) {
        stoptime = true;
    }
}

function timeCycle() {
    if (stoptime == false) {
        hr = parseInt(hr);
        min = parseInt(min);
        sec = parseInt(sec);

        sec = sec + 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }

        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if (sec < 10 || sec == 0) {
            sec = "0" + sec;
        }
        if (min < 10 || min == 0) {
            min = "0" + min;
        }
        if (hr < 10 || hr == 0) {
            hr = "0" + hr;
        }

        timer.innerHTML = hr + ":" + min + ":" + sec;

        setTimeout("timeCycle()", 1000);
    }
}

resetButton.addEventListener('click', resetTimer)

function resetTimer() {
    timer.innerHTML = "00 : 00 : 00";
}