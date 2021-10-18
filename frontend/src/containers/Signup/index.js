import React from "react";
import "./style.css";
import img from "../../assets/read3.png";

const SignUp = () => {
  return (
    <div className="signup">
      <form className="signup-form">
        <h3 className="signup-h">SignUp</h3>
        <img src={img} alt="signup img" className="form-img" />
        <div className="row ">
          <div className="col">
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="fname" className="fname" />
          </div>
          <div className="col">
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lname" className="lname" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
