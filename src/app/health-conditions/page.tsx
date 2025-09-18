import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { conditions } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

export default function HealthConditionsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          Shop by Health Condition
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Find products tailored to specific health needs.
        </p>
      </div>
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
  );
}
