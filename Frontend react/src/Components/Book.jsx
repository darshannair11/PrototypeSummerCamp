import React from "react";
import Card from "react-bootstrap/Card";

function CardExample(props) {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          className="holder-img"
          variant="top"
          src={
            props.src ||
            "https://thumbs.dreamstime.com/b/image-unavailable-icon-simple-illustration-129166551.jpg"
          }
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>Author: {props.author || "Unknown"}</Card.Text>
          <Card.Text>Publishing Date: {props.date || "Unknown"}</Card.Text>
          <Card.Text>
            Description:
            {(props.desc ? props.desc : "Unknown").slice(0, 60) + " ..."}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardExample;
