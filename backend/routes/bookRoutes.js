import express from "express";
import {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} from "../controllers/bookControllers.js";

let router = express.Router();

// desc:-> get all books Data
// endpoint is: http:localhost:5600/books/
router.get("/", getAllBooks);

// desc:-> get particular books Data using id
// endpoint is: http:localhost:5600/books/[id]
router.get("/:id", getBookById);

// desc:-> To create data in database
// endpoint is: http:localhost:5600/books/add
router.post("/add", addBook);

// desc:-> To update data into database using id
// endpoint is: http:localhost:5600/books/update/[id]
router.put("/update/:id", updateBook);

// desc:-> To update data into database using id
// endpoint is: http:localhost:5600/books/delete/[id]
router.delete("/delete/:id", deleteBook);

export default router;
