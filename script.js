const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let dpvalue = '';
UpdateDisplay();

 function  UpdateDisplay(){
     display.value = dpvalue;
 }
 keys.addEventListener('click', function(e){
     const element = e.target;

     if (!element.matches('button')) return;

     if(element.classList.contains('operator')){
         
         return;

     }
     if(element.classList.contains('decimal')){
         InputDecimal();
         UpdateDisplay();
      
        return;

    }
    if(element.classList.contains('clear')){
        Clear();
        UpdateDisplay();
         
        return;

    }
     InputNumber(element.value);
     UpdateDisplay();
 })
  function InputNumber(num){

      dpvalue=  dpvalue ===''? num: dpvalue + num;

  }
  function InputDecimal (){ 
      if(!dpvalue.includes('.')){
        dpvalue += '.';

      }
      
  }
  function Clear(){
      dpvalue='';

  }