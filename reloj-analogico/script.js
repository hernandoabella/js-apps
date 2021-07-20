setInterval(anaClock, 1000);

function anaClock() {
  const deg = 6;
  const hour = document.querySelector('.hr');
  const minutes = document.querySelector('.min');
  const seconds = document.querySelector('.sec');

  const day = new Date();

  const sec = day.getSeconds() * deg;
  const min = day.getMinutes() * deg;
  const hr = day.getHours() * 30;

  seconds.style.transform = `rotateZ(${sec}deg)`;
  minutes.style.transform = `rotateZ(${min}deg)`;
  hour.style.transform = `rotateZ(${(hr)+(min/12)}deg)`;
}

anaClock();
