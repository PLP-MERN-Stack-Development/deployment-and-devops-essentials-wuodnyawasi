import express from 'express';
import winston from 'winston';
import Book from '../models/book.js';

const router = express.Router();

// Configure logger for routes
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'routes.log' })
  ]
});

// Middleware to log route access
const logRoute = (operation) => (req, res, next) => {
  logger.info(`Book ${operation}`, {
    method: req.method,
    path: req.path,
    params: req.params,
    body: req.body
  });
  next();
};

// CREATE
router.post('/', logRoute('CREATE'), async (req, res, next) => {
  try {
    const book = new Book(req.body);
    await book.save();
    logger.info('Book created successfully', { bookId: book._id });
    res.json(book);
  } catch (error) {
    logger.error('Error creating book', { error: error.message });
    next(error);
  }
});

// READ ALL
router.get('/', logRoute('READ ALL'), async (req, res, next) => {
  try {
    const books = await Book.find();
    logger.info('Books retrieved successfully', { count: books.length });
    res.json(books);
  } catch (error) {
    logger.error('Error retrieving books', { error: error.message });
    next(error);
  }
});

// READ ONE
router.get('/:id', logRoute('READ ONE'), async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      logger.warn('Book not found', { bookId: req.params.id });
      return res.status(404).json({ message: 'Book not found' });
    }
    logger.info('Book retrieved successfully', { bookId: req.params.id });
    res.json(book);
  } catch (error) {
    logger.error('Error retrieving book', { error: error.message, bookId: req.params.id });
    next(error);
  }
});

// UPDATE
router.put('/:id', logRoute('UPDATE'), async (req, res, next) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) {
      logger.warn('Book not found for update', { bookId: req.params.id });
      return res.status(404).json({ message: 'Book not found' });
    }
    logger.info('Book updated successfully', { bookId: req.params.id });
    res.json(book);
  } catch (error) {
    logger.error('Error updating book', { error: error.message, bookId: req.params.id });
    next(error);
  }
});

// DELETE
router.delete('/:id', logRoute('DELETE'), async (req, res, next) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      logger.warn('Book not found for deletion', { bookId: req.params.id });
      return res.status(404).json({ message: 'Book not found' });
    }
    logger.info('Book deleted successfully', { bookId: req.params.id });
    res.json({ message: 'Book deleted' });
  } catch (error) {
    logger.error('Error deleting book', { error: error.message, bookId: req.params.id });
    next(error);
  }
});

export default router;
