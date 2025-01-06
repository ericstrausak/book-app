import db from '$lib/db.js';

export const actions = {
    create: async ({ request }) => {
        try {
            const data = await request.formData();
            let review = {
                "book name": data.get("book name"),
                "review title": data.get("title"), // Include the title field
                reviewer: data.get("reviewer"),
                "reviewer rating": parseFloat(data.get("reviewer rating")), // Ensure it's a number
                "reviewer description": data.get("reviewer description"),
            };
            await db.createBookReview(review);
            return { success: true };
        } catch (error) {
            console.error("Error creating review:", error);
            return { success: false, error: "Failed to create review. Please try again." };
        }
    },
};
