import db from "$lib/db.js";

export async function load({ params }) {
  return {
    review: await db.getBookReview(params.review_id), // Fetch a single review
  };
}

export const actions = {
  update: async ({ request }) => {
    const data = await request.formData();

    let review = {
      _id: data.get("_id"), // Include the ID to update the correct record
      "book name": data.get("book name"),
      "review title": data.get("title"), // Include the title field
      reviewer: data.get("reviewer"),
      "reviewer rating": data.get("reviewer rating"),
      "review description": data.get("reviewer description"),
    };

    await db.updateBookReview(review);
    return { success: true };
  },
};
