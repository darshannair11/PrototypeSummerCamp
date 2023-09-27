import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import AddBook from "./AddBook";
import Book from "./Book";
import ViewBook from "./ViewBook.jsx";

export default function App() {
  var [page1, changePage] = React.useState(true);
  var [booksArray, updateArray] = React.useState([]);

  function addBook(book) {
    console.log(book);
    updateArray(function (prev) {
      return [...prev, book];
    });
  }

  function selectPage1() {
    changePage(true);
  }

  function selectPage2() {
    changePage(false);
  }

  return (
    <div className="App">
      <Header selectPage1={selectPage1} selectPage2={selectPage2} />
      {page1 ? (
        <AddBook addBook={addBook} />
      ) : ( <ViewBook booksArray={booksArray} />
      )}
    </div>
  );
}
