var data = [];

function calculateTip() {
    var tip;
    getData();
    
    tip = (data[0] * data[1]) / data[2];

    if (isNaN(tip)) {
        document.getElementById('result').textContent = '$--';
    } else if (tip === Infinity) {
        document.getElementById('result').textContent = '$--';
    } else {
        document.getElementById('result').textContent = '$' + tip.toFixed(2);
    }
}



function getData() {
    data[0] = document.getElementById('bill').value;
    data[1] = document.getElementById('service').value;
    data[2] = document.getElementById('split').value;

    if (data[0] <= 0) {
        alert('Please enter a bill amount.');
    } else if (data[2] < 1) {
        alert('Please enter 1 for yourself or more if you are splitting the bill.');
    }
}