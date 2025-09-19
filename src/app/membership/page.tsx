"use client";

import { useCart } from '@/context/cart-context';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

const membershipTiers = [
  {
    id: 'silver-membership',
    name: 'Silver Membership',
    price: 0,
    priceString: 'Free',
    period: '',
    description: 'The essentials to get you started on your health journey.',
    features: [
      'Free Delivery on orders over Rs. 500',
      'Basic Health Content Access',
      'Savings on 5000+ products',
    ],
    buttonText: 'Sign Up for Free',
    variant: 'secondary' as const,
    imageUrl: 'https://toyoos.com/wp-content/uploads/2018/07/Silver-Membership.png'
  },
  {
    id: 'gold-membership',
    name: 'Gold Membership',
    price: 299,
    priceString: 'Rs. 299',
    period: '/ year',
    description: 'Unlock greater savings and exclusive consultations.',
    features: [
      'Everything in Silver',
      '2 Free Doctor Consultations',
      'Extra 5% off on Lab Tests',
      'Early Access to Sales',
    ],
    buttonText: 'Choose Gold',
    variant: 'default' as const,
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/12/EL/AE/AP/181507398/gold-membership.png'
  },
  {
    id: 'platinum-membership',
    name: 'Platinum Membership',
    price: 599,
    priceString: 'Rs. 599',
    period: '/ year',
    description: 'The ultimate care package for you and your family.',
    features: [
      'Everything in Gold',
      '5 Free Doctor Consultations',
      '1 Free Full Body Checkup Annually',
      'Priority Customer Support',
    ],
    buttonText: 'Choose Platinum',
    variant: 'default' as const,
    imageUrl: 'https://toyoos.com/wp-content/uploads/2018/07/Platinum-Membership.png'
  },
];


export default function MembershipPage() {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleChoosePlan = (tier: (typeof membershipTiers)[0]) => {
    addToCart({
      id: tier.id,
      name: tier.name,
      price: tier.price,
      quantity: 1,
      imageUrl: tier.imageUrl,
    });
    toast({
      title: "Membership Added",
      description: `The ${tier.name} has been added to your cart.`,
    });
  };
  
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
            NexaMed Circle Membership
          </h1>
          <p className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto">
            Unlock exclusive benefits, greater savings, and personalized care with our membership program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {membershipTiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col ${tier.name === 'Gold' ? 'border-primary border-2 shadow-lg' : ''}`}>
               <CardHeader className="p-6">
                <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-extrabold tracking-tight">{tier.priceString}</span>
                  <span className="text-sm font-medium text-muted-foreground">{tier.period}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6 pt-0">
                <ul className="space-y-4">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 mt-auto">
                <Button className="w-full" variant={tier.variant} onClick={() => handleChoosePlan(tier)}>
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
