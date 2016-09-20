
function convertToRoman(num) {
  
  var roman = [];
  if (num < 4) {
    var I = num/1;
    var ones = "I";
    for (i=0;i<I;i++){
      roman.push(ones);

    }
 
  }
  
  if (num === 4) {
     return "IV";  
    }
  
    if (num === 5) {
     return "V";  
    }
  
  
  if (num === 9) {
     return "IX";  
    } 
  
  //roman numerals 10 to 30
  if (num > 10 && num < 40) {
    var X = Math.floor(num/10);
    var tens = "X";
    var top = num%10;
    var tones = "I";
    for (i=0;i<X;i++){
      roman.push(tens);
    }
    
    //15 to 20
    if (top > 5 && top < 9) {
     roman.push("V");
     var xvones = top - 5;
     var xvo = "I";
     for (i=0;i<xvones;i++){
      roman.push(xvo);
     }       
    }
    //10 to 15
     if (top < 5) {
     for (i=0;i<top;i++){
      roman.push(tones);
     }       
    }
    //special for 4
    
    if (top === 4) {
      roman.push("IV");
    }
    //special for adding 9
    if (top === 9) {
      roman.push("IX");
 
    }
    
  }
  
  //40 is special too ^_^
  if (num > 40 && num < 50) {
    var L = Math.floor(num/40);
    var fourty = "XL";
    var fop = num%40;
    var fones = "I";
    for (i=0;i<L;i++){
      roman.push(fourty);
    }
    if (fop === 4) {
      roman.push("IV");
    }
    
    if (fop > 5 && fop < 9) {
     roman.push("V");
     var fvones = fop - 5;
     var fvo = "I";
     for (i=0;i<fvones;i++){
      roman.push(fvo);
     }       
    }
    //40 to 44
     if (fop < 4) {
     for (i=0;i<fop;i++){
      roman.push(fones);
     }       
    }
    //special for adding 9
    if (fop === 9) {
      roman.push("IX");
 
    }
    //special for adding 9
    if (fop === 5) {
      roman.push("V");
 
    }

  }
  
  
  //50 to 90
  if (num > 50 && num < 90) {
    var LL = Math.floor(num/50);
    var fifty = "L";
    var fiftyop = num%50;
    //special statements for rounding
    
    //special code to use rounded numbers
  if (fiftyop > 10 && fiftyop < 20) {
    var rounded = 10;
  }
  
  if (fiftyop > 20 && fiftyop < 30) {
    var rounded = 20;
  }
  
  if (fiftyop > 30 && fiftyop < 40) {
    var rounded = 30;
  }
    
    var oextract = fiftyop%rounded;
    var fiftyones = "I";
    var fiftytens = "X";
    for (i=0;i<LL;i++){
      roman.push(fifty);
    }
    
    if (fiftyop > 10 && fiftyop < 20) {
      for (i = 10; i < 20;i+=10){
        roman.push(fiftytens);  
      }
    }
      
    if (fiftyop > 20 && fiftyop < 30) {
      for (i = 10; i < 30;i+=10){
        roman.push(fiftytens);  
      }
 }
      if (fiftyop > 30 && fiftyop < 40) {
      for (i = 10; i < 40;i+=10){
        roman.push(fiftytens);  
      }
 }
    
    if ( oextract === 4) {
      roman.push("IV");
    }
    
    if (oextract < 4) {
     for (i=0;i<oextract;i++){
      roman.push(fiftyones);
     }       
    }
    
    if (oextract > 5 && oextract < 9) {
     roman.push("V");
     var fiftyones = oextract;
     var fiftyvo = "I";
     for (i=0;i<oextract - 5;i++){
      roman.push(fiftyvo);
     }       
    }
    
    if ( oextract === 9) {
      roman.push("IX");
    }
    
  
    
  }
  roman = roman.join("");
    return roman;
}
  
convertToRoman(89);
