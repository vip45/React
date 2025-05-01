import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <div>{props.children}</div>

      
    </div>
  );
};

export default Card;
