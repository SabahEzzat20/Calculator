let buttons = document.querySelectorAll('button');
let operationContainer = document.querySelector('.operationContainer');
let operatorBtns = document.querySelectorAll('.operator');

let specialCharacters = ['%', '*', '/', '+', '-'];

buttons.forEach(btn => {
    btn.style.color = 'rgb(54, 54, 54)';

    // Handle mouseover and mouseout
    btn.addEventListener('mouseover', function () {
        btn.style.backgroundColor = 'rgb(97, 97, 201)';
        btn.style.color = 'white';
    });

    btn.addEventListener('mouseout', function () {
        btn.style.backgroundColor = '#F0F0F0';

        // Check if the button is an operator and set its color back
        if (btn.classList.contains('operator')) {
            btn.style.color = 'rgb(97, 97, 201)';
        } else {
            btn.style.color = 'rgb(54, 54, 54)';
        }
    });

    btn.addEventListener('click', function (e) {
        handleButtonClick(btn.innerHTML);
    });
});

// Set initial color for operator buttons
operatorBtns.forEach(operator => {
    operator.style.color = 'rgb(97, 97, 201)';
});



const clearOperation = () => {
    operationContainer.innerHTML = '';
}
const deleteLastCharacter = () => {
    let operation = operationContainer.innerHTML.split('');
    operation.pop();
    operationContainer.innerHTML = operation.join('');
}
const calculateResult = () => {
    let result = eval(operationContainer.innerHTML);
    Number.isInteger(result) ? operationContainer.innerHTML = result : operationContainer.innerHTML = result.toFixed(3);
}
const isEmpty = (input) => {
    return input === '';
}
const isSpecialCharacter = (value) => {
    return specialCharacters.includes(value);
}
const appendToOperation = (value) => {
    if (operationContainer.innerHTML === '' && isSpecialCharacter(value)) {
        return;
    }
    if (!checkOperator(value)) {
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
