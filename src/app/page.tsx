

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { SearchForm } from '@/components/search-form';
import { conditions, medications } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency } from '@/lib/utils';
import { MapPin, Upload, Stethoscope, ShieldCheck, Microscope, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';


const featureCards = [
    {
        title: "Pharmacy Near Me",
        description: "FIND STORE",
        icon: MapPin,
        href: "/pharmacy-locator",
        image: "https://i2.wp.com/thpmilton.com/wp-content/uploads/2020/08/pharmacist.png?fit=835%2C500&ssl=1",
        imageHint: "map marker",
    },
    {
        title: "Get 20%* off on Medicines",
        description: "Upload Now",
        icon: Upload,
        href: "/#",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUMyxqti_msPCrQI77Y3aU82CpIhUyjVbDFw&s",
        imageHint: "prescription upload",
    },
    {
        title: "Doctor Appointment",
        description: "Book Now",
        icon: Stethoscope,
        href: "/find-doctors",
        image: "https://assets.medpagetoday.net/media/images/101xxx/101506.jpg",
        imageHint: "doctor consultation",
    },
    {
        title: "Health Insurance",
        description: "Explore Plans",
        icon: ShieldCheck,
        href: "/#",
        image: "https://jupiter.money/blog/wp-content/uploads/2024/06/What_is_Health_Insurance.jpg",
        imageHint: "insurance document",
    },
    {
        title: "Lab Tests",
        description: "AT HOME",
        icon: Microscope,
        href: "/health-checkups",
        image: "https://www.healthchek.in/images/blogs/38288421.png",
        imageHint: "lab test",
    },
];

const ProductCarousel = ({ title, products, viewAllHref }: { title: string, products: any[], viewAllHref: string }) => (
    <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{title}</h2>
                 <div className="flex items-center gap-2">
                    <Button variant="link" asChild>
                        <Link href={viewAllHref}>View All <ChevronRight className="h-4 w-4 ml-1" /></Link>
                    </Button>
                </div>
            </div>
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent>
                    {products.map((product, index) => (
                        <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                            <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
                                <Link href={product.href || `/medication/${product.id}`} className="block">
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
                                {product.showAddToCart && <CardContent className="p-4 pt-0">
                                    <Button className="w-full">ADD</Button>
                                </CardContent>}
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-[-1.5rem] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-foreground shadow-md rounded-full h-8 w-8" />
                <CarouselNext className="absolute right-[-1.5rem] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-foreground shadow-md rounded-full h-8 w-8" />
            </Carousel>
        </div>
    </section>
);


const BrandsCarousel = ({ title, brands, viewAllHref }: { title: string, brands: any[], viewAllHref: string }) => (
    <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{title}</h2>
                <div className="flex items-center gap-2">
                    <Button variant="link" asChild>
                        <Link href={viewAllHref}>View All <ChevronRight className="h-4 w-4 ml-1" /></Link>
                    </Button>
                </div>
            </div>
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent>
                    {brands.map((brand, index) => (
                        <CarouselItem key={index} className="basis-1/4 md:basis-1/6 lg:basis-1/8">
                            <Link href="/brands" className="block">
                                <Card className="flex items-center justify-center p-4 aspect-square rounded-full hover:shadow-lg transition-shadow">
                                    <Image
                                        src={brand.logoUrl}
                                        alt={brand.name}
                                        width={100}
                                        height={100}
                                        className="object-contain"
                                        data-ai-hint={brand.imageHint}
                                    />
                                </Card>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                 <CarouselPrevious className="absolute left-[-1.5rem] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-foreground shadow-md rounded-full h-8 w-8" />
                <CarouselNext className="absolute right-[-1.5rem] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-foreground shadow-md rounded-full h-8 w-8" />
            </Carousel>
        </div>
    </section>
);

const CategoryCarousel = ({ title, categories, viewAllHref }: { title: string, categories: any[], viewAllHref: string }) => (
    <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{title}</h2>
                 <div className="flex items-center gap-2">
                    <Button variant="link" asChild>
                        <Link href={viewAllHref}>View All <ChevronRight className="h-4 w-4 ml-1" /></Link>
                    </Button>
                </div>
            </div>
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent>
                    {categories.map((category, index) => (
                        <CarouselItem key={index} className="basis-1/3 md:basis-1/5 lg:basis-1/7">
                            <Link href={category.href}>
                                <Card className="hover:shadow-lg transition-shadow">
                                    <CardContent className="p-0">
                                        <div className={`aspect-square flex items-center justify-center p-4 rounded-t-lg ${category.bgColor}`}>
                                            <Image
                                                src={category.imageUrl}
                                                alt={category.name}
                                                width={120}
                                                height={120}
                                                className="object-contain"
                                                data-ai-hint={category.imageHint}
                                            />
                                        </div>
                                        <p className="text-center font-semibold p-2 text-sm">{category.name}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-[-1.5rem] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-foreground shadow-md rounded-full h-8 w-8" />
                <CarouselNext className="absolute right-[-1.5rem] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-foreground shadow-md rounded-full h-8 w-8" />
            </Carousel>
        </div>
    </section>
);

export default function Home() {
    const valueDeals = medications.slice(0, 5).map((med, i) => ({ ...med, mrp: med.price * 1.6, discount: 38, tag: i === 1 ? 'Bestseller' : 'Buy 1 Get 1', showAddToCart: true }));
    const fiftyOffDeals = medications.slice(1, 6).map((med, i) => ({ ...med, mrp: med.price * 2, discount: 50, tag: i === 1 ? 'Bestseller' : 'Buy 2, +2% OFF', showAddToCart: true }));
    const healthCheckups = [
        { id: 'gold-checkup', name: 'Comprehensive Gold Full Body Checkup', price: 2249, mrp: 4498, discount: 50, tag: 'SAFE', imageUrl: 'https://picsum.photos/seed/health1/200/200', imageHint: 'health checkup kit', showAddToCart: false, href: '/health-checkups' },
        { id: 'silver-checkup', name: 'Good Health Silver Package', price: 699, mrp: 1398, discount: 50, tag: 'SAFE', imageUrl: 'https://picsum.photos/seed/health2/200/200', imageHint: 'health package', showAddToCart: false, href: '/health-checkups' },
        { id: 'silver-full-checkup', name: 'Comprehensive Silver Full Body Checkup', price: 1899, mrp: 3798, discount: 50, tag: 'SAFE', imageUrl: 'https://picsum.photos/seed/health3/200/200', imageHint: 'medical checkup', showAddToCart: false, href: '/health-checkups' },
        { id: 'platinum-checkup', name: 'Comprehensive Platinum Full Body Checkup', price: 3599, mrp: 7198, discount: 50, tag: 'SAFE', imageUrl: 'https://picsum.photos/seed/health4/200/200', imageHint: 'premium health check', showAddToCart: false, href: '/health-checkups' },
        { id: 'good-health-checkup', name: 'Good Health Platinum Package', price: 1499, mrp: 2998, discount: 50, tag: 'SAFE', imageUrl: 'https://picsum.photos/seed/health5/200/200', imageHint: 'wellness package', showAddToCart: false, href: '/health-checkups' },
    ];
    const featuredBrands = [
        { name: 'Optimum Nutrition', logoUrl: 'https://m.media-amazon.com/images/I/71OsEAdPuZL.jpg', imageHint: 'ON logo' },
        { name: 'Nicotex', logoUrl: 'https://m.media-amazon.com/images/I/61fU-e6MT8L.jpg', imageHint: 'Nicotex logo' },
        { name: 'HealthKart', logoUrl: 'https://static.startuptalky.com/2024/04/HealthKart-Logo-Startuptalky.jpg', imageHint: 'HealthKart logo' },
        { name: 'Saffola', logoUrl: 'https://m.media-amazon.com/images/I/61ZSTmboXVL.jpg', imageHint: 'Saffola logo' },
        { name: 'Cetaphil', logoUrl: 'https://m.media-amazon.com/images/I/51O+J5jnXcL.jpg', imageHint: 'Cetaphil logo' },
        { name: 'Miduty', logoUrl: 'https://m.media-amazon.com/images/I/51GDh3z9RTL.jpg', imageHint: 'Miduty logo' },
        { name: 'Pilgrim', logoUrl: 'https://m.media-amazon.com/images/I/61RNasSEEdL._UF1000,1000_QL80_.jpg', imageHint: 'Pilgrim logo' },
    ];
    const personalCareCategories = [
        { name: 'Skin Care', imageUrl: 'https://media.post.rvohealth.io/wp-content/uploads/2022/08/SKIN-CARE-Facebook-Category-Hub-Page-Art-1200x628-1.png', imageHint: 'skin care products', bgColor: 'bg-green-100', href: "/personal-care" },
        { name: 'Hair Care', imageUrl: 'https://deyga.in/cdn/shop/articles/shutterstock_1488709208.webp?v=1697779417', imageHint: 'hair care products', bgColor: 'bg-blue-100', href: "/personal-care" },
        { name: 'Sexual Wellness', imageUrl: 'https://sa1s3optim.patientpop.com/filters:format(webp)/assets/images/provider/photos/2758176.png', imageHint: 'sexual wellness products', bgColor: 'bg-orange-100', href: "/women-care" },
        { name: 'Oral Care', imageUrl: 'https://images.ctfassets.net/xxv4b9mbhlgd/73PKv8BmWGnsABEP3Ld9Xh/484e94225257c541225f69a876ebdb7a/oral-dental-care.jpg', imageHint: 'oral care products', bgColor: 'bg-red-100', href: "/personal-care" },
        { name: 'Elderly Care', imageUrl: 'https://kefihealthcare.com/wp-content/uploads/2022/10/elderly-care-facilities-1024x682.jpeg', imageHint: 'elderly care products', bgColor: 'bg-yellow-100', href: "/health-devices" },
        { name: 'Baby Care', imageUrl: 'https://plus.unsplash.com/premium_photo-1661515635718-9414fe6adfd6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMGNhcmV8ZW58MHx8MHx8fDA%3D', imageHint: 'baby care products', bgColor: 'bg-purple-100', href: "/baby-care" },
        { name: 'Women Care', imageUrl: 'https://w.ndtvimg.com/sites/3/2022/05/04153041/women_self_Care_reproductive_health_istock_660x330.jpg', imageHint: 'women care products', bgColor: 'bg-pink-100', href: "/women-care" },
    ];


  return (
    <div className="flex flex-col">
       <section className="relative w-full pt-12 pb-16 md:pt-16 md:pb-20 bg-card">
        <Image
          src="https://picsum.photos/seed/hero-bg/1600/400"
          alt="Abstract background of pills and bottles"
          fill
          objectFit="cover"
          className="opacity-10 dark:opacity-20 z-0"
          data-ai-hint="medical background"
        />
         <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
                 <h1 className="text-3xl md:text-4xl font-headline font-bold tracking-tighter mb-4">
                    Buy Medicines and Essentials
                </h1>
                <div className="max-w-xl mx-auto">
                    <SearchForm />
                </div>
            </div>
        </div>
      </section>

      <section className="py-12 bg-background">
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

      <section id="categories" className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-headline font-bold text-center mb-8">
            Shop by Health Conditions
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
                  <p className="text-lg font-semibold">{condition.name}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProductCarousel title="Value Deals at Rs 100" products={valueDeals} viewAllHref="/shop" />
      <ProductCarousel title="Minimum 50 Percent Off" products={fiftyOffDeals} viewAllHref="/shop" />
      
      <ProductCarousel title="Full body health checkups" products={healthCheckups} viewAllHref="/health-checkups" />
      <BrandsCarousel title="Featured brands" brands={featuredBrands} viewAllHref="/brands" />
      <CategoryCarousel title="Personal care" categories={personalCareCategories} viewAllHref="/personal-care" />
    </div>
  );
}

    

    