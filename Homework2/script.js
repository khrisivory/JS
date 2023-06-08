//Task1
let x = 1;
let y = 2;

let res1 = String(x)+String(y);
console.log(res1); //"12"
console.log(typeof res1); //"string"

let res2 = Boolean(x)+String(y);
console.log(res2); //true
console.log(typeof res2); //"string"

let res3 = Boolean(x+y);
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 =  Math.sqrt(-x * y)
console.log(res4); // NaN
console.log(typeof res4); // "number"

//Task2
let userInput = prompt("Завдання 2 : Введіть число:");
let number = parseFloat(userInput);

let isEvenPositive = (number % 2 === 0 && number > 0) ? "Число є парним додатнім." : "Число не є парним додатнім.";
let isMultipleOf7 = (number % 7 === 0) ? "Число є кратним 7." : "Число не є кратним 7.";

console.log(isEvenPositive);
console.log(isMultipleOf7);

//Task3
let array = [];

array[0] = 10; 
array[1] = "Привіт"; 
array[2] = true; 
array[3] = null;
console.log("Кількість елементів у масиві:", array.length); 

let userValue = prompt("Введіть будь-яке значення:"); 
array[4] = userValue; 
console.log("П'ятий елемент масиву:", array[4]);

array.shift(); 
console.log("Масив після видалення першого елементу:", array); 

//Task4
let cities = ["Rome", "Lviv", "Warsaw"];
let result = cities.join("*");
console.log(result);

//Task5
let isAdult = prompt("Ви досягли повнолітнього віку? (Так/Ні)");

if (isAdult === "Так") {
  console.log("Ви досягли повнолітнього віку.");
} else {
  console.log("Ви ще надто молоді.");
}

//Task6
let sideA = parseFloat(prompt("Введіть довжину сторони A:"));
let sideB = parseFloat(prompt("Введіть довжину сторони B:"));
let sideC = parseFloat(prompt("Введіть довжину сторони C:"));

if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
  console.log("Incorrect data");
} else {
  let semiperimeter = (sideA + sideB + sideC) / 2;
  let area = Math.sqrt(semiperimeter * (semiperimeter - sideA) * (semiperimeter - sideB) * (semiperimeter - sideC));
  
  console.log("Площа трикутника: " + area.toFixed(3));

  let isRightTriangle = false;
  if (sideA ** 2 + sideB ** 2 === sideC ** 2 || sideA ** 2 + sideC ** 2 === sideB ** 2 || sideB ** 2 + sideC ** 2 === sideA ** 2)
   {
    isRightTriangle = true;
   }
  if (isRightTriangle) {
    console.log("Трикутник є прямокутним.");
  } else {
    console.log("Трикутник не є прямокутним.");
  }
}

//Task7
let currentTime = new Date();
let currentHour = currentTime.getHours();
let greeting;

switch (true) {
  case (currentHour >= 23 || currentHour < 5):
    greeting = "Доброї ночі";
    break;
  case (currentHour >= 5 && currentHour < 11):
    greeting = "Доброго ранку";
    break;
  case (currentHour >= 11 && currentHour < 17):
    greeting = "Доброго дня";
    break;
  default:
    greeting = "Доброго вечора";
    break;
}

console.log(greeting);

