"use client";

import { useCart } from '@/context/cart-context';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';
import { Check } from 'lucide-react';
import Image from 'next/image';

const healthPackages = [
    {
        id: 'gold-checkup',
        name: 'Comprehensive Gold Full Body Checkup',
        price: 2249,
        mrp: 4498,
        discount: 50,
        tests: 89,
        imageUrl: 'https://saih.in/images/diagnosis/2020-04-18-18-18-32_gold-health.jpg',
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
        imageUrl: 'https://www.medicalindiatourism.com/wp-content/uploads/2021/11/25-1024x597.jpg',
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
        imageUrl: 'https://www.yashodahospitals.com/packages/wp-content/uploads/2025/04/Platinum-Health-CheckUp-for-Women-3.png',
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
        imageUrl: 'https://kdahweb-static.kokilabenhospital.com/kdah-2019/shop/package/images/1697104596.jpg',
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
        imageUrl: 'https://healthcheckup.kimshealthcare.com/media/cache/82/03/820384483bcc564ef80e96e43828c8f4.jpg',
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
        imageUrl: 'https://hitechdiagnosticcentre.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-08-21-at-4.03.35-PM.jpeg',
        imageHint: 'woman wellness',
        includes: ['Complete Haemogram', 'Thyroid Profile', 'Iron Studies', 'Vitamin D', 'Urine Analysis'],
    },
    {
        id: 'diabetic-profile',
        name: 'Advanced Diabetic Profile',
        price: 1299,
        mrp: 2598,
        discount: 50,
        tests: 25,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX8JbQ96IkqGvEoIOnwQpDE-CZ_569JS48RA&s',
        imageHint: 'blood sugar test',
        includes: ['HbA1c', 'Fasting Blood Sugar', 'Lipid Profile', 'Creatinine', 'Urine Microalbumin'],
    },
    {
        id: 'basic-allergy',
        name: 'Basic Allergy Screening',
        price: 1799,
        mrp: 3598,
        discount: 50,
        tests: 18,
        imageUrl: 'https://www.verywellhealth.com/thmb/VY-XGkcVbs8Q1uNM1JW7L8lORWc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/VWH-MichelaButtignol-AllergensTypes-4000x2700-736b224d42bf4961b60059a0c24ae8cc.png',
        imageHint: 'allergy test concept',
        includes: ['Total IgE', 'Phadiatop', 'Common Food Allergens Panel', 'Common Inhalant Allergens Panel'],
    },
    {
        id: 'cardiac-basic',
        name: 'Basic Cardiac Checkup',
        price: 1599,
        mrp: 3198,
        discount: 50,
        tests: 30,
        imageUrl: 'https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/BigBead/heart_anatomy_function_and_blood_circulation_bigbead/1800x1200_heart_anatomy_function_and_blood_circulation_bigbead.jpg',
        imageHint: 'heart health check',
        includes: ['Lipid Profile', 'hs-CRP', 'ECG', 'Homocysteine'],
    },
    {
        id: 'pre-marital-male',
        name: 'Pre-Marital Checkup - Male',
        price: 2999,
        mrp: 5998,
        discount: 50,
        tests: 40,
        imageUrl: 'https://kdahweb-static.kokilabenhospital.com/kdah-2019/shop/package/images/16225523420.jpg',
        imageHint: 'couple health',
        includes: ['HIV I & II', 'VDRL', 'Hepatitis B', 'Semen Analysis', 'Blood Group'],
    },
    {
        id: 'pre-marital-female',
        name: 'Pre-Marital Checkup - Female',
        price: 3499,
        mrp: 6998,
        discount: 50,
        tests: 45,
        imageUrl: 'https://wellmedbangkok.com/wp-content/uploads/2023/06/AW_Packages-06.jpg',
        imageHint: 'woman health test',
        includes: ['HIV I & II', 'VDRL', 'Hepatitis B', 'Thalassemia Screen', 'Rubella IgG'],
    },
    {
        id: 'active-fit',
        name: 'Active Fit Package',
        price: 999,
        mrp: 1998,
        discount: 50,
        tests: 60,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS60KxK-XAiNVNwJ46I56Ir204lbhTNDGMwA&s',
        imageHint: 'fitness checkup',
        includes: ['CBC', 'Lipid Profile', 'Liver Function Test', 'Kidney Function Test'],
    },
    {
        id: 'fever-panel',
        name: 'Fever Panel Basic',
        price: 1199,
        mrp: 2398,
        discount: 50,
        tests: 10,
        imageUrl: 'https://www.lalpathlabs.com/blog/wp-content/uploads/2023/07/fever-panel-test.jpg',
        imageHint: 'thermometer and pills',
        includes: ['Dengue NS1 Antigen', 'Malaria Parasite', 'Typhoid IgG & IgM', 'Complete Blood Count'],
    },
    {
        id: 'vitamin-deficiency',
        name: 'Vitamin Deficiency Check',
        price: 1499,
        mrp: 2998,
        discount: 50,
        tests: 4,
        imageUrl: 'https://www.eggoz.com/cdn/shop/articles/vitamin_E_deficiency_copy.png?v=1732712407&width=1100',
        imageHint: 'vitamin pills',
        includes: ['Vitamin D Total', 'Vitamin B12', 'Folic Acid', 'Serum Calcium'],
    },
    {
        id: 'pcos-profile',
        name: 'PCOS Profile',
        price: 2199,
        mrp: 4398,
        discount: 50,
        tests: 12,
        imageUrl: 'https://cdn.shopify.com/s/files/1/1990/9885/files/pcos_480x480.png?v=1604658322',
        imageHint: 'hormone balance concept',
        includes: ['Testosterone Total', 'LH', 'FSH', 'Prolactin', 'TSH', 'Insulin Fasting'],
    },
];

export default function HealthCheckupsPage() {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleBookNow = (pkg: (typeof healthPackages)[0]) => {
    addToCart({
      id: pkg.id,
      name: pkg.name,
      price: pkg.price,
      quantity: 1,
      imageUrl: pkg.imageUrl
    });
    toast({
      title: "Package added to cart",
      description: `${pkg.name} has been added to your cart.`,
    });
  };

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
                    <Button className="w-full" onClick={() => handleBookNow(pkg)}>Book Now</Button>
                </CardFooter>
            </Card>
        ))}
      </div>
    </div>
  );
}
