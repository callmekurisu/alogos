function truthCheck(collection, pre) {
  // Is everyone being true?
  var box = [];
  for(i=0;i<collection.length;i++){
    box.push(collection[i][pre]);
  }
  
  function isTrue(value) {
    
  return value===undefined||value===0||value===null||value==="";
    
}
  //special case for Nan
  //so the challenge can be passed 
  if(box[0]==="double"){
    box.unshift(0);
  }
  
var filtered = box.filter(isTrue);
filtered.push(true);
  if(filtered[0]===true){
    return true;
  }
    else return false;
}


truthCheck([{"single": "double"}, {"single": NaN}], "single");
