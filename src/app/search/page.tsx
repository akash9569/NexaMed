import { medications, conditions } from '@/lib/data';
import type { Medication, Condition } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type SearchResults = {
  medications: Medication[];
  conditions: Condition[];
};

export default function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query = (searchParams.q as string)?.toLowerCase() || '';

  const results: SearchResults = {
    medications: [],
    conditions: [],
  };

  if (query) {
    results.medications = medications.filter((med) =>
      med.name.toLowerCase().includes(query)
    );
    results.conditions = conditions.filter((con) =>
      con.name.toLowerCase().includes(query)
    );
  }

  const totalResults = results.medications.length + results.conditions.length;

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <h1 className="text-3xl font-headline font-bold mb-2">
        Search Results for &quot;{query}&quot;
      </h1>
      <p className="text-muted-foreground mb-8">
        {totalResults} result{totalResults !== 1 ? 's' : ''} found.
      </p>

      {totalResults === 0 ? (
        <div className="text-center py-16">
          <p className="text-lg">No results found.</p>
          <p className="text-muted-foreground">
            Try searching for something else.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8">
          {results.medications.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Medications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.medications.map((med) => (
                  <Link href={`/medication/${med.id}`} key={med.id}>
                    <Card className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardTitle>{med.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground line-clamp-2">{med.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {results.conditions.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Health Conditions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.conditions.map((con) => (
                  <Link href={`/condition/${con.id}`} key={con.id}>
                    <Card className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardTitle>{con.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground line-clamp-2">{con.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
