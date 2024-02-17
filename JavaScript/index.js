// console.log("Hello world");

// let num1 = 567;
// let num2 = 894;
// let Total = num1 + num2;
// console.log(Total)

// function sayHey() {console.log("Hey");}git status

// sayHey();
 
// function conversation() {sayHey()
//     console.log("How are you?");
//     console.log("Goodbye");

//     }

// conversation()

// function sayHeywithParameter(firstName) {console.log("Hey, "  + firstName);}
// sayHeywithParameter("Daiane")

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

// addTwoNumbers(876, 928);

// // constructor function
// function Book(name) { return "This is, " + name}

// const book1 = new Book("book1")
// const book2 = new Book("book2")

// (function () {
//     console.log("Running Immediately");
//   })();


//   alert("Life is short!")







//   function createListOfFruits(array) {
//     // creates the div element
//     let listContainer = document.createElement("div");
//     listContainer.id = "list-container";
  
//     // create the unordered list
//     const unorderedList = document.createElement("ul");
//     /* this loops through the array and create a new "li" element 
//      with the array item, then append to the ul element */
//     for (let i = 0; i < array.length; i++) {
//       const listItem = document.createElement("li");
//       const textNode = document.createTextNode(array[i]);
  
//       listItem.appendChild(textNode);
//       unorderedList.appendChild(listItem);
//     }
  
//     // attaching ul to the div
//     listContainer.appendChild(unorderedList);
  
//     // attach the div to the body element
//     document.body.appendChild(listContainer);

//     const filteredFruits = array.filter(fruit => fruit.length <=5);
//     console.log(filteredFruits);
    
//   }

//   //const rowDiv = document.createElement(div);
//   rowDiv.ClassName = "row";

//   const imageDiv = document.createElement(div);
//   mageDiv.ClassName = "col-3";

//   const image = document.createElement("img");
//   image.src = books.coverImage;
//   image.alt = books.name;
//   image.className = "img-fluid h-100";

//   imageDiv.appendChild(coverImage);