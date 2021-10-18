import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Home from "./containers/Home";
import Footer from "./components/Footer";
import SignIn from "./containers/Signin";
import SignUp from "./containers/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/explore" component={Home}></Route>
        <Route exact path="/wallet" component={Home}></Route>
        <Route exact path="/signin" component={SignIn}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
