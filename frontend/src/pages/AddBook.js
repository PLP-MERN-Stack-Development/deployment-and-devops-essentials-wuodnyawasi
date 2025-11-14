import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../config/api";
import "../components.css";

const AddBook = () => {
  const [form, setForm] = useState({ title: "", author: "", publishedYear: "" });
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post(`${API_BASE_URL}/api/books`, form);
    navigate("/");
  };

  return (
    <div className="page-container">
      <div className="container">
        <div className="form-page">
          <h2>Add New Book</h2>
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label className="form-label" htmlFor="title">Title</label>
              <input
                id="title"
                className="form-control"
                type="text"
                placeholder="Enter book title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="author">Author</label>
              <input
                id="author"
                className="form-control"
                type="text"
                placeholder="Enter author name"
                value={form.author}
                onChange={(e) => setForm({ ...form, author: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="publishedYear">Published Year</label>
              <input
                id="publishedYear"
                className="form-control"
                type="number"
                placeholder="Enter published year"
                value={form.publishedYear}
                onChange={(e) => setForm({ ...form, publishedYear: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn btn-success">Add Book</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
