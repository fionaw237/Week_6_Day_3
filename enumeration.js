// callback example
// setTimeout(function(){
//   console.log("Hello World!");
// }, 5000);

const numbers = [1, 2, 3, 4, 5];

// for (let number of numbers){
//   console.log(`The number is ${number}`);
// }

// numbers.forEach(function(number){
//   console.log(`The number is ${number}`);
// })

//forEach waits till it has the number from array before it executes the callback:

// function forEach(callback){
//  for (let item of array){
//  callback(item)
//   }
// }

// numbers.forEach(function(number, index){
//   console.log(`The number is ${number} at index ${index}`);
// })

// const deleteNumber = function(numberToDelete){
//   let indexToDelete;
//   numbers.forEach(function(number, index){
//     if (number === numberToDelete){
//       indexToDelete = index;
//       //numbers.splice(index, 1); shouldnt change an array you're currently looping over
//     }
//   });
//   numbers.splice(indexToDelete, 1)
// }
//
// deleteNumber(2);
// console.log(numbers);

// const multiplyByTwo = function(){
//   let multipliedArray = [];
//   numbers.forEach(function(number){
//     multipliedArray.push(number * 2);
//   })
//   return multipliedArray
// }

// alternative notation:
const multiplyByTwo = () => {
  let multipliedArray = [];
  numbers.forEach((number) => {
    multipliedArray.push(number * 2);
  })
  return multipliedArray;
}

// using own foreach function
const myForEach = function(array, callback){
  for (let element of array){
    callback(element)
  }
}


//console.log(multiplyByTwo());

// Using the forEach enumeration method, complete the following tasks:
//
// - Write a function called getEvens that returns a new array that only contains the even numbers from the original array.

const getEvens = function(){
  let arrayOfEvens = [];
  myForEach(numbers, (number) => {
    if (number % 2 === 0){
      arrayOfEvens.push(number);
    }
  })
  return arrayOfEvens;
}

console.log(getEvens());

// - Write a function called sumElements that returns the sum total of all the elements of the original array.
// use arrow function when not assigning function to a variable

const sumElements = function(){
  let total = 0;
  numbers.forEach((number) => {
    total += number;
  });
  return total;
}

console.log(sumElements());
