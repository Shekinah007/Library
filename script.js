const booksContainer = document.querySelector(".books-container");
const addBookButton = document.querySelector(".submit");
const newBookToggle = document.querySelector(".new-book-toggle");
const addPopUp = document.querySelector(".add-pop-up");
const container = document.querySelector(".books-container");
const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", () => {
  addPopUp.classList.remove("display");
});

newBookToggle.addEventListener("click", () => {
  addPopUp.classList.toggle("display");
});

////////////////////////////////////////////////////////////////
const range = document.getElementById("range");
const rangeValueElement = document.querySelector(".rangeValue");

function getPercentage(total, completed) {
  let percent = 100 * (completed / total);
  console.log("Percentage: ", percent);
  return percent;
}

let rangeValue = range.value;
range.addEventListener("change", () => {
  console.log("sjfj");
  rangeValue = range.value;
  getPercentage(100, 10);
  rangeValueElement.innerText = rangeValue;
  console.log("Range: ", rangeValue);
});

// ///////////////////////////////////////////////////////////\

class Book {
  constructor(title, author, pages, pagesRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.pagesRead = pagesRead;
  }
}

let bookObject = [
  { title: "Revendant", author: "Kings Remy", pages: 230, pagesRead: 111 },
  { title: "Craws Night", author: "Clive Barker", pages: 402, pagesRead: 222 },
];

addBookButton.addEventListener("click", () => {
  render();
});

// container.addEventListener("click", () => {
//   addPopUp.classList.remove("display");
//   alert("Bodu");
// });

document.querySelector(".fullScreen").addEventListener("click", () => {
  document.documentElement.requestFullscreen();
});

function render() {
  booksContainer.innerHTML = "";

  let newTitleElement = document.querySelector("#title");
  let newAuthorElement = document.querySelector("#author");
  let newPagesElement = document.querySelector("#pages");
  let newPagesReadElement = document.querySelector("#pages-read");

  let newTitle = document.querySelector("#title").value;
  let newAuthor = document.querySelector("#author").value;
  let newPages = document.querySelector("#pages").value;
  let newPagesRead = document.querySelector("#pages-read").value;

  let newBook = new Book(newTitle, newAuthor, newPages, newPagesRead);

  console.log("New Entry: ", newBook.title);
  bookObject.push(newBook);
  //   bookObject = [...bookObject, newBook];

  for (let i = 0; i < bookObject.length; i++) {
    const entry = document.createElement("div");
    entry.classList.add("entry");
    entry.dataset.index = i;

    const title = document.createElement("p");
    title.classList.add("title");

    const author = document.createElement("p");
    author.classList.add("author");

    const pages = document.createElement("p");
    pages.classList.add("pages");

    const del = document.createElement("img");
    del.src = "./images/delete-outline.png";
    del.addEventListener("click", (e) => {
      bookObject.splice(i, 1);
      reRender();
    });

    const edit = document.createElement("img");
    edit.src = "./images/book-edit-outline.png";
    edit.addEventListener("click", (e) => {
      addPopUp.classList.add("display");
      newTitleElement.value = bookObject[i].title;
      newAuthorElement.value = bookObject[i].author;
      newPagesElement.value = bookObject[i].pages;
      newPagesReadElement.value = bookObject[i].pagesRead;
    });

    edit.classList.add("edit");

    title.innerText = bookObject[i].title;
    author.innerText = bookObject[i].author;
    pages.innerText = bookObject[i].pagesRead + "/" + bookObject[i].pages;

    const image = document.createElement("img");
    image.classList.add("cover-image");

    const infoBottom = document.createElement("div");
    infoBottom.classList.add("info-bottom");
    infoBottom.append(pages, del, edit);

    const titleAuthor = document.createElement("div");
    titleAuthor.classList.add("title-author");
    titleAuthor.append(title, author);

    let input = document.createElement("input");
    input.type = "checkbox";

    const info = document.createElement("div");
    info.classList.add("info");
    info.append(titleAuthor, infoBottom);

    entry.append(image, info);
    booksContainer.appendChild(entry);
  }

  addPopUp.classList.remove("display");
}

function reRender() {
  booksContainer.innerHTML = "";

  let newTitle = document.querySelector("#title").value;
  let newAuthor = document.querySelector("#author").value;
  let newPages = document.querySelector("#pages").value;
  let newPagesRead = document.querySelector("#pages-read").value;

  console.log(newTitle, "titl");
  console.log(newAuthor, "auth");
  console.log(newPages, "pagees");
  console.log("Pages Read: ", newPagesRead);

  for (let i = 0; i < bookObject.length; i++) {
    const entry = document.createElement("div");
    entry.classList.add("entry");
    entry.dataset.index = i;

    const title = document.createElement("p");
    title.classList.add("title");

    const author = document.createElement("p");
    author.classList.add("author");

    const pages = document.createElement("p");
    pages.classList.add("pages");

    const del = document.createElement("img");
    del.src = "./images/delete-outline.png";

    del.addEventListener("click", (e) => {
      bookObject.splice(i, 1);
      reRender();
    });

    const edit = document.createElement("img");
    edit.src = "./images/book-edit-outline.png";
    edit.addEventListener("click", (e) => {
      addPopUp.classList.add("display");
      newTitleElement.value = bookObject[i].title;
      newAuthorElement.value = bookObject[i].author;
      newPagesElement.value = bookObject[i].pages;
      newPagesReadElement.value = bookObject[i].pagesRead;
    });

    edit.classList.add("edit");

    title.innerText = bookObject[i].title;
    author.innerText = bookObject[i].author;
    pages.innerText = bookObject[i].pagesRead + "/" + bookObject[i].pages;

    const image = document.createElement("img");
    image.classList.add("cover-image");

    const infoBottom = document.createElement("div");
    infoBottom.classList.add("info-bottom");
    infoBottom.append(pages, del, edit);

    const titleAuthor = document.createElement("div");
    titleAuthor.classList.add("title-author");
    titleAuthor.append(title, author);

    let input = document.createElement("input");
    input.type = "checkbox";

    const info = document.createElement("div");
    info.classList.add("info");
    info.append(titleAuthor, infoBottom);

    entry.append(image, info);
    booksContainer.appendChild(entry);
  }

  addPopUp.classList.remove("display");
}

function edit() {}
