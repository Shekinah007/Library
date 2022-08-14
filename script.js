const booksContainer = document.querySelector(".books-container");
const addBookButton = document.querySelector(".submit");
const newBookToggle = document.querySelector(".new-book-toggle");
const addPopUp = document.querySelector(".add-pop-up");
const container = document.querySelector(".books-container");

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
  booksContainer.innerHTML = "";

  let newTitle = document.querySelector("#title").value;
  let newAuthor = document.querySelector("#author").value;
  let newPages = document.querySelector("#pages").value;
  let newPagesRead = document.querySelector("#pages-read").value;

  console.log(newTitle, "titl");
  console.log(newAuthor, "auth");
  console.log(newPages, "pagees");
  console.log("Pages Read: ", newPagesRead);

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

    // const readPages = document.createElement("span");
    // readPages.classList.add("total");
    // readPages.innerText = bookObject[i].pages;

    const pages = document.createElement("p");
    pages.classList.add("pages");

    const del = document.createElement("img");
    del.src = "./images/delete-outline.png";

    const edit = document.createElement("img");
    edit.src = "./images/book-edit-outline.png";

    edit.addEventListener("click", () => {
      addPopUp.classList.add("display");
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

    //   finished.innerText = bookObject[i].finished;

    entry.append(image, info);
    booksContainer.appendChild(entry);
  }

  addPopUp.classList.remove("display");
});

container.addEventListener("click", () => {
  addPopUp.classList.remove("display");
});
// for (let i = 0; i <= 1; i++) {
//   let entry = document.createElement("div");
//   entry.classList.add("row");
//   entry.dataset.index = i;

//   let title = document.createElement("p");
//   let author = document.createElement("p");
//   let pages = document.createElement("p");
//   //   let finished = document.createElement("p");

//   title.innerText = bookObject[i].title;
//   author.innerText = bookObject[i].author;
//   pages.innerText = bookObject[i].pages;
//   //   finished.innerText = bookObject[i].finished;

//   entry.append(title, author, pages);
//   document.body.appendChild(entry);
// }

document.querySelector(".fullScreen").addEventListener("click", () => {
  document.documentElement.requestFullscreen();
});
