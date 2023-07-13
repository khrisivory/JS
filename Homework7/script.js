//Task1
// let myWindow = window.open('https://www.w3schools.com', '_blank', 'width=300, height=300');
// setTimeout(resizeWindow, 2000);

// function resizeWindow() {
//   myWindow.resizeTo(500, 500);
//   setTimeout(moveWindow, 2000);
// }

// function moveWindow() {
//   myWindow.moveTo(200, 200);
//   setTimeout(closeWindow, 2000);
// }

// function closeWindow() {
//   myWindow.close();
// }

//Task2
//     let button = document.querySelector('button');
//     let paragraph = document.getElementById('text');
    
//     button.addEventListener('click', function() {
//       changeCSS(paragraph);
//     });

//   function changeCSS(element) {
//     element.style.color = 'orange';
//     element.style.fontSize = '20px';
//     element.style.fontFamily = 'Comic Sans MS';
//   }

  //Task3
    // const button1 = document.getElementById('button1');
    // const button2 = document.getElementById('button2');
    // const button3 = document.getElementById('button3');
    // const link = document.getElementById('link');

    // button1.addEventListener('click', function() {
    //   document.body.style.backgroundColor = 'blue';
    // });

    // button2.addEventListener('dblclick', function() {
    //   document.body.style.backgroundColor = 'pink';
    // });

    // button3.addEventListener('mousedown', function() {
    //   document.body.style.backgroundColor = 'brown';
    // });

    // button3.addEventListener('mouseup', function() {
    //   document.body.style.backgroundColor = 'white';
    // });

    // link.addEventListener('mouseover', function() {
    //   document.body.style.backgroundColor = 'yellow';
    // });

    // link.addEventListener('mouseout', function() {
    //   document.body.style.backgroundColor = 'white';
    // });

  //Task4
//   const removeButton = document.getElementById("removeButton");
//   removeButton.addEventListener("click", removeSelectedOption);

//     function removeSelectedOption() {
//       let select = document.getElementById("mySelect");
//       let selectedOptionIndex = select.selectedIndex;
//       if (selectedOptionIndex !== -1) {
//         select.remove(selectedOptionIndex);
//       }
//     }

//Task5
// const button = document.getElementById("myButton");
// const message = document.getElementById("message");

// const messages = [];

// button.addEventListener("click", function() {
// messages.push("I was pressed!");
// updateMessage();
// });

// button.addEventListener("mouseover", function() {
// messages.push("Mouse on me!");
// updateMessage();
// });

// button.addEventListener("mouseout", function() {
// messages.push("Mouse is not on me!");
// updateMessage();
// });

// function updateMessage() {
// message.textContent = messages.join(" | ");
// }

//Task6
function updateDimensions() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dimensionsText = "Window dimensions: " + width + "px x " + height + "px";
    document.getElementById("dimensions").textContent = dimensionsText;
  }

  window.addEventListener("resize", updateDimensions);
