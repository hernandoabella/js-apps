// 1. Create a variable that stores an html element
var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');

//numField1.value = "TEST";         CAN BE USED TO TEST IF WORKING
//resultField.innerText = "TEST2";

var form = document.getElementById('xIsWhatPercentOfY');

form.addEventListener('submit', function(event){             // Add the button in the form. addEvent...
    var x = parseFloat(numField1.value);          //parseFloat will turn your string into a float
    var y = parseFloat(numField2.value);
    
    var result = x / y;
    var percent = result * 100;
    
    resultField.innerText="Answer: "+ percent+ "%";
    event.preventDefault(); //This prevents your page from refreshing immediately after pressing submit. 
});






