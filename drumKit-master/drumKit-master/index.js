// console.log("linked to html")

// GOAL OF EXERCISE
//on key event does 2 things
//play sound associated with key
//set off button animation 
//make key slightly bigger
//add border
// on key events
// playing audio
// listening for transition end


// PLAY SOUND FUNCTION
//function with event parameter(console.log(e.keycode)) to check key codes.
function playSound(e) {
    // console.log(e.keyCode);

    //select audio element from html doc.
    //use attribute selector and es6 template strings to select key code.
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(audio);

    //if theres no audio element associated with keycode
    // stop the function from running.
    if (!audio) return;

    //set audio current time to 0 to stop sound and rewind if pressed multiple times.
    audio.currentTime = 0;

    //call audio.play function
    audio.play();


    // key variable equal to:
    // same as audio but select elements with key class.
    // add playing class to key
    // look up javascript classList
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key);

    key.classList.add("playing");
}



// REMOVE TRANSITION FUNCTION
// function to remove transition with event parameter
function removeTransition(e) {
    // console.log(e);

    // if the event property is not transform skip function
    if (e.propertyName !== 'transform') return;

    // console.log(e.propertyName);

    // console.log(this);

    // remove playing class
    this.classList.remove("playing");
}


// KEYS VARIABLE
// global variable for keys
// select all elements with the class of key
const keys = document.querySelectorAll('.key');
console.log(keys);

// CALL FUNCTION FOR EACH KEY
// call event listener function for on keys object to end transition.
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

// EVENT LISTENER KEYDOWN PLAYSOUND
// event listener on window object for keydown to call play sound function
window.addEventListener('keydown', playSound);