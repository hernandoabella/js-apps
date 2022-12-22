function calc(){
	let num1Input = document.getElementById('number1').value;
	let num1Value = parseInt(num1Input)
	let num2Input = document.getElementById('number2').value;
	let num2Value = parseInt(num2Input);
	let operator = document.getElementById('operator').value;

	if(num1Input == '' || num2Input == '' || operator == 'undefined'){
		console.log('invalid')
	}
	else{
		let calculate;
		if(operator == 'add'){
		calculate = num1Value + num2Value;
		}
		else if(operator == 'min'){
			calculate = num1Value - num2Value;
		}
		else if(operator == 'mul'){
			calculate = num1Value * num2Value;
		}
		else if(operator == 'div'){
			calculate = num1Value / num2Value;
		}

		document.getElementById('final-result').innerHTML = calculate;
		}


}

function resetBtn(){
	var r = document.getElementById('final-result').innerHTML = '';

	document.getElementById('number1').value = '';
	document.getElementById('number2').value = ''
	
	document.getElementById('operator').value = 'undefined'
}