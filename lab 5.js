function currencyGet() {
    let fromCurrency = document.getElementById('input_currency');
    let currency_to = document.getElementById('currency_to');
    fetch("https://api.frankfurter.app/currencies")
        .then((curFrom) => curFrom.json())
        .then((curFrom) => {
            console.log(curFrom)
            Object.entries(curFrom).forEach(([key, value]) => {
                const optionFrom = document.createElement('option');
                optionFrom.value = key;
                optionFrom.innerHTML = value;
                fromCurrency.appendChild(optionFrom)
                
                const optionTo = document.createElement('option');
                optionTo.value = key;
                optionTo.innerHTML = value;
                currency_to.appendChild(optionTo)
            });
        });
}

function currencyConvert() {
    let fromCurrency = document.getElementById('input_currency').value;
    let toCurrency = document.getElementById('currency_to').value;
    let numberToConvert = document.getElementById('convertCurrency').value;
    
    if(fromCurrency==toCurrency)
    {
        warning="You cannot convert to and from the same currency!";
    }

    console.log("From:", fromCurrency)
    console.log("To:", toCurrency)
    
    fetch(`https://api.frankfurter.app/latest?from=${fromCurrency}&to=${toCurrency}`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res); 
		//Check the log and see how the response looks. You'll have to get the conversion rate from res['rates'][toCurrency]
            
            const newNum = numberToConvert * conversionRate;
            document.getElementById('result').innerHTML =  `${numberToConvert} ${fromCurrency} is equal to ${newNum} ${toCurrency}`
        });
    
}

window.onload = currencyGet;

