import React from "react";
import Nav from "./Navbar";
import PageSelect from "./PageSelect";

export default function Header(props) {
  return (
    <div>
      <Nav />
      <PageSelect
        selectPage1={props.selectPage1}
        selectPage2={props.selectPage2}
      />
    </div>
  );
}
