import db from "$lib/db";

export async function load() {
  return {
    books: await db.getBooks(),
  };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    let id = data.get("_id");
    await db.deleteBook(data.get("_id"));
  },
};
