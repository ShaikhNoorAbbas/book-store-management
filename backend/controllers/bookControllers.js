import { Book } from "../models/bookModel.js";
// function to get All Books Data
export async function getAllBooks(req, res) {
  try {
    const dbres = await Book.find();
    return res.json({
      message: "All Books",
      data: dbres,
    });
  } catch (error) {
    res.json({
      message: "error while getting all books Record",
    });
  }
}

//function to get particular book
export async function getBookById(req, res) {
  try {
    const id = req.params.id;
    const dbres = await Book.findById(id);
    if (dbres) {
      return res.json({
        message: `Returning Book Data`,
        data: dbres,
      });
    } else {
      return res.json({
        message: "Book not found",
      });
    }
  } catch (error) {
    res.json({
      message: "Error While getting particular book",
      error,
    });
  }
}

// function to add book into mongoDB
export async function addBook(req, res) {
  try {
    const body = req.body;
    const dbres = await Book.create({
      title: body.title,
      author: body.author,
    });
    return res.json({
      message: "Created Data",
      data: dbres,
    });
  } catch (error) {
    return res.json({
      message: "Error While Adding Book to database",
      error,
    });
  }
}

// Function to update book data in the database
export async function updateBook(req, res) {
  try {
    // 1. Capture the ID from the URL (e.g., /books/update/123)
    const id = req.params.id;

    // 2. Capture the data to update from the request body
    const body = req.body;

    // 3. Attempt to find and update in one step
    // { new: true } -> Important! Returns the UPDATED document, not the original one.
    const dbres = await Book.findByIdAndUpdate(id, body, { new: true });

    // 4. Check if the book actually existed
    if (dbres) {
      // If dbres is not null, the update was successful
      return res.json({
        message: "Data Updated Successfully",
        data: dbres,
      });
    } else {
      // If dbres is null, no book with that ID was found
      return res.json({
        message: "No Data Found in Database with that ID",
      });
    }
  } catch (error) {
    // 5. Catch unexpected errors (like invalid ID format or DB connection issues)
    res.json({
      message: "Error While updating Data into Database",
      error,
    });
  }
}

// Function to delete a specific book from the database
export async function deleteBook(req, res) {
  try {
    // 1. Extract the ID from the URL parameters (e.g., /books/delete/123)
    const id = req.params.id;

    // 2. Perform a "Find and Delete" operation in one database trip.
    // - If the ID exists: Mongoose deletes it and returns the deleted document.
    // - If the ID does NOT exist: Mongoose simply returns 'null' (no error is thrown).
    const dbres = await Book.findByIdAndDelete(id);

    // 3. Validation: Did we actually find something to delete?
    if (dbres) {
      // Success: The document existed and is now removed.
      return res.json({
        message: "Deleted Successfully",
        data: dbres,
      });
    } else {
      // Failure: The ID provided was valid format, but no matching record exists.
      return res.json({
        message: "No Data Found in Database to Delete",
      });
    }
  } catch (error) {
    // 4. Error Handling: Catches invalid ID formats or database connection issues
    res.json({
      message: "Error While Deleting Data into Database",
      error,
    });
  }
}
