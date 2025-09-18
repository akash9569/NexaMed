"use client";

import { medications } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils';
import { useCart } from '@/context/cart-context';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ShopPage() {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (medication: (typeof medications)[0]) => {
    addToCart({
      id: medication.id,
      name: medication.name,
      price: medication.price,
      quantity: 1,
      imageUrl: medication.imageUrl
    });
    toast({
      title: "Added to cart",
      description: `${medication.name} has been added to your cart.`,
    });
  };

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
          <Card key={med.id} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
            <Link href={`/medication/${med.id}`} className="block">
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
            </Link>
            <CardFooter className="mt-auto p-4">
              <Button className="w-full" onClick={() => handleAddToCart(med)}>
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
