import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function HealthRecordsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          Health Records
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Securely store and manage your health records.
        </p>
      </div>
      <Card>
        <CardHeader>
            <CardTitle>Your Health Records</CardTitle>
        </CardHeader>
        <CardContent>
            <p>The health records feature is coming soon. You will be able to upload, view, and manage all your medical documents in one place.</p>
        </CardContent>
      </Card>
    </div>
  );
}
