const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Fiction',
    rating: 4.2,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    image: './books-images/the-great-gatsby.jpg'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    rating: 4.5,
    description:
      'Set in the American South, this novel tackles issues of racism and injustice through the eyes of young Scout Finch.',
    image: './books-images/to-kill-a-mockingbird.jpg'
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Science Fiction',
    rating: 4.4,
    description:
      'A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.',
    image: './books-images/1984.jpg'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.',
    image: './books-images/pride-and-prejudice.jpg'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'Fiction',
    rating: 4,
    description:
      'Narrated by the teenage Holden Caulfield, the novel explores themes of alienation and the search for authenticity.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy',
    rating: 4.6,
    description:
      'A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.',
    image: './books-images/the-hobbit.jpg'
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy',
    rating: 4.7,
    description:
      'The first book in the beloved Harry Potter series, it introduces readers to the magical world of Hogwarts and the young wizard Harry Potter.',
    image: './books-images/harry-potter-and-the-sorcerer.jpg'
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    year: 1851,
    genre: 'Adventure',
    rating: 4.1,
    description:
      'An epic tale of obsession, revenge, and the relentless pursuit of the great white whale, Moby Dick.',
    image: './books-images/moby-dick.jpg'
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasy',
    rating: 4.55,
    description:
      'The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.',
    image: './books-images/the-lord-of-the-rings.jpg'
  },
  {
    title: 'The Shining',
    author: 'Stephen King',
    year: 1977,
    genre: 'Horror',
    rating: 4.3,
    description:
      "A psychological horror novel that tells the story of the Torrance family's terrifying experiences at the haunted Overlook Hotel.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    author: 'C.S. Lewis',
    year: 1950,
    genre: 'Fantasy',
    rating: 4.15,
    description:
      'The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.',
    image: './books-images/the-chronicles-of-narnia.jpg'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    year: 2003,
    genre: 'Mystery',
    rating: 3.8,
    description:
      'A gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels the secrets of the Da Vinci Code.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    year: 2008,
    genre: 'Science Fiction',
    rating: 4.3,
    description:
      "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    year: 2005,
    genre: 'Mystery',
    rating: 4.1,
    description:
      'A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Road',
    author: 'Cormac McCarthy',
    year: 2006,
    genre: 'Dystopian',
    rating: 4,
    description:
      "Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
    image: './books-images/unknown.jpg'
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    year: 1979,
    genre: 'Science Fiction',
    rating: 4.35,
    description:
      "A comedic science fiction series that follows the misadventures of Arthur Dent after Earth's destruction.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Giver',
    author: 'Lois Lowry',
    year: 1993,
    genre: 'Dystopian',
    rating: 4.12,
    description:
      'A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.',
    image: './books-images/unknown.jpg'
  }
]

// Gets references to the HTML elements so I can update them dynamically
// The getElementById() method returns an element with a specified value.
const bookList = document.getElementById("book-list");
const sortDropdown = document.getElementById("sort");
const genreMenu = document.getElementById("genre-menu");

function displayBooks(books) {
  bookList.innerHTML = ""; // Clears the book list
  books.forEach(book => {
    const bookCard = document.createElement("div");  // Creates a book card inserts image, title, author, year, rating, and genre
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Year:</strong> ${book.year}</p>
            <p><strong>Rating:</strong> ${book.rating}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
        `;
    bookList.appendChild(bookCard);
  });
}

// The sortBooks function takes a criteria (year, rating, or genre) and an order (asc or desc)
// The sort() method sorts the elements of an array in place and returns the sorted array.
function sortBooks(criteria, order = "asc", booksArray = books) {
  return booksArray.slice().sort((a, b) => {
    if (criteria === "genre") {
      return order === "asc"
        ? a.genre.localeCompare(b.genre) // localeCompare() handles alphabetical sorting for genres
        : b.genre.localeCompare(a.genre);
    } else {
      return order === "asc" ? a[criteria] - b[criteria] : b[criteria] - a[criteria];
    }
  });
}

// Function to filter books by genre 
// Returns all books if "All" is selected
function filterBooksByGenre(genre) {
  return genre === "all" ? books : books.filter(book => book.genre.toLowerCase() === genre.toLowerCase());
}

// Function to create genre buttons dynamically
function createGenreMenu() {
  const genres = ["All", ...new Set(books.map(book => book.genre))];

  genreMenu.innerHTML = "";
  genres.forEach(genre => {
    const btn = document.createElement("button");
    btn.classList.add("genre-btn");
    btn.textContent = genre;
    btn.setAttribute("data-genre", genre.toLowerCase());
    btn.addEventListener("click", () => {
      document.querySelectorAll(".genre-btn").forEach(b => b.classList.remove("active")); // Highlights the selected genre
      btn.classList.add("active");
      updateBooks(genre.toLowerCase());
    });
    genreMenu.appendChild(btn);
  });

  // Set "All" as default selected
  document.querySelector(".genre-btn").classList.add("active");
}

// Update books when sorting or filtering
// Combines sorting, filtering, and searching
function updateBooks(selectedGenre = "all") {
  const [criteria, order] = sortDropdown.value.split("-");
  const filteredBooks = filterBooksByGenre(selectedGenre);
  const sortedBooks = sortBooks(criteria, order, filteredBooks);
  displayBooks(sortedBooks);
}

// Event listener for sorting
// Updates books when the user changes the sorting option or types in the search bar
sortDropdown.addEventListener("change", () => updateBooks(document.querySelector(".genre-btn.active").getAttribute("data-genre")));

// Initialize genre menu and display books
createGenreMenu();
displayBooks(sortBooks("year", "desc"));

const searchBar = document.getElementById("search-bar");
// Filters books based on search input
// Matches against title, author, and description
function searchBooks(query, booksArray) {
  return booksArray.filter(book =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query) ||
    book.description.toLowerCase().includes(query)
  );
}

// Update books when searching
searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();
  const [criteria, order] = sortDropdown.value.split("-");
  const selectedGenre = document.querySelector(".genre-btn.active").getAttribute("data-genre");

  const filteredBooks = filterBooksByGenre(selectedGenre);
  const searchedBooks = searchBooks(query, filteredBooks);
  const sortedBooks = sortBooks(criteria, order, searchedBooks);

  displayBooks(sortedBooks);
});

