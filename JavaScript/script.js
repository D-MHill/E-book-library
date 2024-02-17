const books = [
    {
      name: "Kindred",
      author: "Octavia E. Butler",
      price: 0.99,
      description: "A science fiction novel that explores themes of slavery, time travel, and identity.",
      coverImage: "images/Kindred.jpg" 
    },
    {
      name: "Queenie",
      author: "Candice Carty-Williams",
      price: 1.59,
      description: "A contemporary novel following the life of a young Jamaican British woman navigating love, career, and identity.",
      coverImage: "images/queenie.jpg"
    },
    {
      name: "Take My Hand",
      author: "Daphne Shadows",
      price: 1.99,
      description: "A gripping thriller that follows the journey of a detective solving a series of mysterious crimes.",
      coverImage: "images/takemyhand.jpg"
    }
  ];
  // function displayBooks() {
  //   for (let i = 0; i < books.length; i++) {
  //     const book = books[i];
  //     console.log("Title: " + book.name);
  //     console.log("Author: " + book.author);
  //     console.log("Price: " + book.price);
  //     console.log("Description: " + book.description);
  //     console.log("Cover Image: " + book.coverImage);
      
  //   }
  // }  
  // displayBooks();

  document.addEventListener("DOMContentLoaded", function() {
    const bookListContainer = document.querySelector('.book-lists .container');

    const appendBookToDOM = (book) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('col-4'); // Adjust the class based on your layout

        bookDiv.innerHTML = `
            <div class="card">
                <img src="${book.coverImage}" class="card-img-top" alt="${book.name}">
                <div class="card-body">
                    <h5 class="card-title">${book.name}</h5>
                    <p class="card-text">${book.description}</p>
                    <p class="card-text">Author: ${book.author}</p>
                    <p class="card-text">Price: ${book.price.toFixed(2)}</p>
                    <button class="btn btn-primary">Add</button>
                </div>
            </div>
        `;

        bookListContainer.appendChild(bookDiv);
    };

    books.forEach(appendBookToDOM);
});