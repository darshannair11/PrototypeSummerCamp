import React from "react";

export default function PageSelect(props) {
  var [buttonColor, handler] = React.useState(true);

  return (
    <div className="page-select">
      <button
        onClick={function () {
          props.selectPage1();
          handler(true);
        }}
        style={buttonColor ? { backgroundColor: "#ff8400" } : {}}
        className="page-button"
      >
        Add Book
      </button>
      <button
        onClick={function () {
          props.selectPage2();
          handler(false);
        }}
        style={buttonColor ? {} : { backgroundColor: "#ff8400" }}
        className="page-button"
      >
        View Books
      </button>
    </div>
  );
}
