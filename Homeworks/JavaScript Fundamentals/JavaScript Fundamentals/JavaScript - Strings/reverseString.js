function reversed(input) {
  let string = input[0].split('');
  let i,
    result = '';
  for (i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }

  console.log(result);
}