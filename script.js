//Task1 for
let arrayFor = [2, 3, 4, 5];
let productFor = 1;

for (let i = 0; i < arrayFor.length; i++) {
  productFor *= arrayFor[i];
}
console.log("The product of array elements:", productFor);

//Task1 while
let arrayWhile = [2, 3, 4, 5];
let productWhile = 1;
let i = 0;

while (i < arrayWhile.length) {
  productWhile *= arrayWhile[i];
  i++;
}
console.log("The product of array elements:", productWhile);

//Task2
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }

  //Task3
  function randArray(k) {
    let array = [];
    for (let i = 0; i < k; i++) {
      let randomNumber = Math.floor(Math.random() * 500) + 1;
      array.push(randomNumber);
    }
    return array;
  }
  console.log(randArray(5));

  //Task4
  function raiseToDegree(a, b) {
    return Math.pow(a, b);
  }
  
  let number1 = parseInt(prompt("Input number a:"));
  let number2 = parseInt(prompt("Input number b:"));
  
  let result = raiseToDegree(number1, number2);
  console.log("The result of raising the number a to the degree of b:", result);

  //Task5
  function findMin() {
    let min = arguments[0];
  
    for (let i = 1; i < arguments.length; i++) {
      if (arguments[i] < min) {
        min = arguments[i];
      }
    }
    return min;
  }
  
  let minValue = findMin(5, 2, 9, 1, 7);
  console.log("Minimum value:", minValue);

  //Task6
  function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return false;
        }
      }
    }
    return true;
  }
  
  let array1 = [1, 2, 3, 4, 5];
  console.log("Result for array1:", findUnique(array1)); // true
  
  let array2 = [1, 2, 3, 2, 4, 5];
  console.log("Result for array2:", findUnique(array2)); // false

  //Task7
  function getLastElements(arr, count) {
    if (count >= arr.length) {
      return arr;
    }
  
    const startIndex = arr.length - count;
    const lastElements = arr.slice(startIndex);
  
    return lastElements;
  }
  
  let array = [1, 2, 3, 4, 5];
  
  console.log(getLastElements(array, 1));
  console.log(getLastElements(array, 3)); 
  console.log(getLastElements(array, 6)); 

//Task8
function capitalizeFirstLetter(str) {
    let words = str.split(" ");
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      words[i] = capitalizedWord;
    }
    let capitalizedStr = words.join(" ");
    return capitalizedStr;
  }
  let str = "hello world";
  console.log(capitalizeFirstLetter(str));