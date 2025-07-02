const Book = require("../models/book.js");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();
    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        message: "All books fetched successfully!",
        data: allBooks,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No books found!",
        error: error.message,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again!",
      error: error.message,
    });
  }
};

const getSingleBookById = async (req, res) => {
  try {
    const bookById = req.params.id;
    const singleBook = await Book.findById(bookById);
    if (singleBook) {
      res.status(200).json({
        success: true,
        message: "Book fetched successfully by id",
        data: singleBook,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No book found for the given id",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again!",
      error: error.message,
    });
  }
};

const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);

    if (newBookFormData) {
      res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: newlyCreatedBook,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding book!",
      error: error.message,
    });
  }
};

const updateBook = async (req, res) => {
  const idOfBookToBeUpdated = req.params.id;
  const dataToBeUpdated = req.body;
  try {
    const updatedData = await Book.findByIdAndUpdate(
      idOfBookToBeUpdated,
      dataToBeUpdated, //simply pass form data, destructuring can be avoided. 
    //   {
    //     title: dataToBeUpdated.title,
    //     author: dataToBeUpdated.author,
    //     year: dataToBeUpdated.year,
    //   },
      { new: true }
    );
    if(!updatedData) {
        res.staus(404).json({
            success: false, 
            message: 'No book with given id found to be updated'
        });
    }
    res.status(200).json({
        success: true, 
        message: 'Book details updated successfully', 
        data: updatedData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again!",
      error: error.message,
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const bookIdToDelete = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(bookIdToDelete);
    if (!deletedBook) {
      res.status(404).json({
        success: false,
        message: "No book with given id found to delete!",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: deletedBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again!",
      error: error.message,
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
};
