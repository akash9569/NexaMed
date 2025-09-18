import { notFound } from 'next/navigation';
import Image from 'next/image';
import { medications } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { formatCurrency } from '@/lib/utils';
import ArticleSuggestions from './article-suggestions';
import ReviewsSection from './reviews-section';

export default function MedicationPage({
  params,
}: {
  params: { slug: string };
}) {
  const medication = medications.find((med) => med.id === params.slug);

  if (!medication) {
    notFound();
  }

  const apolloSearchUrl = `https://www.apollopharmacy.in/search-medicines/${encodeURIComponent(medication.name)}`;
  const oneMgSearchUrl = `https://www.1mg.com/search/all?name=${encodeURIComponent(medication.name)}`;

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <Image
            src={medication.imageUrl}
            alt={medication.name}
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full object-cover"
            data-ai-hint={medication.imageHint}
          />
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl md:text-4xl font-headline font-bold">
            {medication.name}
          </h1>
          <p className="text-lg text-muted-foreground">
            {medication.description}
          </p>
          <div className="text-2xl font-bold text-primary">
            {formatCurrency(medication.price)}
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Order Home Delivery</CardTitle>
              <CardDescription>
                Get {medication.name} delivered to your doorstep.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="w-full">
                <Link href={apolloSearchUrl} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Order from Apollo
                </Link>
              </Button>
              <Button asChild variant="secondary" className="w-full">
                <Link href={oneMgSearchUrl} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Order from 1mg
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="uses" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="uses">Uses</TabsTrigger>
            <TabsTrigger value="side-effects">Side Effects</TabsTrigger>
            <TabsTrigger value="interactions">Interactions</TabsTrigger>
          </TabsList>
          <TabsContent value="uses" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <ul className="list-disc list-inside space-y-2">
                  {medication.uses.map((use) => (
                    <li key={use}>{use}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="side-effects" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <ul className="list-disc list-inside space-y-2">
                  {medication.sideEffects.map((effect) => (
                    <li key={effect}>{effect}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="interactions" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <ul className="list-disc list-inside space-y-2">
                  {medication.interactions.map((interaction) => (
                    <li key={interaction}>{interaction}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-12">
        <ArticleSuggestions medicationName={medication.name} />
      </div>

      <div className="mt-12">
        <ReviewsSection medication={medication} />
      </div>
    </div>
  );
}
