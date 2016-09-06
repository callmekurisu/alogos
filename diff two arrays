function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  
  if (arr1.length === 0) {
    return arr2;
  }
  
  for (i=0;i<arr1.length;i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]); //if element of array 1 not in 2 put in new array
    }
  }
  
  for (j=0;j<arr2.length;j++) {
    if (arr1.indexOf(arr2[j]) === -1) {
      newArr.push(arr2[j]); //if element of array 2 not in 1 put in new array
    }
  }
  
 return newArr;
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
