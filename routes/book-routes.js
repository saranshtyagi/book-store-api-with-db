const express = require('express'); 
const router = express.Router(); 
const {getAllBooks, getSingleBookById, addNewBook, updateBook, deleteBook} = require("../controllers/book-controller.js");


router.get('/all', getAllBooks); 
router.get('/all/:id', getSingleBookById); 
router.post('/add', addNewBook); 
router.put('/update/:id', updateBook); 
router.delete('/delete/:id', deleteBook); 

module.exports = router; 
