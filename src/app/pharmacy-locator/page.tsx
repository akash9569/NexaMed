"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Loader2, MapPin, Navigation } from 'lucide-react';
import type { Pharmacy } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

const mockPharmacies: Pharmacy[] = [
    { name: "Apollo Pharmacy", address: "123 Health St, Bengaluru", distance: "0.5 km" },
    { name: "MedPlus", address: "456 Wellness Ave, Bengaluru", distance: "1.2 km" },
    { name: "Wellness Forever", address: "789 Cure Blvd, Bengaluru", distance: "2.1 km" },
    { name: "Local Chemist", address: "101 Remedy Ln, Bengaluru", distance: "2.5 km" },
];

export default function PharmacyLocatorPage() {
    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);

    const handleFindPharmacies = () => {
        setLoading(true);
        setError(null);
        setPharmacies([]);

        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser.");
            setLoading(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
                // Simulate fetching pharmacies
                setTimeout(() => {
                    setPharmacies(mockPharmacies);
                    setLoading(false);
                }, 1500);
            },
            (err) => {
                switch (err.code) {
                    case err.PERMISSION_DENIED:
                        setError("You denied the request for Geolocation.");
                        break;
                    case err.POSITION_UNAVAILABLE:
                        setError("Location information is unavailable.");
                        break;
                    case err.TIMEOUT:
                        setError("The request to get user location timed out.");
                        break;
                    default:
                        setError("An unknown error occurred.");
                        break;
                }
                setLoading(false);
            }
        );
    };

    return (
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
            <div className="max-w-2xl mx-auto text-center">
                <MapPin className="mx-auto h-12 w-12 text-primary mb-4" />
                <h1 className="text-4xl font-headline font-bold mb-2">Pharmacy Locator</h1>
                <p className="text-muted-foreground mb-6">
                    Find pharmacies near your current location with one click.
                </p>
                <Button onClick={handleFindPharmacies} disabled={loading} size="lg">
                    {loading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Finding...
                        </>
                    ) : (
                        <>
                            <Navigation className="mr-2 h-4 w-4" /> Find Pharmacies Near Me
                        </>
                    )}
                </Button>
            </div>

            <div className="max-w-2xl mx-auto mt-8">
                {error && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                {loading && (
                    <div className="space-y-4">
                        <Skeleton className="h-24 w-full" />
                        <Skeleton className="h-24 w-full" />
                        <Skeleton className="h-24 w-full" />
                    </div>
                )}
                
                {pharmacies.length > 0 && (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Nearby Pharmacies</h2>
                        {pharmacies.map((pharmacy, index) => (
                             <Card key={index}>
                                <CardHeader>
                                    <CardTitle>{pharmacy.name}</CardTitle>
                                    <CardDescription>{pharmacy.address}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm font-medium">{pharmacy.distance} away</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
