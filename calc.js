let output = document.querySelector('.first_row'); 
let operator = document.querySelectorAll('.operator'); 
let equalTo = document.querySelector('.right_rounded');
let number = document.querySelectorAll('.number');
let clearButton = document.querySelector('.AC');

let currentNumber = '';    
let currentTotal = 0;      
let currentOperator = '';  
let isNewNumber = false;
let errorState = false;   

// Number buttons
number.forEach(button => {
    button.addEventListener('click', () => {
        if (isNewNumber) {
            currentNumber = ''; 
            isNewNumber = false;
            errorState = false;
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
        currentTotal = Math.round(currentTotal*100)/100;
    } else if (currentOperator === '-') {
        currentTotal -= inputNumber;
        currentTotal = Math.round(currentTotal*100)/100;
    } else if (currentOperator === 'x') {
        currentTotal *= inputNumber;
        currentTotal = Math.round(currentTotal*100)/100;
    }else if (currentOperator === '/') {
        if (inputNumber === 0) {
            output.textContent = "Error"; 
            errorState = true;            
            currentTotal = 0;             
            currentNumber = '';           
            return;                       
        } else {
            currentTotal /= inputNumber;
            currentTotal = Math.round(currentTotal*100)/100;
            console.log(currentTotal);
        }
    }

    output.textContent = currentTotal;
    currentNumber = '';  
}

// Clear button 
clearButton.addEventListener('click', () => {
    currentNumber = '';
    currentTotal = 0;
    currentOperator = '';
    output.textContent = '';
    errorState = false;
});
