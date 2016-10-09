//github.com/callmekurisu
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  //create empty array
  var box = []; 
  var re = /[a-z]/; //reg x for lower case
  
  //push start pushing letter into array if lc
  for (i=1;i<str.length-1;i++){
     
    if(str[i] !== str[i].toLowerCase(re) ){
        box.push("-"); //insert a dash
      }
    
      //if the character is uc change to lc
      box.push(str[i].toLowerCase()); 
      
  }
  box.push(str[str.length-1]);
  box.unshift(str[0].toLowerCase());
  //if the character is lc but next character isn't 
  
  //change array to new string
  var spinal = box.join("");
  //special code for removing left over junk
  var white = spinal.replace(/ /g, "");
  var underscore = white.replace(/_/g, "");
  var finalSpinal = underscore.replace(/ss/g, "s-s");
  return finalSpinal;
  
}

spinalCase('The_Andy_Griffith_Show');
