   // Converts input value from dollar to real at button pressing and creates a node to show the result
   var pressBtn = document.getElementById('btn');

   pressBtn.addEventListener('click', function () {

       const amount = document.getElementById('amount').value;
       const finalValue = (parseFloat(json.USD.high)) * amount;
       const dolarValue = parseFloat(finalValue).toFixed(2);

       const finalResult = document.createElement('span');
       const node = document.createTextNode("Valor final:" + dolarValue + ' BRL');
       finalResult.appendChild(node);

       const convertText = document.getElementById('convertText')

       convertText.appendChild(finalResult);

       console.log(finalValue);
       


});

{/* <div class="converter">

<p id="greetings"></p>

<p id="currencyText">O valor do dolar hoje é de </p>

<div>

    <p>Digite o valor que quer converter</p><input type="number" id="amount">
    <button id="btn">Converter</button>

</div>

<span id="convertText"></span>

</div> */}