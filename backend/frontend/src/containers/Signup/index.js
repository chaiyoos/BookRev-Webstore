import React, { useState } from "react";
import "./style.css";
import img from "../../assets/read3.png";
import { useHistory } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  let history = useHistory();

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setDetails((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: details.fname + " " + details.lname,
      email: details.email,
      password: details.password,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const res = await axios.post("/user/register", data, headers);
      console.log(res.data);
      if (res.data.dataSent) {
        history.push("/explore");
      }
    } catch (error) {
      console.error(error.message);
    }

    console.log(data);
  };

  return (
    <div className="signup">
      <form className="signup-form" onSubmit={handleSubmit}>
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
