import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FindDoctorsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          Find Doctors
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Book appointments with top doctors near you.
        </p>
      </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for doctors */}
        {[...Array(6)].map((_, i) => (
            <Card key={i}>
                <CardHeader>
                    <CardTitle>Doctor {i + 1}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Details about doctor {i+1} coming soon.</p>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
