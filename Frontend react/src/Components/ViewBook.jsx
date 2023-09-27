import React from "react";
import Book from "./Book";

export default function ViewBook(props) {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [books, setBooks] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:8080/prototype/books")
        .then(res => res.json())
        .then(
            (data) => {
                setIsLoaded(true);
                setBooks(data);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>;
} else if (!isLoaded) {
    return <div>Loading...</div>;
} else {
  return (
    <div className="view-container">
      {books?.map(function (book,index) {
        return (
          <Book
            key={index}
            src={book.src}
            title={book.name}
            author={book.author}
            date={book.date}
            desc={book.desc}
          />
        );
      })}
    </div>
  );
    }
}
