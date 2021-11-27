import {useState,React} from "react";
import axios from 'axios'
import Hero from "../../components/Hero";
import Info from "../../components/Info";
import "./style.css";


const Home = (props) => {
  
  // async function mounted(){
  //   const res=await axios.get("/books")
  //   const books=res.data
  //   console.log(books)
  // }
  // mounted()
  return (
    <div>
      <Hero />
      <Info />
    </div>
  );
};

export default Home;
