function uniteUnique(...args) {
  var arrUnique = [];
  
  if(args.length<=2){
    
      for(i=0;i<args[0].length;i++){
    var index1 = args[1].indexOf(args[0][i]);
    
     if (index1 > -1) {
    args[1].splice(index1, 1);

  }
  
    
  } 
  
    
  }
  
  if(args.length>2){
    
      for(i=0;i<args[0].length;i++){
    var index1 = args[1].indexOf(args[0][i]);
    
    var index2 = args[2].indexOf(args[0][i]);
     if (index1 > -1) {
    args[1].splice(index1, 1);

  }
    if(args.length>2){
      if (index2 > -1) {
    args[2].splice(index2, 1);

  }
    }
    
  } 
  
    
  }

  var flattened = args.reduce(function(a, b) {
    return a.concat(b);
}, []);
  
    
  
 return flattened;
  
}


uniteUnique([1, 2, 3], [5, 2, 1]);
