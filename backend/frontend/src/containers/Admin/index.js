import React,{useState,useEffect} from "react";
import "./style.css";
import { useHistory } from "react-router-dom"
import axios from 'axios'


const Admin = () => {
  const [details, setDetails] = useState({
    name: "",
    author: "",
    genre: "",
    imageLink: "",
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
      name: details.name,
      author: details.author,
      genre: details.genre,
      imageLink: details.imageLink
    };
    
    const config={
      headers:{
        'x-auth-token':localStorage.getItem('token'),
        "Content-Type": "application/json"
      }
    }
    console.log(localStorage.getItem('user'))
    try {
      const res = await axios.post("/books/post", data, config);
      console.log(res.data);
     
        history.push("/explore");
      
    } catch (error) {
      console.error(error.message);
    }

    console.log(data);
  };
  return (
    <div className="admin_forms">
      <form onSubmit={handleSubmit} >
        <div class="form-row">
          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              id="text"
              placeholder="name"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label >Author</label>
            <input
              type="text"
              class="form-control"
              id="author"
              placeholder="author"
              name="author"
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="form-group">
          <label >Genre</label>
          <input
            type="text"
            class="form-control"
            id="genre"
            placeholder="genre"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label >Image link</label>
          <input
            type="text"
            class="form-control"
            id="link"
            placeholder="link"
            name="imageLink"
            onChange={handleChange}
          />
        </div>
        <button type="submit" class="btn btn-primary addbook" onClick={handleChange} >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Admin;
