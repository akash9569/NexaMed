import { medications } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils';

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          All Products
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Browse our full selection of medications.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {medications.map((med) => (
          <Link href={`/medication/${med.id}`} key={med.id} className="block">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
              <Image
                src={med.imageUrl}
                alt={med.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
                data-ai-hint={med.imageHint}
              />
              <CardHeader>
                <CardTitle>{med.name}</CardTitle>
                <CardDescription>{formatCurrency(med.price)}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-end">
                <Button className="w-full mt-auto">View Details</Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
