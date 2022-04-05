const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let dpvalue = '';
let firstvalue = null;
let operator = null;
let waitingsecondvalue = false;

UpdateDisplay();


function UpdateDisplay() {
    display.value = dpvalue;
}
keys.addEventListener('click', function (e) {
    const element = e.target;

    if (!element.matches('button')) return;

    if (element.classList.contains('operator')) {
        HandleOperator(element.value);

        UpdateDisplay();
        

        return;

    }
    if (element.classList.contains('decimal')) {
        InputDecimal();
        UpdateDisplay();

        return;

    }
    if (element.classList.contains('clear')) {
        Clear();
        UpdateDisplay();

        return;

    }
    InputNumber(element.value);
    UpdateDisplay();
})
function InputNumber(num) {
    if (waitingsecondvalue) {
        dpvalue = num;
        waitingsecondvalue = false;
    } else {
        dpvalue = dpvalue === '' ? num : dpvalue + num;

    }
   


}
function InputDecimal() {
    if (!dpvalue.includes('.')) {
        dpvalue += '.';

    }

}
function Clear() {
    dpvalue = '';

}
function HandleOperator(nextoperator) {
    const value = parseFloat(dpvalue);

    if( operator && waitingsecondvalue){
        operator= nextoperator;
        return;
    }
    if (firstvalue === null) {
        firstvalue = value;
    } else if(operator){
        const result = Calculate(firstvalue, value, operator)
        dpvalue = `${parseFloat(result.toFixed(7))}`;;
        firstvalue=result;

    }


    waitingsecondvalue = true;
    operator = nextoperator;
   

}
function Calculate(first, second, operator){
    if(operator==='+'){
        return first + second;
    } else if(operator==='-'){
        return first - second;
    }else if (operator==='*') {
        return first * second;
    }else if (operator ==='/'){
        return first / second;
    }
    
    return second;
}