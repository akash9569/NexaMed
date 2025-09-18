import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NutritionPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          Nutritional Drinks & Supplements
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Boost your health with our range of nutritional products.
        </p>
      </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
            <Card key={i}>
                <CardHeader>
                    <CardTitle>Nutrition Product {i + 1}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Details about nutritional product {i+1} coming soon.</p>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
