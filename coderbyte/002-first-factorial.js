function FirstFactorial(num) {
  var output = 1;
  for (i = 1; i < num + 1; i++) {
    output = output * i;
  }
  num = output;
  return num;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());
