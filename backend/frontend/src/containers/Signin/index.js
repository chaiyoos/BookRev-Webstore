import React, { useState } from "react";
import "./style.css";
import img from "../../assets/read3.png";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Explore from "../Explore";

const Signin = () => {
  const [details, setDetails] = useState({
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
      email: details.email,
      password: details.password,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const res = await axios.post("/user/login", data, headers);
      if (res.data.loggedIn) {
        history.push("/explore");
      }
      console.log(res.data.user)
      // const dataSet={
      //   'user':JSON.stringify(res.data.user),
      //   'token':JSON.stringify(res.data.token)
      // }
      localStorage.setItem('user',res.data.user)
      localStorage.setItem('token',res.data.token)
    } catch (error) {
      console.error(error.message);
    }

    console.log(data, headers);
  };



  return (
    <div className="signin">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h3 className="signin-h">signin</h3>

        <img src={img} alt="signin img" className="form-img" />

        {/* <div className="row names">
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
        </div> */}

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
            <input type="submit" value="Sign In" className="signinbtn" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
