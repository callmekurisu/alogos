
function translatePigLatin(str) {
  var re = /^[aeiou]$/i;
  //if it starts with a constanant just add way
  if (re.test(str[0]) === true){
    return str.substr(str[1], str.length) + "way";
  }
  //if it doesn't start with a constanant cut them off
  //and add them to the end
  //then add ay
  if (re.test(str[0]) === false){
    
  
  for (i=0;i<str.length;i++){
    if(re.test(str[i]) === true )
      return str.substr(i, str.length-i)+ str.substr(0, i) + "ay";
   }
  }
 // return re.test(str[1]);
}

translatePigLatin("glove");
