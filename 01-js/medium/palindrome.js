/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(st) {
  var regex = /^[a-zA-Z]+$/; 
  st = st.toLowerCase()
  var str=""
  for(i in st){
    if(regex.test(st[i])){
      str+=st[i];
    }
  }
  if(str.length<2){
    // console.log("1st part")
    return true;
  }
  var s=0, e = str.length-1;
  while(s<=e){
    if(str[s]!=str[e]){
      // console.log("hola")
      return false;
    }
    s++;
    e--;
  }

  return true;
}
console.log(isPalindrome("race car"))
module.exports = isPalindrome;
