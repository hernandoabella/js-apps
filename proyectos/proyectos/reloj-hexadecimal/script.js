const clock = document.querySelector('#clock');
const hexColor = document.querySelector('#hexColor');
const body = document.querySelector('body');

const myFunction = () =>{
  let time = new Date();
  let hours = (time.getHours() % 12);
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  if(hours.length < 2){
    hours = '0' + hours;
  }

  if(minutes.length < 2){
    minutes = '0' + minutes;
  }

  if(seconds.length < 2){
    seconds = '0' + seconds;
  }

  let timeStr = hours + ' : ' + minutes + ' : ' + seconds;
  let hexStr = '#' + hours + minutes + seconds;

  clock.textContent = timeStr;
  hexColor.textContent = hexStr;
  body.style.backgroundColor = hexStr;
  

}

setInterval(myFunction, 1000);