import React from "react";
import "./style.css";

const BookRevButton = (props) => {
  return <input type="submit" value={props.value} className="bookrevbtn" />;
};

export default BookRevButton;
