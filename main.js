const rates = {};
const elementJPY = document.querySelector('[data-value="JPY"]')
const elementUSD = document.querySelector('[data-value="USD"]')

const input = document.querySelector('#input');
const result = document.querySelector('#result');


getCurrencies ();

async function getCurrencies () {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result = await data;


    rates.JPY = result.Valute.JPY;
    rates.USD = result.Valute.USD;

    console.log(rates);
    
    elementJPY.textContent = (rates.JPY.Value / 100 / rates.USD.Value).toFixed(6);
   
}

input.oninput = function () {
    result.value = (parseFloat(input.value) / (rates.JPY.Value / 100 / rates.USD.Value)).toFixed(2);
}

result.oninput = function () {
    input.value = (parseFloat(result.value) * (rates.JPY.Value / 100 / rates.USD.Value)).toFixed(2);
}