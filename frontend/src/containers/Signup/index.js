import React from "react";
import "./style.css";
import img from "../../assets/read3.png";

const SignUp = () => {
  return (
    <div className="signup">
      <form className="signup-form">
        <h3 className="signup-h">SignUp</h3>

        <img src={img} alt="signup img" className="form-img" />

        <div className="row names">
          <div className="half">
            <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              className="fname"
              placeholder="William"
            />
          </div>
          <div className="half">
            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              className="lname"
              placeholder="Shakespeare"
            />
          </div>
        </div>

        <div className="row others">
          <div className="full">
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              className="email"
              placeholder="bookworm@pages.com"
            />
          </div>
          <div className="full">
            <label for="email">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="password"
              placeholder="shhhhhhhh"
            />
          </div>
        </div>

        <div className="row">
          <div className="fullbtn">
            <input type="submit" value="Sign Up" className="signupbtn" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
