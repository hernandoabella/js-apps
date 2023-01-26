const months = [31,28,31,30,31,30,31,31,30,31,30,31];
const selectedDiv = document.getElementById('year');
const selectedDiv1 = document.getElementById('month');
const selectedDiv2 = document.getElementById('day');
const selectedDiv3 = document.getElementById('month1');
const selectedDiv4 = document.getElementById('day1');
const op = document.getElementById('m_d');
const op1 = document.getElementById('n_b');
console.log(new Date().getMonth());
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth()+1;
let currentDate = new Date().getDate();
if (currentDate<10) 
{
    currentDate="0"+currentDate;
}
if (currentMonth<10) 
{
    currentMonth="0"+currentMonth;
}
document.getElementById('today_date').value = currentYear+"-"+currentMonth+"-"+currentDate;
function ageCalculate()
{
    let myBirth = document.getElementById("date").value;
    let today = new Date();
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();
    if (myBirth!="") 
    {
        let inputDate = new Date(myBirth);
        let birthMonth,birthDate,birthYear;
        let birthDetails = {date:inputDate.getDate(),month:inputDate.getMonth()+1,year:inputDate.getFullYear()}
        if(currentYear % 4 === 0 || (currentYear % 100 === 0 && currentYear % 400 === 0))
        {
            months[1] = 29;
        }
        else{
            months[1] = 28;
        }
        birthYear = currentYear - birthDetails.year;
        if(currentMonth >= birthDetails.month)
        {
            birthMonth = currentMonth - birthDetails.month;
        }
        else
        {
            birthYear--;
            birthMonth = 12 + currentMonth - birthDetails.month;
        }
        if(currentDate >= birthDetails.date)
        {
            birthDate = currentDate - birthDetails.date;
        }
        else
        {
            birthMonth--;
            let days = months[currentMonth - 2];
            birthDate = days + currentDate - birthDetails.date;
            if(birthMonth < 0)
            {
                birthMonth = 11;
                birthYear--;
            }
        }
        selectedDiv.innerText = birthYear;
        selectedDiv1.innerText = birthMonth;
        selectedDiv2.innerText = birthDate;
        selectedDiv3.innerText = 11 - birthMonth; 
        selectedDiv4.innerText = months[currentMonth] - birthDate;
        op.style.opacity = '1';
        op1.style.opacity = '1';
    }
}