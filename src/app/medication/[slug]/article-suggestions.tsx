"use client";

import { useEffect, useState } from 'react';
import { getArticleSuggestions, type ArticleSuggestionOutput } from '@/ai/flows/medication-article-suggestions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function ArticleSuggestions({ medicationName }: { medicationName: string }) {
  const [suggestions, setSuggestions] = useState<ArticleSuggestionOutput | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        setLoading(true);
        const result = await getArticleSuggestions({ medicationName });
        setSuggestions(result);
      } catch (e) {
        console.error("Failed to fetch article suggestions:", e);
        setError("Could not load article suggestions at this time.");
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, [medicationName]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <BookOpen className="mr-2 h-5 w-5" />
          Related Articles & Reading
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading && (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        )}
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {suggestions && suggestions.articles.length > 0 && (
          <div className="space-y-4">
            {suggestions.articles.map((article) => (
              <div key={article.url}>
                <Link href={article.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
                  {article.title}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">{article.snippet}</p>
              </div>
            ))}
          </div>
        )}
        {suggestions && suggestions.articles.length === 0 && (
            <p className="text-muted-foreground">No related articles found.</p>
        )}
      </CardContent>
    </Card>
  );
}
