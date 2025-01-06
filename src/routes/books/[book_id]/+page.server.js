import db from "$lib/db.js";

export async function load({ params }) {
  return {
    book: await db.getBook(params.book_id), // Fetch a single book by ID
  };
}

export const actions = {
  update: async ({ request }) => {
    const data = await request.formData();

    let book = {
      _id: data.get("_id"), // Include the ID to update the correct record
      
      "book title": data.get("book title"),
      rating: parseFloat(data.get("rating")), // Ensure it's a float
      author: data.get("author"),
      "year of publication": parseInt(data.get("year of publication")), // Ensure it's an integer
      genre: data.get("genre"),
      url: data.get("url"),
    };

    await db.updateBook(book);
    return { success: true };
  },
};
