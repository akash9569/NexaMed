import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for health checkup packages */}
        {[...Array(6)].map((_, i) => (
            <Card key={i}>
                <CardHeader>
                    <CardTitle>Package {i + 1}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Details about health checkup package {i+1} coming soon.</p>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
