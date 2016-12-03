function f(n) {
  if(Math.floor(n) !== n || n <= 0) {
    return false;
  }

  var sum = 0;
  while(n >= 1) {
    sum += n;
    n--;
  }
  return sum;
}
