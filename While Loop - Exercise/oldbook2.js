function oldBooks(input) {
  let index = 0;
  let bookSearched = input[index]; 
  index++;

  let currentBook = input[index];
  index++;

  let booksChecked = 0;

  while (currentBook !== "No More Books") {
    if (currentBook === bookSearched) {
      console.log(`You checked ${booksChecked} books and found it.`);
      continue;
    }

    booksChecked++;

    currentBook = input[index];
    index++;
  }

  console.log("The book you search is not here!");
  console.log(`You checked ${booksChecked} books.`);
}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
