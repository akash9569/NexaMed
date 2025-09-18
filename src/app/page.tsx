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
import { MapPin, Upload, Stethoscope, ShieldCheck, Microscope, ChevronRight, ChevronLeft } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';


const featureCards = [
    {
        title: "Pharmacy Near Me",
        description: "FIND STORE",
        icon: MapPin,
        href: "/pharmacy-locator",
        image: "https://picsum.photos/seed/401/200/150",
        imageHint: "map marker",
    },
    {
        title: "Get 20%* off on Medicines",
        description: "Upload Now",
        icon: Upload,
        href: "/#",
        image: "https://picsum.photos/seed/402/200/150",
        imageHint: "prescription upload",
    },
    {
        title: "Doctor Appointment",
        description: "Book Now",
        icon: Stethoscope,
        href: "/#",
        image: "https://picsum.photos/seed/403/200/150",
        imageHint: "doctor consultation",
    },
    {
        title: "Health Insurance",
        description: "Explore Plans",
        icon: ShieldCheck,
        href: "/#",
        image: "https://picsum.photos/seed/404/200/150",
        imageHint: "insurance document",
    },
    {
        title: "Lab Tests",
        description: "AT HOME",
        icon: Microscope,
        href: "/#",
        image: "https://picsum.photos/seed/405/200/150",
        imageHint: "lab test",
    },
];

const ProductCarousel = ({ title, products, viewAllHref }: { title: string, products: any[], viewAllHref: string }) => (
    <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{title}</h2>
                <Button variant="link" asChild>
                    <Link href={viewAllHref}>View All <ChevronRight className="h-4 w-4 ml-1" /></Link>
                </Button>
            </div>
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent>
                    {products.map((product, index) => (
                        <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                            <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
                                <Link href={`/medication/${product.id}`} className="block">
                                    <div className="p-4 bg-white relative">
                                        {product.tag && (
                                            <Badge className="absolute top-2 left-2 z-10" variant={product.tag === 'Bestseller' ? 'destructive' : 'default'}>{product.tag}</Badge>
                                        )}
                                        <Image
                                            src={product.imageUrl}
                                            alt={product.name}
                                            width={200}
                                            height={200}
                                            className="w-full h-40 object-contain"
                                            data-ai-hint={product.imageHint}
                                        />
                                    </div>
                                    <CardContent className="p-4 pt-2">
                                        <p className="text-sm font-medium truncate">{product.name}</p>
                                        <div className="flex items-baseline gap-2 mt-2">
                                            <span className="font-bold text-lg">{formatCurrency(product.price)}</span>
                                            {product.mrp && (
                                                <span className="text-muted-foreground text-sm line-through">MRP {formatCurrency(product.mrp)}</span>
                                            )}
                                            {product.discount && (
                                                <span className="text-green-600 font-semibold text-sm">{product.discount}% off</span>
                                            )}
                                        </div>
                                    </CardContent>
                                </Link>
                                <CardContent className="p-4 pt-0">
                                    <Button className="w-full">ADD</Button>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md" />
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md" />
            </Carousel>
        </div>
    </section>
);


export default function Home() {
    const valueDeals = medications.slice(0, 5).map((med, i) => ({ ...med, mrp: med.price * 1.6, discount: 38, tag: i === 1 ? 'Bestseller' : 'Buy 1 Get 1' }));
    const fiftyOffDeals = medications.slice(1, 6).map((med, i) => ({ ...med, mrp: med.price * 2, discount: 50, tag: i === 1 ? 'Bestseller' : 'Buy 2, +2% OFF'  }));

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

      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {featureCards.map((card) => (
              <Link href={card.href} key={card.title}>
                 <Card className="flex flex-col items-center text-center p-3 hover:shadow-lg transition-shadow h-full justify-between">
                    <Image
                        src={card.image}
                        alt={card.title}
                        width={80}
                        height={60}
                        className="mb-2 rounded-md object-cover"
                        data-ai-hint={card.imageHint}
                    />
                    <div className="flex-grow flex flex-col justify-center">
                        <p className="text-sm font-semibold">{card.title}</p>
                    </div>
                    <Button variant="link" className="mt-1 p-0 h-auto text-primary">{card.description}</Button>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProductCarousel title="Value Deals at Rs 100" products={valueDeals} viewAllHref="/shop" />
      <ProductCarousel title="Minimum 50 Percent Off" products={fiftyOffDeals} viewAllHref="/shop" />

      <section id="categories" className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-headline font-bold text-center mb-8">
            Shop by Health Concern
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {conditions.map((condition) => (
              <Link href={`/condition/${condition.id}`} key={condition.id}>
                <Card className="flex flex-col items-center text-center p-4 hover:shadow-lg transition-shadow h-full">
                  <Image
                    src={condition.imageUrl}
                    alt={condition.name}
                    width={80}
                    height={80}
                    className="mb-4 rounded-full object-cover"
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
