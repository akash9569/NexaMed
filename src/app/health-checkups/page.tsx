import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';
import { ShieldCheck, Check } from 'lucide-react';
import Image from 'next/image';

const healthPackages = [
    {
        id: 'gold-checkup',
        name: 'Comprehensive Gold Full Body Checkup',
        price: 2249,
        mrp: 4498,
        discount: 50,
        tests: 89,
        imageUrl: 'https://picsum.photos/seed/601/400/250',
        imageHint: 'health checkup',
        includes: ['Complete Blood Count', 'Liver Function Test', 'Kidney Function Test', 'Thyroid Profile', 'Lipid Profile', 'Urine Routine'],
    },
    {
        id: 'silver-checkup',
        name: 'Good Health Silver Package',
        price: 699,
        mrp: 1398,
        discount: 50,
        tests: 55,
        imageUrl: 'https://picsum.photos/seed/602/400/250',
        imageHint: 'health package',
        includes: ['CBC', 'Blood Sugar', 'Urine Routine', 'Cholesterol Test'],
    },
    {
        id: 'platinum-checkup',
        name: 'Comprehensive Platinum Full Body Checkup',
        price: 3599,
        mrp: 7198,
        discount: 50,
        tests: 102,
        imageUrl: 'https://picsum.photos/seed/604/400/250',
        imageHint: 'premium health check',
        includes: ['All tests in Gold Package', 'Vitamin D & B12', 'Cardiac Risk Markers', 'Iron Deficiency Profile'],
    },
    {
        id: 'senior-citizen-male',
        name: 'Senior Citizen Checkup - Male',
        price: 1999,
        mrp: 3998,
        discount: 50,
        tests: 78,
        imageUrl: 'https://picsum.photos/seed/901/400/250',
        imageHint: 'elderly man health',
        includes: ['Prostate-Specific Antigen (PSA)', 'Bone Density', 'ECG', 'CBC', 'Lipid Profile'],
    },
    {
        id: 'senior-citizen-female',
        name: 'Senior Citizen Checkup - Female',
        price: 2499,
        mrp: 4998,
        discount: 50,
        tests: 82,
        imageUrl: 'https://picsum.photos/seed/902/400/250',
        imageHint: 'elderly woman health',
        includes: ['Mammogram (optional add-on)', 'Bone Density', 'Pap Smear', 'CBC', 'Hormone Profile'],
    },
    {
        id: 'women-wellness',
        name: "Women's Wellness Package",
        price: 1499,
        mrp: 2998,
        discount: 50,
        tests: 65,
        imageUrl: 'https://picsum.photos/seed/903/400/250',
        imageHint: 'woman wellness',
        includes: ['Complete Haemogram', 'Thyroid Profile', 'Iron Studies', 'Vitamin D', 'Urine Analysis'],
    },
];

export default function HealthCheckupsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          Health Checkups
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Choose from a wide range of health checkup packages.
        </p>
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {healthPackages.map((pkg) => (
            <Card key={pkg.id} className="flex flex-col">
                <div className="relative">
                    <Image
                        src={pkg.imageUrl}
                        alt={pkg.name}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover rounded-t-lg"
                        data-ai-hint={pkg.imageHint}
                    />
                    <div className="absolute top-2 left-2 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {pkg.discount}% OFF
                    </div>
                </div>
                <CardHeader>
                    <CardTitle>{pkg.name}</CardTitle>
                    <CardDescription>Includes {pkg.tests} tests</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                   <ul className="space-y-2 text-sm text-muted-foreground">
                       {pkg.includes.slice(0, 4).map(item => (
                           <li key={item} className="flex items-center">
                               <Check className="h-4 w-4 mr-2 text-green-500" />
                               <span>{item}</span>
                           </li>
                       ))}
                       {pkg.includes.length > 4 && (
                           <li className="font-semibold">and {pkg.includes.length - 4} more...</li>
                       )}
                   </ul>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4 p-4 mt-auto">
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold">{formatCurrency(pkg.price)}</span>
                        <span className="text-muted-foreground line-through">{formatCurrency(pkg.mrp)}</span>
                    </div>
                    <Button className="w-full">Book Now</Button>
                </CardFooter>
            </Card>
        ))}
      </div>
    </div>
  );
}
