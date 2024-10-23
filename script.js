
const inputElement = document.querySelector("input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");


function convert(){

    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if (fromValue === toValue) {
        outputElement.value = inputElement.value;
        messageElement.textContent = "";
        return;
    }

    let meters
    switch(fromValue) {
        case "m":
        meters = inputElement.value
        break;
        case "km":
            meters = inputElement.value * 1000;
            break;
    case "cm":
        meters = inputElement.value / 100;
        break;
        case "mm":
        meters = inputElement.value / 1000;
        break;
    }

    let result
    switch(toValue){
        case "m":
        result = meters
        break;
        case "km":
            meters = meters / 1000;
            break;
    case "cm":
        result = meters * 100;
        break;
        case "mm":
        result = meters * 1000;
        break;
    }

    outputElement.value = result;

    console.log(fromValue, toValue);
    console.log(meters, result);
}

convertButton.addEventListener("click", convert);