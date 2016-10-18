//github.com/callmekurisu
function binaryAgent(str) {
  //create array of binary strings
  var arrBinary = str.split(" ");
  //make a box to store ascii conversions
  var asciiBox = [];
  //iterate through the array of binary strings
  //one at a time convert to decimal with parseInt
  //at the same time convert decimal to ascii
  //at the same time push ascii into array
 for(i=0;i<arrBinary.length;i++){
   asciiBox.push(String.fromCharCode(parseInt(arrBinary[i],2)));
  }
   var join = asciiBox.join("");
   return join;
    }
   
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
