// function to get All Books Data
export async function getAllBooks(req, res) {
  try {
    res.json({
      message: "Getting All Books Data",
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
    res.json({
      message: `getting a particular Book Data ${id}`,
    });
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
    res.json({
      message: "New Book Added into Database",
      data: body,
    });
  } catch (error) {
    res.json({
      message: "Error While Adding Book to database",
      error,
    });
  }
}

// function to update data into database
export async function updateBook(req, res) {
  try {
    const id = req.params.id;
    const body = req.body;
    res.json({
      message: `Update book data into Database id: ${id}`,
    });
  } catch (error) {
    res.json({
      message: "Error While updating Data into Database",
      error,
    });
  }
}

// function to delete data into database
export async function deleteBook(req, res) {
  try {
    const id = req.params.id;
    res.json({
      message: `Delete Book data into Database ${id}`,
    });
  } catch (error) {
    res.json({
      message: "Error While Deleting Data into Database",
      error,
    });
  }
}
