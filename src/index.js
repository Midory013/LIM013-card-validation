import validator from './validator.js';

document.getElementById('btnValidar').addEventListener("click",()=>{
  let cardnumber1 = document.getElementById("card-number-1").value;
  let cardnumber2 = document.getElementById("card-number-2").value;
  let cardnumber3 = document.getElementById("card-number-3").value;
  let cardnumber4 = document.getElementById("card-number-4").value;
  // console.log(card)
  validator.isValid(cardnumber1 + cardnumber2 + cardnumber3 + cardnumber4);
  document.getElementById('prueba').innerHTML=(validator.maskify(cardnumber1 + cardnumber2 + cardnumber3 + cardnumber4)); 
})
  