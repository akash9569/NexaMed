import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { SearchForm } from '@/components/search-form';
import { conditions, medications } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency } from '@/lib/utils';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
        <Image
          src="https://picsum.photos/seed/100/1600/600"
          alt="Abstract background of pills and bottles"
          layout="fill"
          objectFit="cover"
          className="opacity-10 dark:opacity-20"
          data-ai-hint="pills bottles"
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter mb-4">
              Your Health, Clarified.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Find comprehensive information on medications and health conditions.
            </p>
            <div className="max-w-xl mx-auto">
              <SearchForm />
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-headline font-bold text-center mb-8">
            Shop by Health Concern
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {conditions.slice(0, 4).map((condition) => (
              <Link href={`/condition/${condition.id}`} key={condition.id}>
                <Card className="flex flex-col items-center text-center p-4 hover:shadow-lg transition-shadow h-full">
                  <Image
                    src={condition.imageUrl}
                    alt={condition.name}
                    width={80}
                    height={80}
                    className="mb-4 rounded-full"
                    data-ai-hint={condition.imageHint}
                  />
                  <CardHeader className="p-0">
                    <CardTitle className="text-lg font-semibold">{condition.name}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-headline font-bold text-center mb-8">
            Our Top-Selling Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {medications.slice(0, 4).map((med) => (
               <Link href={`/medication/${med.id}`} key={med.id} className="block">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
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
                  <CardContent>
                    <Button className="w-full">View Details</Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
