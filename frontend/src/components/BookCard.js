import { Link } from "react-router-dom";
import "../components.css";

const BookCard = ({ book, onDelete }) => (
  <div className="book-card">
    <div className="book-header">
      <span className="book-icon">📖</span>
      <h3 className="book-title">{book.title}</h3>
    </div>
    <div className="book-details">
      <p className="book-author">
        <span className="detail-icon">👤</span>
        <strong>Author:</strong> {book.author}
      </p>
      <p className="book-year">
        <span className="detail-icon">📅</span>
        <strong>Published Year:</strong> {book.publishedYear}
      </p>
    </div>
    <div className="btn-group">
      <Link to={`/edit/${book._id}`} className="btn btn-edit">
        <span className="btn-icon">✏️</span> Edit
      </Link>
      <button onClick={() => onDelete(book._id)} className="btn btn-delete">
        <span className="btn-icon">🗑️</span> Delete
      </button>
    </div>
  </div>
);

export default BookCard;
