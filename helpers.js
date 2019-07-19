function roundTo2point5(number) {
  number10 = number * 10;
  quotient = Math.floor(number10 / 25);
  remainder = number10 % 25;
  if (remainder < 12.5) {
    result = quotient * 25 / 10
  }
  else {
    result = (quotient + 1) * 25 / 10
  }
  return result;
}
