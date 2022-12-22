const displayTime = () => {
    let date = new Date;
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let amPm = ''

    // am pm 
    hour < 12 ? amPm = 'AM' : amPm = 'PM'

    // 12hr clock 
    if (hour > 12) {
        hour -= 12
    }

    // padding 
    let padHour = String(hour).padStart(2, '0');
    let padMin = String(minute).padStart(2, '0');
    // let padSec = String(second).padStart(2, '0');

    // display
    time.textContent = `${padHour}:${padMin}  ${amPm}`;

    // update in near real-time
    requestAnimationFrame(displayTime);
}


displayTime();
