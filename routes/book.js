const Book = require('../models/book');
const router = require('express').Router();

router.post('/addBook', async (req, res) => {
      const newBook = new Book(req.body);
      await newBook.save((err, book)=> {
        if (err) return console.error(err);
          res.status(201).json({message: "Book saved to bookstore collection" });
      });
});

router.get('/getBook', async (req, res) => {
    await Book.find({}).then((books) => {
        res.status(201).json({
            success: true,
            books
        })
    })
});

router.put('/updateBook/:id', async (req, res) => {
    await Book.findByIdAndUpdate(req.params.id, {
        $set:req.body
    }, {
        new:true
    }).then((book) => {
        res.status(201).json({
            success: true,
            message: "Book Updated",
            book
        })
    })
});

router.delete('/deleteBook/:id', async (req, res) => {
     await Book.findByIdAndDelete(req.params.id).then(() => {
        res.status(201).json({
            success: true,
            message: "Book Deleted",
        })
    })
});

module.exports = router;