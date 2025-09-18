import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { brands } from '@/lib/brands';
import Image from 'next/image';
import Link from 'next/link';

export default function BrandsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          Featured Brands
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Discover our curated selection of top-quality brands.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {brands.map((brand) => (
          <Link href="#" key={brand.id}>
            <Card className="hover:shadow-lg transition-shadow h-full">
                <div className="flex justify-center p-8 bg-white">
                  <Image
                    src={brand.logoUrl}
                    alt={`${brand.name} logo`}
                    width={150}
                    height={150}
                    className="object-contain h-24"
                    data-ai-hint={brand.imageHint}
                  />
                </div>
                <CardHeader>
                    <CardTitle className="text-center">{brand.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground text-center line-clamp-3">{brand.description}</p>
                </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
