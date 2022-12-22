const passwordLength = () => {
    let inputVal = document.querySelector('#input').value;
    const inputLen = document.querySelector('#inputLen');
    document.querySelector('#percent').style.color = 'transparent';

    if (inputVal.includes(' ')){
        inputLen.innerHTML  = 'Whitespaces are not allowed';
        document.querySelector('.progress').style.display = 'none'
         return;
     }

     if (inputVal.length === 0) {
         inputLen.innerHTML = '';
         document.querySelector('.progress').style.display = 'none';
         return;
     }

    if (inputVal.length < 6) {
        inputLen.innerHTML = 'Minimum password length is 6';
        document.querySelector('.progress').style.display = 'none'
        return;
    }

    if (inputVal.length >= 6) {
        inputLen.innerHTML = '';
        document.querySelector('.progress').style.display = 'inline-block';
    }

    if(inputVal.length > 12) {
        inputLen.innerHTML = 'Maximum password length is 12';
        document.querySelector('.progress').style.display = 'none'
        return
    }

    const lower = /[a-z]/.test(inputVal);
    const upper = /[A-Z]/.test(inputVal);
    const digit = /[0-9]/.test(inputVal);
    const specialChar = /[$@#&!]/.test(inputVal);
    let passStrength = 0;
    if (lower){
        passStrength += 25;
        document.querySelector('#percent').innerHTML = passStrength;
    }
    if (upper) {
        passStrength += 25;
        document.querySelector('#percent').innerHTML = passStrength;
    }
    if (digit) {
        passStrength += 25;
        document.querySelector('#percent').innerHTML = passStrength;
    }
    if (specialChar) {
        passStrength += 25;
        document.querySelector('#percent').innerHTML = passStrength;
    }
    
    document.querySelector('#percent').innerHTML += '%';


    let percentage = document.querySelector('#percent').innerHTML;

    if (percentage === '25%'){
        document.querySelector('.progressBar').style.background = 'red';
        document.querySelector('.progressBar').style.width = percentage;
    }
    if (percentage === '50%'){
        document.querySelector('.progressBar').style.background = '#FAD054';
        document.querySelector('.progressBar').style.width = percentage;
    }
    if (percentage === '75%'){
        document.querySelector('.progressBar').style.background = 'blue';
        document.querySelector('.progressBar').style.width = percentage;
    }
    if (percentage === '100%'){
        document.querySelector('.progressBar').style.background = 'green';
        document.querySelector('.progressBar').style.width = percentage;
    }
    
}
document.querySelector('#input').addEventListener('keyup', passwordLength);

const clickToCheck = (event) => {
    event.preventDefault();
    inputVal = document.querySelector('#input').value;

    if(!inputVal.includes(' ') && inputVal.length > 5 && inputVal.length <= 12) {
        document.querySelector('#percent').style.color = '#000000';
    }
}
document.querySelector('button').addEventListener('click', clickToCheck);