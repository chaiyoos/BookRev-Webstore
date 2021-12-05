import React from "react";
import BookRevButton from "../Button";
import "./style.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div
      className="card"
      key={props.key}
      bookID={props.bookID}
      // className="explore-card"
      title={props.title}
      author={props.author}
      imgsrc={props.imageLink}
      rating={3}
    >
      <div className="card-info">
        <h6 className="card-title">{props.title}</h6>
        <p className="card-author">
          <i>by {props.author}</i>
        </p>
        <div className="card-rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#ffb900"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            ))}
        </div>
      </div>
      <div className="card-img-cont">
        <img src={props.imgsrc} alt="card-img" className="card-img" />
      </div>
      {/* <div className="card-btn"> */}
      <Link exact to={`/books/${props.bookID}`} className="card-btn">
        {/* <div> */}
        <BookRevButton value="View" />
        {/* </div> */}
      </Link>
      {/* </div> */}
    </div>
  );
};

export default Card;
