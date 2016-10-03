
function pairElement(str) {
  var encapsulate = [];
  
  var split = str.split("");
  for (i=0;i<str.length;i++){
    if(split[i] == "A"){
      encapsulate[i] = ["A","T"];
    }
    if(split[i] == "T"){
      encapsulate[i] = ["T","A"];
    }
    if(split[i] == "C"){
      encapsulate[i] = ["C","G"];
    }
    if(split[i] == "G"){
      encapsulate[i] = ["G","C"];
    }
  }
  
  return encapsulate;
}

pairElement("GCG");
