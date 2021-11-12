import React from "react";
import "./style.css";

import amz from "../../assets/amazon.png";
import flp from "../../assets/flipkart.png";
import tfb from "../../assets/thriftbooks.png";
import ReviewCard from "../../components/ReviewCard";

const Book = () => {
  return (
    <div className="book-page-cont container">
      <div className="row justify-content-between">
        <div className="col-md-5 img-cont">
          <img
            src="https://m.media-amazon.com/images/I/51pYZS7IWcL.jpg"
            alt="book-img"
            className="book-page-img"
          />
        </div>
        <div className="col-md-7 book-info">
          <h2 className="book-title">The richest man in Babylon</h2>
          <h5>
            <i>by George S. Clason</i>
          </h5>
          <div className="book-rating">
            <p className="rated-text">Rated:</p>
            {Array(4)
              .fill()
              .map((_, i) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#ffb900"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              ))}
          </div>
          <div className="book-genre">
            <p>Fiction</p>
          </div>
          <div className="book-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="book-buy-text">
            <p>Buy it at:</p>
          </div>
          <div className="buying-buttons">
            <button className="buy-btn buy-amazon">
              <img src={amz} alt="amz-logo" className="amz-logo" />
              Amazon
            </button>
            <button className="buy-btn buy-flipkart">
              <img src={flp} alt="flp-logo" className="flp-logo" />
              Flipkart
            </button>
            <button className="buy-btn buy-tfb">
              <img src={tfb} alt="tfb-logo" className="tfb-logo" />
              Thriftbooks
            </button>
          </div>
        </div>
      </div>
      <div className="row book-review-section">
        <h4 className="reviews-title">Reviews</h4>
        <hr className="reviews-hr" />
        <div className="review-card-cont">
          <ReviewCard />
        </div>
        <div className="review-card-cont">
          <ReviewCard />
        </div>
        <div className="review-card-cont">
          <ReviewCard />
        </div>
      </div>
    </div>
  );
};

export default Book;
