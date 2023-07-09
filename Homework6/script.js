//Task1

//let element = document.getElementById("test");
//element.innerHTML = "Last";

// let element = document.querySelector("#test");
// element.textContent = "Last";

// Task2
// let image = document.querySelector('img[src="dog.jpg"]');
// image.setAttribute("src","cat.jpg");
// image.src = "cat.jpg";
// alert(image.outerHTML);

//Task3
// let paragraphs = document.querySelectorAll("div >p ");
// paragraphs.forEach((paragraph, index) => {
//     console.log(`Selector text ${index}: ${paragraph.textContent}`);
//   });

//Task4
// let listItems = document.querySelectorAll("li");
// let result = "";
// result += listItems[0].textContent + ",";
// result += listItems[listItems.length - 1].textContent + ",";
// result += listItems[1].textContent + ",";
// result += listItems[3].textContent + ",";
// result += listItems[2].textContent;
// alert(result);

// let listItems = document.querySelectorAll("#list li");
// const result = [];
// result.push(listItems[0].textContent); 
// result.push(listItems[listItems.length - 1].textContent);
// result.push(listItems[1].textContent); 
// result.push(listItems[3].textContent);
// result.push(listItems[2].textContent);
// alert(result.join(", "));

//Task5
// let header = document.getElementsByTagName("h1")[0];
// header.style.backgroundColor = "LightGreen";

// let paragraphs = document.getElementsByTagName("p");
// paragraphs[0].style.fontWeight = "bold";
// paragraphs[1].style.color = "red";
// paragraphs[2].style.textDecoration = "underline";
// paragraphs[3].style.fontStyle = "italic";

// let ul = document.querySelector("ul");
// let output = "";
// for (let i = 0; i < ul.children.length; i++) {
//     output += ul.children[i].textContent;
//   }
// ul.textContent = output;

// let invisibleitem = document.querySelector("span");
// invisibleitem.style.visibility = "hidden";

//Task6
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let message1 = prompt("Input first message:");
// input1.value = message1;
// let message2 = prompt("Input second message:");
// input2.value = message2;

// let temp = input1.value;
// input1.value = input2.value;
// input2.value = temp;

//Task7
// const body = document.getElementsByTagName("body")[0];
// let main = document.createElement("main");
// main.setAttribute("class", "mainClass check item");
// let div = document.createElement("div");
// div.setAttribute("id", "myDiv");
// let paragraph = document.createElement("p");
// paragraph.textContent = "First paragraph";
// div.appendChild(paragraph);
// main.appendChild(div);
// body.appendChild(main);



