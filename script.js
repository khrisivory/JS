//Task1
function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
      throw new Error('Parameters must be numeric values.');
    }
  
    if (width <= 0 || height <= 0) {
      throw new Error('Parameters must be positive nembers.');
    }
  
    return width * height;
  }
  
  try {
    const width = parseFloat(prompt('Enter the width of the rectangle:'));
    const height = parseFloat(prompt('Enter the height of the rectangle:'));
  
    const area = calcRectangleArea(width, height);
    console.log('Square of the rectangle:', area);
  } catch (error) {
    console.log('An error appears:', error.message);
  }

  //Task2
  function checkAge() {
    try {
      const ageInput = prompt('Enter your age:');
      if (ageInput === '') {
        throw new Error('The field is empty! Please enter your age.');
      }
  
      const age = parseInt(ageInput);
      if (isNaN(age)) {
        throw new Error('You entered incorrect value. Please enter numeric value.');
      }
  
      if (age < 14) {
        throw new Error('Sorry, you are too young for watching this movie.');
      }
  
      alert('Congrats! You have the access for the film.');
    } catch (error) {
      alert('An error: ' + error.message);
    }
  }
  checkAge();

  //Task3
  class MonthException {
    constructor(message) {
      this.name = 'MonthException';
      this.message = message;
    }
  }
  
  function showMonthName(month) {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    if (month < 1 || month > 12) {
      throw new MonthException('Incorrect month number');
    }
  
    return monthNames[month - 1];
  }
  try {
    console.log(showMonthName(5));  // May
    console.log(showMonthName(14)); // Incorrect month number
  } catch (error) {
    console.log(error.name, error.message);
  }

  //Task4
  function showUser(id) {
    if (id < 0) {
      throw new Error('ID must not be negative: ' + id);
    }
  
    return { id: id };
  }
  
  function showUsers(ids) {
    const validIds = [];
  
    for (let i = 0; i < ids.length; i++) {
      try {
        const user = showUser(ids[i]);
        validIds.push(user);
      } catch (error) {
        console.log('Error:', error.message);
      }
    }
  
    return validIds;
  }
  console.log(showUsers([7, -12, 44, 22]));