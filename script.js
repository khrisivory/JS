//Task1
function propsCount(currentObject) {
    let count = 0;
    for (let prop in currentObject) {
      if (currentObject.hasOwnProperty(prop)) {
        count++;
      }
    }
    return count;
  }
  let book = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Romance"
  };
  console.log(propsCount(book));  // 4

//Task2
function showProps(obj) {
    let properties = [];
    let values = [];
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        properties.push(prop);
        values.push(obj[prop]);
      }
    }
    console.log("Properties:", properties);
    console.log("Values:", values);
  }  
  let person = {
    name: "John Doe",
    age: 30,
    occupation: "Engineer",
    country: "USA",
    hobbies: ["reading", "traveling"]
  };
  showProps(person);

//Task3
class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  
    showFullName() {
      console.log(`${this.surname} ${this.name}`);
    }
  }
  
  class Student extends Person {
    constructor(name, surname, year) {
      super(name, surname);
      this.year = year;
    }
  
    showFullName(middleName) {
      console.log(`${this.surname} ${this.name} ${middleName}`);
    }
  
    showCourse() {
      const currentYear = new Date().getFullYear();
      const course = currentYear - this.year + 1;
      return Math.min(Math.max(course, 1), 6);
    }
  }
  
  const stud1 = new Student("Petro", "Petrenko", 2015);
  
  stud1.showFullName("Petrovych"); // Petrenko Petro Petrovych
  
  console.log("Current course: " + stud1.showCourse()); // Current course: 6
  
//Task4
class Worker {
    constructor(fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays;
      this._experience = 1.2;
    }
  
    showSalary() {
      const salary = this.dayRate * this.workingDays;
      console.log(`${this.fullName} salary: ${salary}`);
    }
  
    showSalaryWithExperience() {
      const salary = this.dayRate * this.workingDays * this._experience;
      console.log(`${this.fullName} salary: ${salary}`);
    }
  
    get showExp() {
      return this._experience;
    }
  
    set setExp(value) {
      this._experience = value;
    }
  
    static sortWorkersBySalary(workers) {
      workers.sort((a, b) => {
        const salaryA = a.dayRate * a.workingDays * a._experience;
        const salaryB = b.dayRate * b.workingDays * b._experience;
        return salaryA - salaryB;
      });
  
      console.log("Sorted salary:");
      workers.forEach(worker => {
        const salary = worker.dayRate * worker.workingDays * worker._experience;
        console.log(`${worker.fullName}: ${salary}`);
      });
    }
  }
  
  // Приклад використання
  let worker1 = new Worker("John Johnson", 20, 23);
  console.log(worker1.fullName);
  worker1.showSalary();
  console.log("New experience: " + worker1.showExp);
  worker1.showSalaryWithExperience();
  worker1.setExp = 1.5;
  console.log("New experience: " + worker1.showExp);
  worker1.showSalaryWithExperience();
  
  let worker2 = new Worker("Tom Tomson", 48, 22);
  Worker.sortWorkersBySalary([worker1, worker2]);
  
//Task5
class GeometricFigure {
    getArea() {
      return 0;
    }
  
    toString() {
      return Object.getPrototypeOf(this).constructor.name;
    }
  }
  
  class Triangle extends GeometricFigure {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    getArea() {
      return 0.5 * this.base * this.height;
    }
  }
  
  class Square extends GeometricFigure {
    constructor(side) {
      super();
      this.side = side;
    }
  
    getArea() {
      return this.side * this.side;
    }
  }
  
  class Circle extends GeometricFigure {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  function handleFigures(figures) {
    const totalArea = figures.reduce((sum, figure) => {
      console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
      return sum + figure.getArea();
    }, 0);
  
    return totalArea;
  }
  
  const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
  console.log(handleFigures(figures));
  