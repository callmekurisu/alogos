function fearNotLetter(str) {
  for (i=0;i<str.length-1;++i){
    if (str[i+1].charCodeAt() - str[i].charCodeAt() != 1){
       var missingLetter = str[i].charCodeAt() + 1;
      return String.fromCharCode(missingLetter);
      
    }
   
  }
  
  
}

fearNotLetter("abce");
