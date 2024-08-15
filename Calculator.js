let button = document.querySelectorAll('button');
let operationContainer = document.querySelector('.operationContainer')
let specialCharacters = ['%', '*', '/', '+', '-'];
button.forEach(btn => {
    btn.addEventListener('click', function (e) {
        handleButtonClick(btn.innerHTML);
    })
})


const clearOperation = () => {
    operationContainer.innerHTML = '';
}
const deleteLastCharacter = () => {
    let operation = operationContainer.innerHTML.split('');
    operation.pop();
    operationContainer.innerHTML = operation.join('');
}
const calculateResult = () => {
    operationContainer.innerHTML = eval(operationContainer.innerHTML);
}
const isEmpty = (input) => {
    return input === '';
}
const isSpecialCharacter = (value) => {
    return specialCharacters.includes(value);
}
const appendToOperation = (value) => {
    if (isSpecialCharacter(value) && operationContainer.innerHTML === '') {
        return;
    } else {
        if(!checkOperator(value))
            operationContainer.innerHTML += value;
    }
}
const checkOperator = (value) => {
    return (specialCharacters.includes(value) && specialCharacters.includes(operationContainer.innerHTML.slice(-1)))
}
const handleButtonClick = (value) => {
    switch (value) {
        case "DEL":
            deleteLastCharacter();
            break;
        case "AC":
            clearOperation();
            break;
        case "=":
            calculateResult();
            break;
        default:
            appendToOperation(value);
            // break;
    }
}


