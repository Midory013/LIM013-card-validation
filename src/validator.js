// Objeto
const validator = {
  // Propiedades
  isValid : (cardnumber)=>{
    let reverse = "";
    // bucle
    for(let i = cardnumber.length-1; i >=0; i--){
      reverse = reverse + cardnumber[i];
      console.log(reverse);
    }
    
    /*let card_number = cardnumber.substring(0,3);
    let card_number_2 = cardnumber.substring(4,7);
    let card_number_3 = cardnumber.substring(8,11);
    let card_number_4 = cardnumber.substring(12,15);*/

    let cadena = cardnumber.toString();
    let longitud = cadena.length;
    let cifra = null;
    let cifra_cad = null;
    let suma=0;
      

    if ((longitud%2)===0) {
      for (let i=0; i < longitud; i+=2){
        cifra = parseInt(cadena.charAt(i))*2;
        if (cifra > 9){ 
          cifra_cad = cifra.toString();
          cifra = parseInt(cifra_cad.charAt(0)) + parseInt(cifra_cad.charAt(1));
        }
        suma+=cifra;
      
        }
        for (let i=1; i < longitud; i+=2){
          suma += parseInt(cadena.charAt(i));
        }
    }
    else{
      for (let i=1; i < longitud; i+=2){
        cifra = parseInt(cadena.charAt(i))*2;
        if (cifra > 9){ 
          cifra_cad = cifra.toString();
          cifra = parseInt(cifra_cad.charAt(0)) + parseInt(cifra_cad.charAt(1));
        }
        suma+=cifra;
      
        }
        for (let i=0; i < longitud; i+=2){
          suma += parseInt(cadena.charAt(i));
        }
    }
    
      if ((suma % 10) == 0){ 
       alert("Es valido el numero de la tarjeta");
       return true;
      } else {
       alert("No te valido el numero de tarjeta no es válido");
       return false;
      }

  },
  maskify : function(cardnumber){
    cardnumber = cardnumber.replace(/.(?=.{4})/g, "#");
    return cardnumber;
  }
};

export default validator; 


