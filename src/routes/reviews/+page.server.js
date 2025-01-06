import db from "$lib/db";

export async function load() {
  return {
    reviews: await db.getBookReviews()
  };
}

export const actions = {
    delete: async ( {request} ) => {
        const data = await request.formData();
        let id = data.get("_id");
        db.deleteBookReview(data.get("_id"));
    }
}