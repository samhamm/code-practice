// reverse a string
function FirstReverse(str) {
   var output = "";
   for (i = str.length - 1; i > -1; i--) {
     output = output + str[i];
   }
  str = output;
  return str;
}

FirstReverse(readline());
