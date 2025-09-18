"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { StarRating } from "@/components/star-rating";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import type { Medication, Review } from "@/lib/types";
import { MessageSquare, Star as StarIcon } from "lucide-react";

const reviewSchema = z.object({
  author: z.string().min(2, { message: "Name must be at least 2 characters." }),
  rating: z.number().min(1, { message: "Please select a rating." }).max(5),
  comment: z.string().min(10, { message: "Comment must be at least 10 characters." }),
});

type ReviewFormValues = z.infer<typeof reviewSchema>;

async function submitReviewAction(data: ReviewFormValues) {
    "use server";
    console.log("New review submitted:", data);
    // In a real app, you would save this to a database.
    return { success: true, message: "Thank you for your review!" };
}

export default function ReviewsSection({ medication }: { medication: Medication }) {
  const { toast } = useToast();
  const [reviews, setReviews] = useState<Review[]>(medication.reviews);

  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      author: "",
      rating: 0,
      comment: "",
    },
  });

  const onSubmit = async (data: ReviewFormValues) => {
    const result = await submitReviewAction(data);
    if (result.success) {
      toast({
        title: "Review Submitted",
        description: result.message,
      });
      // Optimistically update UI
      const newReview: Review = {
        id: Date.now(),
        ...data,
        date: new Date().toISOString().split('T')[0],
      };
      setReviews([newReview, ...reviews]);
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was an error submitting your review.",
      });
    }
  };

  const averageRating = reviews.length > 0
    ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
    : 0;

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
            <div>
                <CardTitle className="flex items-center"><MessageSquare className="mr-2 h-5 w-5" />Reviews & Ratings</CardTitle>
                <CardDescription>See what others have to say about {medication.name}.</CardDescription>
            </div>
            {reviews.length > 0 && (
                <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                    <StarRating rating={averageRating} readOnly />
                    <span className="text-muted-foreground font-medium">{averageRating.toFixed(1)} out of 5</span>
                </div>
            )}
        </div>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-4">Leave a Review</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Rating</FormLabel>
                    <FormControl>
                      <StarRating rating={field.value} onRatingChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Review</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Share your experience..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit Review</Button>
            </form>
          </Form>
        </div>
        <div className="space-y-6">
          <h3 className="font-semibold mb-4">Community Reviews ({reviews.length})</h3>
          {reviews.length > 0 ? (
            <div className="max-h-[400px] overflow-y-auto pr-4 space-y-6">
                {reviews.map((review) => (
                <div key={review.id}>
                    <div className="flex items-start space-x-4">
                    <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                            <p className="font-semibold">{review.author}</p>
                            <span className="text-xs text-muted-foreground">{new Date(review.date).toLocaleDateString()}</span>
                        </div>
                        <StarRating rating={review.rating} readOnly />
                        <p className="text-sm text-muted-foreground pt-1">{review.comment}</p>
                    </div>
                    </div>
                    <Separator className="mt-4" />
                </div>
                ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">Be the first to review this product!</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
