import React from "react";
import "./style.css";

const FilterButton = (props) => {
  return <input type="submit" value={props.value} className="filterbtn" />;
};

export default FilterButton;
