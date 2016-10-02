
function replace(str, before, after) {
  var re = new RegExp(before, 'g');
  var upper = /^[A-Z]/;
  if (upper.test(before)) {
    after = after.substr(0, 1).toUpperCase() + after.substr(1);
  }
  return str.replace(re, after);
}
