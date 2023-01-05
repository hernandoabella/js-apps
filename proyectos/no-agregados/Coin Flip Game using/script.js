// ---- Variable Declarations
const coin = document.querySelector("#coin");
const coinHeads = document.querySelector("#heads");
const coinTails = document.querySelector("#tails");

const flipButton = document.querySelector("#flip");
const notif = document.querySelector("#notification");
const result = document.querySelector("#result");

const headsStat= document.querySelector("#heads-stat");
const tailsStat = document.querySelector("#tails-stat");

const resetStats = document.querySelector("#reset-stats");

// ---- Setting initial stat displays
headsStat.textContent = 0;
tailsStat.textContent = 0;

// ---- Removing the results if user clicks the RESET button
function resetResult() {
    notif.style.opacity = "0";
    result.textContent = "";
}

// ---- Initiating a coin flip
flipButton.addEventListener('click', function() {
    resetResult();
    coinHeads.style.opacity = "1";
    coinHeads.classList.add('heads-flip-animation');
    coinTails.classList.add('tails-flip-animation');
    flipButton.textContent = "FLIP AGAIN";
    window.setTimeout(function() {
        coinHeads.classList.remove('heads-flip-animation');
        coinTails.classList.remove('tails-flip-animation');
        getCoinFace();
    }, 1000);
});

// ---- Determining the coin face
function getCoinFace() {
    notif.style.opacity = "1";
    let face = Math.random();
    let h = parseInt(headsStat.textContent);
    let t  = parseInt(tailsStat.textContent);
    if ( face > 0.5 ) {
        headsStat.textContent = (h + 1);
        result.textContent = "HEADS!";
    } else {
        tailsStat.textContent = (t + 1);
        coinHeads.style.opacity = "0";
        result.textContent = "TAILS!";
    }
}

// ----
resetStats.addEventListener('click', function() {
    headsStat.textContent = 0;
    tailsStat.textContent = 0;
    resetResult();
    flipButton.textContent = "FLIP";
});