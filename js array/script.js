//   1. Declare an *empty* array;
//   const names = [''];

//   2. Declare an array with more than 5 number of elements
//  var array69 = [1, 2, 3, 4, 5];
//  console.log(array69);

//   3. Find the length of your array
//   const consoles = ["PS4", "Xbox", "Nintendo Switch", "Nintendo Switch "];
//   let length = consoles.length;
//   console.log(length);

//  4. Get the first item, the middle item and the last item of the array
// const consoles = ['PS4', 'Xbox', 'Nintendo Switch'];
// const first = arr[0];
// console.log(first); //
//
// const middle = arr[1];
// console.log(middle); //
//
// const last = arr[arr.length - 1];
// console.log(last);

//  5. Declare an array called *mixedDataTypes*, put different data types in the array and find the length of the array. The array size should be greater than 5
// var mixedDataTypes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'James'];
// console.log(mixedDataTypes.length);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// console.log(itCompanies);

// 7. Print the array using *console.log()*
// function printArray() {
//  var consoles = ['PS4', 'Xbox', 'Nintendo Switch'];
// }
// console.log();

// 8. Print the number of companies in the array
// var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM'];
// var all = itCompanies.length;
// console.log(itCompanies.length);

// 10. Print out each company
//var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM']
// console.log(itCompanies);

// 11. Change each company name to uppercase one by one and print them out
// const word = "facebook";
// const firstLetter = word.charAt(0);
// const cap = firstLetter.toUpperCase();
// const restofletters = word.slice(1);
// const capitalizedWord = cap + restofletters;
// console.log(capitalizedWord);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is *not found*

// function companyExists(itCompanies) {
//   if (itCompanies.includes('Microsoft')) {
//     return 'found';
//   } else {
//     return 'not found';
//   }
// }

// 14 search double o in itCompanies without using filter methods

// function checkDoubleO(itCompanies) {
//   let newArr = []
//   for (let i = 0; i < itCompanies.length; i++) {
//     let count = 0;
//     for (let j = 0; j < itCompanies.length; j++) {
//       if (itCompanies[i][j] === "o") {
//         count++;
//       }
//     }
//     if (count > 1) {
//       newArr.push(itCompanies[i]);
//     }
//   }
//   return newArr;
// }
//
// console.log(checkDoubleO(itCompanies));));

// 15 sort order arrays in js
// var arr = [1, 4, 3, 41, 5, 6, 7, 8, 69];
// function sortt(arr) {
//   return arr.sort();
// }
//
// console.log(sortt(arr));

// 16
