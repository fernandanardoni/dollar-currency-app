// Currency Converter

// const fetch = require('node-fetch');


async function convert() {

    //Fetch third party API and turn it into json
    const res = await fetch('https://economia.awesomeapi.com.br/all/USD-BRL/');
    const json = await res.json();

    // Creates a node in HTML and show the dollar currency
    const currencyTextChild = document.createElement('span');
    const newNode = document.createTextNode(parseFloat(json.USD.high).toFixed(2));
    currencyTextChild.appendChild(newNode);
    const currencyText = document.getElementById('currencyText');
    currencyText.appendChild(currencyTextChild);

    console.log(newNode)

    // Creates a test showing the last time update 
    const showTime = document.getElementById('time-stamp');
    const timeStamp = document.createTextNode((json.USD.create_date));
    showTime.appendChild(timeStamp);



   // Converts input value from dollar to real at button pressing and creates a node to show the result
   var pressBtn = document.getElementById('btn');

   pressBtn.addEventListener('click', function myFunc () {

       const amount = document.getElementById('amount').value;
       const finalValue = (parseFloat(json.USD.high)) * amount;
       const dolarValue = parseFloat(finalValue).toFixed(2);

       const finalResult = document.createElement('span');
       const node = document.createTextNode(dolarValue + " ");
       finalResult.appendChild(node);

       const convertText = document.getElementById('convertText');

       convertText.appendChild(finalResult);

});
   
};

convert();


// Greets the user with the computer time
function showClock() {

    const clock = new Date();

        const hour = clock.getHours();
        const minute = clock.getMinutes();

        const newClock = document.createElement('span');
        let userGreeting;
        

        if (hour < 12) {
            userGreeting = document.createTextNode('Bom dia!');
        } else if (hour > 12 && hour < 18) {
            userGreeting = document.createTextNode('Boa tarde!');
        } else if (hour > 18 && minute > 1) {
            userGreeting = document.createTextNode('Boa noite!');
        }

        const finalClock = document.getElementById('greetings');
        newClock.appendChild(userGreeting);

        finalClock.appendChild(newClock);

}

showClock();

function resetCounter() {

    document.getElementById('amount').value = "";
    document.getElementById('convertText').innerText = "";
    

    myFunc();
}

function clear() {

    const usdValue = document.getElementById('amount').value = "";
    const brlValue = document.getElementById('convertText').innerText = "";
}




