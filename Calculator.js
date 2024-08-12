let button = document.querySelectorAll('button');
let operationContainer = document.querySelector('.operationContainer')
let specialCharacters = ['%','*','/','+','-']
button.forEach(btn => {
    btn.addEventListener('click', function (e) {

        if (btn.innerHTML !== "DEL" && btn.innerHTML !== 'AC' && btn.innerHTML !== '=') {
            operationContainer.innerHTML += btn.innerHTML;            
        }
        if (operationContainer.innerHTML === '' && specialCharacters.includes(btn.innerHTML)) {
            // operationContainer.innerHTML = '';
            return;
        }
        if (btn.innerHTML === '=') {
            operationContainer.innerHTML.length > 0 ? operationContainer.innerHTML = eval(operationContainer.innerHTML) : alert('please enter operation to calculate!');
            if (operationContainer.innerHTML === '' && specialCharacters.includes(btn.innerHTML)) {
                operationContainer.innerHTML = '';
                return;
            }
        }
        if (btn.innerHTML === 'AC') {
            operationContainer.innerHTML = '';
        }
        if (btn.innerHTML === "DEL") {
            let operation = operationContainer.innerHTML.split('');
            operation.pop()
            operationContainer.innerHTML = operation.join('');
        }
    })
    if (btn.innerHTML === "DEL") {
        btn.style.color = 'rgb(230, 57, 57)';
    }
    if (isNaN(btn.innerHTML)&&btn.innerHTML!=='.'&&btn.innerHTML!=='DEL') {
            btn.style.color = 'rgb(67, 112, 236)'
    }
});

