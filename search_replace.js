
function myReplace(str, before, after) {
  var arr = [];
 
    var upperArray = [];
    if (before[0] === before[0].toUpperCase()){
      var upper = after[0].toUpperCase();
    }
     if (before[0] === before[0].toLowerCase()){
      var upper = after[0].toLowerCase();
    }
   
    for (i=0;i<after.length;i++){
    upperArray.push(after[i]);
     
    }
    
    upperArray.shift();
    upperArray.unshift(upper);
    var joinUpper = upperArray.join("");
    var split = str.split(" ");
  

    for (i=0;i<split.length;i++){
      
      if(split[i] == before){
        for (j=i+1;j<split.length+1;j++){
          var ending = split.splice(j);
        }
        arr = split.splice(i);
        
      }
    }
  
    var replace = ending.join(" ");
    var search = split.push(joinUpper);
    var replaced = split.push(replace);
    
    
    var finish = split.join(" ");
    
    
  
  return finish;
}

myReplace("Let us go to the store", "store", "mall");
