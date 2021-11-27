import React from "react";
import "./style.css";

const Admin = () => {
  return (
    <div className="admin_forms">
      <form>
        <div class="form-row">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="text"
              placeholder="name"
            />
          </div>
          <div class="form-group">
            <label for="author">Author</label>
            <input
              type="text"
              class="form-control"
              id="author"
              placeholder="author"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Genre</label>
          <input
            type="text"
            class="form-control"
            id="genre"
            placeholder="genre"
          />
        </div>
        <div class="form-group">
          <label for="inputAddress">Image link</label>
          <input
            type="text"
            class="form-control"
            id="link"
            placeholder="link"
          />
        </div>
        <button type="submit" class="btn btn-primary addbook">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Admin;
