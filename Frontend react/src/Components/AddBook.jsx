import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

export default function AddBook(props) {
  var [book, updateBook] = React.useState({
    name: "",
    author: "",
    date: "",
    desc: "",
    src: ""
  });

  function submitBook() {
    fetch('http://localhost:8080/prototype/books', {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
          'Content-Type': 'application/json'
      }
  }).then(response => {
      if (response.status >= 200 && response.status < 300) {
          return response;
          console.log(response);
          window.location.reload();
        } else {
         console.log('Somthing happened wrong');
        }
  }).catch(err => err)
    updateBook({
      name: "",
      author: "",
      date: "",
      desc: "",
      src: ""
    });
  }

  function handleChange(event) {
    var { name, value } = event.target;
    updateBook(function (prev) {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  return (
    <div className="container">
      <div className="add-container">
        <div className="form-title">Add a Book to the Library</div>
        <div className="form">
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Enter Title"
            value={book.name}
          />
          <input
            onChange={handleChange}
            name="author"
            type="text"
            placeholder="Enter the author Name"
            value={book.author}
          />
          <input
            onChange={handleChange}
            name="date"
            type="text"
            placeholder="Enter Publishing Date"
            value={book.date}
          />
          <input
            onChange={handleChange}
            name="src"
            type="text"
            placeholder="Enter image src"
            value={book.src}
          />
          <textarea
            onChange={handleChange}
            name="desc"
            id=""
            cols="30"
            rows="3"
            placeholder="Enter a description"
            value={book.desc}
          ></textarea>
          <Button variant="contained" onClick={submitBook}>
            <AddIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
