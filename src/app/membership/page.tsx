import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';

const membershipTiers = [
  {
    name: 'Silver',
    price: 'Free',
    period: '',
    description: 'The essentials to get you started on your health journey.',
    features: [
      'Free Delivery on orders over Rs. 500',
      'Basic Health Content Access',
      'Savings on 5000+ products',
    ],
    buttonText: 'Sign Up for Free',
    variant: 'secondary' as const,
  },
  {
    name: 'Gold',
    price: 'Rs. 299',
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
  },
  {
    name: 'Platinum',
    price: 'Rs. 599',
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
  },
];


export default function MembershipPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
            PillWise Circle Membership
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
                  <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
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
                <Button className="w-full" variant={tier.variant}>
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
