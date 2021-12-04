import React,{useEffect, useState} from "react";
import "./style.css";
import { FaUserCircle } from "react-icons/fa";
import ReviewCard from "../../components/ReviewCard";
import axios from "axios";

const Profile = (props) => {
  const [user,setUser]=useState({})
  const [comments,setComments]=useState([])
  const config={
    headers:{
      'x-auth-token':localStorage.getItem('token')
    }
  }
 
  useEffect(()=>{
    axios.get("/user/profile",config).then(res=>{
      setUser(res.data.user)
    })
    .catch(error=>{
      console.log(error.message)
    })
  },[])

 
 
  useEffect(()=>{
    axios.get("/user/getReviewByUser",config).then(res=>{
      setComments(res.data.reviews)
    })
    .catch(error=>{
      console.log(error.message)
    })
  },[])

  const displayReviews=()=>{
    comments.map(comment=>{
      if(comment){return(
        <div className="review-cont">
          <h5 className="review-name">Roald Dahl</h5>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
             dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
               fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
               deserunt mollit anim id est laborum.Buy it at:"
          </p>
          <div className="review-likes">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#ff8303"
              class="bi bi-heart"
              viewBox="0 0 16 16"
              className="review-heart-icon"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
            <p className="review-likes-count">24 Likes</p>
          </div>
        </div>
      )}
    })
  }
  console.log(user)

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
            <h4>{user.name}</h4>
            <p>{user.email}</p>
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
              Review Points: <b>{user.reviewPoints}</b>
            </h5>
          </div>
        </div>
        <div className="col-8 profile-reviews-section">
          <h3>Posted Reviews</h3>
          <div className="review-card-profile">
            <ReviewCard  />
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
