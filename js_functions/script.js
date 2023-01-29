function checkNumberEven(number) {
  if (number % 3 === 0) {
    console.log('noice');
  } else {
    console.log('not noice');
  }
}
let number = prompt('enter a noice number');
checkNumberEven(number);
