const currencyFirst = document.querySelector('#currency-first');
const currencySecond = document.querySelector('#currency-second');
const amountFirst = document.querySelector('.amount-first');
const amountSecond = document.querySelector('.amount-second');
const swapBtn = document.querySelector('.swap');
const rateInfo = document.querySelector('.rate-info');

let url;

const calc = () => {

    fetch(`https://api.ratesapi.io/api/latest?base=${currencyFirst.value}&symbols=${currencySecond.value}`)
    .then(res => res.json())
    .then(data => {

        let currencyOne = currencyFirst.value;
        let currencyTwo = currencySecond.value;

        const rate = data.rates[currencyTwo];
        rateInfo.textContent = `1 ${currencyOne} = ${rate.toFixed(4)} ${currencyTwo}`;

        amountSecond.value = (amountFirst.value * rate).toFixed(2);
    });
}

const change = () => {
    let tempCurrency = currencyFirst.value;
    currencyFirst.value = currencySecond.value;
    currencySecond.value = tempCurrency;
    calc();
}

currencyFirst.addEventListener('change', calc);
currencySecond.addEventListener('change', calc);
amountFirst.addEventListener('input', calc);
swapBtn.addEventListener('click', change);

calc();

