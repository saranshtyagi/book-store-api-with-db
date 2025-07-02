const Book = require('../models/book.js');

const getAllBooks = async (req, res) => {};

const getSingleBookById = async (req, res) => {};

const addNewBook = async (req, res) => {
    try {
        const newBookFormData = req.body; 
        const newlyCreatedBook = await Book.create(newBookFormData);

        if(newBookFormData) {
            res.status(201).json({
                success: true,
                message: 'Book added successfully', 
                data: newlyCreatedBook
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error adding book!', 
            error: error.message
        });
    }
};

const updateBook = async (req, res) => {};

const deleteBook = async (req, res) => {};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
};
