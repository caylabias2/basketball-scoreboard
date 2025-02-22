let homeScore = parseInt(document.getElementById("homeScore").innerText, 10);
let guestScore = parseInt(document.getElementById("guestScore").innerText, 10);
let quarter = parseInt(document.getElementById("quarter").innerText, 10);
let timerElement = document.getElementById("timer");
let totalTime = 12 * 60;
let timerInterval;
let homeFouls = parseInt(document.getElementById("homeFouls").innerText, 10);
let guestFouls = parseInt(document.getElementById("guestFouls").innerText, 10);
let isRunning = false


function addPoint(team) {
    if (team == 'homeScore') {
        homeScore++;
        document.getElementById('homeScore').textContent = homeScore;
    }
    else {
        guestScore++;
        document.getElementById('guestScore').textContent = guestScore;
    }
}


function changeQuarter() {
    if (quarter < 4) {
        quarter++;
    }
    else {
        quarter = 0;
    }
    document.getElementById('quarter').textContent = quarter;
}

function changeFouls(team) {
    if (team == 'home') {
        homeFouls++;
        document.getElementById('homeFouls').textContent = homeFouls;
    }
    else {
        guestFouls++;
        document.getElementById('guestFouls').textContent = guestFouls;
    }
    
}

function toggleTimer() {
    if (isRunning) {
        // Pause the timer
        clearInterval(timerInterval);
        isRunning = false;
    } else {
        // Start the timer
        isRunning = true;
        timerInterval = setInterval(() => {
            let minutes = Math.floor(totalTime / 60);
            let seconds = totalTime % 60;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            timerElement.textContent = `${minutes}:${seconds}`;

            if (totalTime <= 0) {
                clearInterval(timerInterval);
                timerElement.textContent = "00:00";
                alert("Quarter Over!");
                isRunning = false;
            } else {
                totalTime--;
            }
        }, 1000);
    }
}

// Reset function to stop and reset the timer
function resetTimer() {
    clearInterval(timerInterval);
    totalTime = 12 * 60;
    timerElement.textContent = "12:00";
    isRunning = false;
}

function resetPoints() {
    guestScore = 0;
    homeScore = 0;
    document.getElementById('guestScore').innerHTML = guestScore;
    document.getElementById('homeScore').innerHTML = homeScore;
}

function resetFouls() {
    guestFouls = 0;
    homeFouls = 0;
    document.getElementById('guestFouls').innerHTML = guestFouls;
    document.getElementById('homeFouls').innerHTML = homeFouls;
}