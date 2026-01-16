import express from "express";

let router = express.Router();

// desc:-> get all books Data
// endpoint is: http:localhost:1000/books/
router.get("/", (req, res) => {
  res.json({
    message: "Get All Books Data",
  });
});

export default router;
