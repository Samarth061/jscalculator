let output = document.querySelector('.first_row'); 
let operator = document.querySelectorAll('.operator'); 
let equalTo = document.querySelector('.right_rounded');
let number = document.querySelectorAll('.number');
let clearButton = document.querySelector('.AC');

let currentNumber = '';    
let currentTotal = 0;      
let currentOperator = '';  
let isNewNumber = false;   

// Number buttons
number.forEach(button => {
    button.addEventListener('click', () => {
        if (isNewNumber) {
            currentNumber = ''; 
            isNewNumber = false;
        }
        currentNumber += button.textContent;  
        output.textContent = currentNumber;  
    });
});

// Operator buttons
operator.forEach(button => {
    button.addEventListener('click', () => {
        if (currentOperator) {
            calculate();  
        } else if (currentTotal === 0 && currentNumber !== '') {
            currentTotal = Number(currentNumber);
        }
        
        currentOperator = button.textContent;   
        isNewNumber = true;                     
    });
});

// Equal Button
equalTo.addEventListener('click', () => {
    calculate();               
    output.textContent = currentTotal; 
    currentOperator = '';      
});

// Calculation logic
function calculate() {
    let inputNumber = Number(currentNumber);

    if (currentOperator === '+') {
        currentTotal += inputNumber;
    } else if (currentOperator === '-') {
        currentTotal -= inputNumber;
    } else if (currentOperator === 'x') {
        currentTotal *= inputNumber;
    }else if (currentOperator === '/') {
        currentTotal /= inputNumber;
    }

    currentNumber = '';  
}

// Clear button 
clearButton.addEventListener('click', () => {
    currentNumber = '';
    currentTotal = 0;
    currentOperator = '';
    output.textContent = '';
});
