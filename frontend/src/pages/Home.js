import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import API_BASE_URL from "../config/api";
import "../components.css";

const Home = () => {
  const [books, setBooks] = useState([]);

  const loadBooks = async () => {
    const res = await axios.get(`${API_BASE_URL}/api/books`);
    setBooks(res.data);
  };

  const deleteBook = async (id) => {
    await axios.delete(`${API_BASE_URL}/api/books/${id}`);
    loadBooks();
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div className="page-container">
      <div className="container">
        <h1 className="page-title">📚 My Book Library</h1>
        {books.length > 0 ? (
          <div className="book-list">
            {books.map((book) => (
              <BookCard key={book._id} book={book} onDelete={deleteBook} />
            ))}
          </div>
        ) : (
          <p className="empty-state">No books in the library yet. <a href="/add" className="add-link">Add one now!</a></p>
        )}
      </div>
    </div>
  );
};

export default Home;
