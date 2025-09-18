"use server";

import * as z from "zod";

const reviewSchema = z.object({
  author: z.string().min(2, { message: "Name must be at least 2 characters." }),
  rating: z.number().min(1, { message: "Please select a rating." }).max(5),
  comment: z.string().min(10, { message: "Comment must be at least 10 characters." }),
});

export type ReviewFormValues = z.infer<typeof reviewSchema>;

export async function submitReviewAction(data: ReviewFormValues) {
    console.log("New review submitted:", data);
    // In a real app, you would save this to a database.
    return { success: true, message: "Thank you for your review!" };
}
