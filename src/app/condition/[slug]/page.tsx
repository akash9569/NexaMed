import { notFound } from 'next/navigation';
import Image from 'next/image';
import { conditions } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ListChecks, Pill } from 'lucide-react';

export default function ConditionPage({
  params,
}: {
  params: { slug: string };
}) {
  const condition = conditions.find((cond) => cond.id === params.slug);

  if (!condition) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          {condition.name}
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          {condition.description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ListChecks className="mr-2 h-5 w-5 text-primary" />
              Common Symptoms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              {condition.symptoms.map((symptom) => (
                <li key={symptom}>{symptom}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Pill className="mr-2 h-5 w-5 text-primary" />
              Typical Treatments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              {condition.treatments.map((treatment) => (
                <li key={treatment}>{treatment}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
