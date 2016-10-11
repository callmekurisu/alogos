
function sumFibs(num) {
  var fibBox = [];
  //Fn = Fn-1 + Fn-2
  //First two numbers in Fib sequence are 1
  for (i=2;i<num;i++){
    fibBox[0] = 1;
    fibBox[1] = 1;
    fibBox[i] = fibBox[i-1] + fibBox[i-2];
  }
  
  //filter out the odd numbers
  function isOdd(value) {
  return value%2 !== 0 && value < num; 
}
var filtered = fibBox.filter(isOdd);
  //sum only the odd numbers is the array;
  var total = filtered.reduce(function(a, b) {
  return a + b;
  }, 0);
  return total;
}

sumFibs(10);
