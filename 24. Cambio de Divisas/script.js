const primeraMoneda = document.querySelector('#primera-moneda');
const segundaMoneda = document.querySelector('#segunda-moneda');
const amountFirst = document.querySelector('.amount-first');
const amountSecond = document.querySelector('.amount-second');
const botonCambiar = document.querySelector('.cambiar');
const rateInfo = document.querySelector('.rate-info');

let url;

const calc = () => {

    fetch(`https://api.ratesapi.io/api/latest?base=${primeraMoneda.value}&symbols=${segundaMoneda.value}`)
    .then(res => res.json())
    .then(data => {

        let currencyOne = primeraMoneda.value;
        let currencyTwo = segundaMoneda.value;

        const rate = data.rates[currencyTwo];
        rateInfo.textContent = `1 ${currencyOne} = ${rate.toFixed(4)} ${currencyTwo}`;

        amountSecond.value = (amountFirst.value * rate).toFixed(2);
    });
}

const change = () => {
    let tempCurrency = primeraMoneda.value;
    primeraMoneda.value = segundaMoneda.value;
    segundaMoneda.value = tempCurrency;
    calc();
}

primeraMoneda.addEventListener('change', calc);
segundaMoneda.addEventListener('change', calc);
amountFirst.addEventListener('input', calc);
botonCambiar.addEventListener('click', change);

calc();

