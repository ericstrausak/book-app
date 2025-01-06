import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("PT"); // Select database

//////////////////////////////////////////
// Book Reviews Collection
//////////////////////////////////////////

// Get all book reviews
async function getBookReviews() {
  let reviews = [];
  try {
    const collection = db.collection("Book Reviews");

    // Specify a query/filter if needed
    const query = {};

    // Get all objects that match the query
    reviews = await collection.find(query).toArray();
    reviews.forEach((review) => {
      review._id = review._id.toString(); // Convert ObjectId to String
    });
  } catch (error) {
    console.log("Error fetching book reviews:", error.message);
  }
  return reviews;
}

// Get a single book review by ID
async function getBookReview(id) {
  let review = null;
  try {
    const collection = db.collection("Book Reviews");
    const query = { _id: new ObjectId(id) };
    review = await collection.findOne(query);

    if (!review) {
      console.log("No review found with id " + id);
    } else {
      review._id = review._id.toString();
    }
  } catch (error) {
    console.log("Error fetching book review:", error.message);
  }
  return review;
}

// Create a new book review
async function createBookReview(review) {
  try {
    const collection = db.collection("Book Reviews");
    const result = await collection.insertOne(review);
    return result.insertedId.toString();
  } catch (error) {
    console.log("Error creating book review:", error.message);
  }
  return null;
}

// Update an existing book review
async function updateBookReview(review) {
  try {
    let id = review._id;
    delete review._id; // Remove _id from object, as it cannot be updated
    const collection = db.collection("Book Reviews");
    const query = { _id: new ObjectId(id) };
    const result = await collection.updateOne(query, { $set: review });

    if (result.matchedCount === 0) {
      console.log("No book review found with id " + id);
    } else {
      console.log("Book review with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    console.log("Error updating book review:", error.message);
  }
  return null;
}

// Delete a book review by ID
async function deleteBookReview(id) {
  try {
    const collection = db.collection("Book Reviews");
    const query = { _id: new ObjectId(id) };
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No book review found with id " + id);
    } else {
      console.log("Book review with id " + id + " has been deleted.");
      return id;
    }
  } catch (error) {
    console.log("Error deleting book review:", error.message);
  }
  return null;
}

//////////////////////////////////////////
// Books Collection
//////////////////////////////////////////

// Get all books
async function getBooks() {
  let books = [];
  try {
    const collection = db.collection("Books");

    // Specify a query/filter if needed
    const query = {};

    // Get all objects that match the query
    books = await collection.find(query).toArray();
    books.forEach((book) => {
      book._id = book._id.toString(); // Convert ObjectId to String
    });
  } catch (error) {
    console.log("Error fetching books:", error.message);
  }
  return books;
}

// Get a single book by ID
async function getBook(id) {
  let book = null;
  try {
    const collection = db.collection("Books");
    const query = { _id: new ObjectId(id) };
    book = await collection.findOne(query);

    if (!book) {
      console.log("No book found with id " + id);
    } else {
      book._id = book._id.toString();
    }
  } catch (error) {
    console.log("Error fetching book:", error.message);
  }
  return book;
}

// Create a new book
async function createBook(book) {
  try {
    const collection = db.collection("Books");
    const result = await collection.insertOne(book);
    return result.insertedId.toString();
  } catch (error) {
    console.log("Error creating book:", error.message);
  }
  return null;
}

// Update an existing book
async function updateBook(book) {
  try {
    let id = book._id;
    delete book._id; // Remove _id from object, as it cannot be updated
    const collection = db.collection("Books");
    const query = { _id: new ObjectId(id) };
    const result = await collection.updateOne(query, { $set: book });

    if (result.matchedCount === 0) {
      console.log("No book found with id " + id);
    } else {
      console.log("Book with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    console.log("Error updating book:", error.message);
  }
  return null;
}

// Delete a book by ID
async function deleteBook(id) {
  try {
    const collection = db.collection("Books");
    const query = { _id: new ObjectId(id) };
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No book found with id " + id);
    } else {
      console.log("Book with id " + id + " has been deleted.");
      return id;
    }
  } catch (error) {
    console.log("Error deleting book:", error.message);
  }
  return null;
}

async function getBookByName(name) {
    let book = null;
    try {
        const collection = db.collection("Books");
        const query = { "book title": name }; // Match by book title
        book = await collection.findOne(query);

        if (!book) {
            console.log("No book found with name " + name);
        } else {
            book._id = book._id.toString();
        }
    } catch (error) {
        console.error("Error fetching book by name:", error.message);
    }
    return book;
}


//////////////////////////////////////////
// Export Functions
//////////////////////////////////////////

export default {
  // Book Reviews
  getBookReviews,
  getBookReview,
  createBookReview,
  updateBookReview,
  deleteBookReview,

  // Books
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
