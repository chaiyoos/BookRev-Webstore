import {React,useState,useEffect} from "react";
import axios from 'axios'
import Card from "../../components/Card";
import FilterButton from "../../components/FilterButton";
import img from "../../assets/filter.png";
import "./style.css";

const Explore = () => {

  const [post,setPost]=useState([])

  useEffect(() => {
    const mounted = async () =>{
      const res=await axios.get("/books")
      const books=res.data
      setPost(books)
    }
    mounted()
  } ,[])

  let renderBooks
  if(post.length>0){
    console.log(post)
     renderBooks=post.map((post)=>{
      return(
      <div className="container explore-cards">
        <div className="container explore-cards">
          <div className="row explore-cards-row">
            <div className="col">
              <Card
                className="explore-card"
                title={post.name}
                author={post.author}
                imgsrc={post.imageLink}
                rating={3}
              />
            </div>
          </div>
        </div>
      </div>
      )
    })
  }
  
 
  // <div className="container explore-cards">
          
  //         <div className="row explore-cards-row">
  //           <div className="col">
  //             <Card
  //               className="explore-card"
  //               title="The richest man in Babylon"
  //               author="George S. Clason"
  //               imgsrc="https://m.media-amazon.com/images/I/51pYZS7IWcL.jpg"
  //               rating={3}
  //             />
  //           </div>
  //         </div>
  // </div>


  return (
    <div className="explore-main">
      <div className="explore-filter">
        <div className="filter-head">
          <img src={img} alt="filter-img" className="filter-img" />
          <h4 className="filter-heading">Filter reads</h4>
        </div>

        <hr />
        <h5 className="filter-cat">By Genre</h5>
        <div className="filter-btn">
          <FilterButton value="Adventure" />
        </div>
        <div className="filter-btn">
          <FilterButton value="Action" />
        </div>
        <div className="filter-btn">
          <FilterButton value="Biography" />
        </div>
        <div className="filter-btn">
          <FilterButton value="History" />
        </div>
        <div className="filter-btn">
          <FilterButton value="Fantasy" />
        </div>
        <div className="filter-btn">
          <FilterButton value="Romance" />
        </div>

        <h5 className="filter-cat">By Rating</h5>
      </div>
      <div className="explore-cont">
        <h1 className="explore-title">
          Rummage through our <span className="lib-cursive">library!</span>
        </h1>

       

          {renderBooks}
          {/* row 1 */}
          {/* <div className="row explore-cards-row">
            <div className="col">
              <Card
                className="explore-card"
                title="The richest man in Babylon"
                author="George S. Clason"
                imgsrc="https://m.media-amazon.com/images/I/51pYZS7IWcL.jpg"
                rating={3}
              />
            </div>
            <div className="col">
              <Card
                className="explore-card"
                title="The richest man in Babylon"
                author="George S. Clason"
                imgsrc="https://m.media-amazon.com/images/I/51pYZS7IWcL.jpg"
                rating={3}
              />
            </div> */}
            {/* <div className="col">
              <Card
                className="explore-card"
                title="The richest man in Babylon"
                author="George S. Clason"
                imgsrc="https://m.media-amazon.com/images/I/51pYZS7IWcL.jpg"
                rating={3}
              />
            </div>
            <div className="col">
              <Card
                className="explore-card"
                title="The richest man in Babylon"
                author="George S. Clason"
                imgsrc="https://m.media-amazon.com/images/I/51pYZS7IWcL.jpg"
                rating={3}
              />
            </div> */}
          {/* </div> */}
          {/* row 2 */}
          {/* <div className="row explore-cards-row">
            <div className="col">
              <Card
                className="explore-card"
                title="The richest man in Babylon"
                author="George S. Clason"
                imgsrc="https://m.media-amazon.com/images/I/51pYZS7IWcL.jpg"
                rating={3}
              />
            </div>
            <div className="col">
              <Card
                className="explore-card"
                title="The richest man in Babylon"
                author="George S. Clason"
                imgsrc="https://m.media-amazon.com/images/I/51pYZS7IWcL.jpg"
                rating={3}
              />
            </div>
            <div className="col">
              <Card
                className="explore-card"
                title="The richest man in Babylon"
                author="George S. Clason"
                imgsrc="https://m.media-amazon.com/images/I/51pYZS7IWcL.jpg"
                rating={3}
              />
            </div>
            <div className="col">
              <Card
                className="explore-card"
                title="The richest man in Babylon"
                author="George S. Clason"
                imgsrc="https://m.media-amazon.com/images/I/51pYZS7IWcL.jpg"
                rating={3}
              />
            </div> */}
          {/* </div> */}
        </div>
      </div>
    
  );
};

export default Explore;
