//Task2
console.log("Fedun");

//Task3
let message, year;
message = "Hello World";
year = 2023;
document.write(" Task 3 = Original variables: " +(message), ", " +(year));
message = year;
document.write(" Task 3 = Copied variables: "+(message), ", " +(year));

//Task4
const person = {
name : "Khrystyna",
age : 18,
online : true,
phone : undefined,
fax : null
}

//Task5
let isAdult = confirm("Are you >=18 years old?");
console.log(isAdult);

//Task6
let firstName, lastName, studentGroup, dateOfBirth;
firstName = "Khrystyna";
lastName = "Fedun";
studentGroup = 1;
dateOfBirth = 1998-10-21;
let isMarried = false;
console.log(typeof(studentGroup),typeof(dateOfBirth), typeof(isMarried),typeof(firstName), typeof(lastName));
let city = undefined;
let salary = null;
console.log(typeof(city), typeof(salary));

//Task7
let login = prompt("What is your login name?");
let email = prompt("What is your email?");
let password = prompt("What is your password?");
window.alert("Dear " +(login) + " your email is " +(email) + " your password is " +(password));

//Task8
const secTime = 60;
let computeMinute = Math.floor(secTime*1);
let computeHour = Math.floor(computeMinute*60);
let computeDay = Math.floor(computeHour*24);
let computeMonth = Math.floor(computeDay*30);
document.write(" Task 8 = Seconds in minute " +(computeMinute), " in hour " +(computeHour), " in day " +(computeDay), " in month " +(computeMonth));