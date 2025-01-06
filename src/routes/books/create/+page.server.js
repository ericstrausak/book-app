import db from '$lib/db.js';

export const actions = {
    create: async ({ request }) => {
        try {
            const data = await request.formData();
            let book = {
                Rank: parseInt(data.get("rank")), // Ensure it's an integer
                "book title": data.get("book title"),
                rating: parseFloat(data.get("rating")), // Ensure it's a number
                author: data.get("author"),
                "year of publication": parseInt(data.get("year of publication")), // Ensure it's an integer
                genre: data.get("genre"),
                url: data.get("url"),
            };
            await db.createBook(book); // Use the createBook function to save the book
            return { success: true };
        } catch (error) {
            console.error("Error creating book:", error);
            return { success: false, error: "Failed to create book. Please try again." };
        }
    },
};
