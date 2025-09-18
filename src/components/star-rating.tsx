"use client"

import { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

type StarRatingProps = {
  rating: number;
  onRatingChange?: (rating: number) => void;
  readOnly?: boolean;
  size?: number;
  className?: string;
};

export function StarRating({
  rating,
  onRatingChange,
  readOnly = false,
  size = 5,
  className,
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (index: number) => {
    if (!readOnly) {
      setHoverRating(index);
    }
  };

  const handleMouseLeave = () => {
    if (!readOnly) {
      setHoverRating(0);
    }
  };

  const handleClick = (index: number) => {
    if (!readOnly && onRatingChange) {
      onRatingChange(index);
    }
  };

  return (
    <div className={cn("flex items-center space-x-1", className)}>
      {[...Array(size)].map((_, i) => {
        const index = i + 1;
        return (
          <Star
            key={index}
            className={cn(
              "h-5 w-5",
              index <= (hoverRating || rating)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300",
              !readOnly && "cursor-pointer"
            )}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          />
        );
      })}
    </div>
  );
}
