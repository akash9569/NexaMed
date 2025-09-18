import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function MembershipPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          Circle Membership
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Explore the benefits of our exclusive membership program.
        </p>
      </div>
      <Card>
        <CardHeader>
            <CardTitle>Membership Details</CardTitle>
        </CardHeader>
        <CardContent>
            <p>Details about our Circle Membership program are coming soon. Stay tuned for exclusive offers and benefits!</p>
        </CardContent>
      </Card>
    </div>
  );
}
