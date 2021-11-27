import React from "react";
import "./style.css";
import { FaUserCircle } from "react-icons/fa";
import ReviewCard from "../../components/ReviewCard";
const Profile = () => {
  return (
    <div className="container profile-container">
      <div className="row">
        <div className="col-4">
          <div className="profile_details">
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
              alt="profileimg"
              className="profileimg"
            />
            <h4>William Shakespeare</h4>
            <p>bookworm@bookrev.com</p>
            <div className="profile_counts">
              <p className="profile_count_item">
                <b>25</b> Reviews
              </p>
              <p className="profile_count_item">
                <b>40</b> Followers
              </p>
              <p className="profile_count_item">
                <b>65</b> Following
              </p>
            </div>
            <h5>
              Reviews: <b>12</b>
            </h5>
          </div>
        </div>
        <div className="col-8 profile-reviews-section">
          <h3>Posted Reviews</h3>
          <div className="review-card-profile">
            <ReviewCard />
          </div>
          <div className="review-card-profile">
            <ReviewCard />
          </div>
          <div className="review-card-profile">
            <ReviewCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
