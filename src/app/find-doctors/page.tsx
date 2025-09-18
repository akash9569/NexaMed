"use client";

import { useState } from 'react';
import Image from 'next/image';
import { doctors } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Stethoscope, UserMd, MapPin, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function FindDoctorsPage() {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [specialty, setSpecialty] = useState('all');

  const specialties = ['all', ...Array.from(new Set(doctors.map(d => d.specialty)))];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesQuery = 
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = specialty === 'all' || doctor.specialty === specialty;
    return matchesQuery && matchesSpecialty;
  });
  
  const handleBookAppointment = (doctorName: string) => {
    toast({
      title: "Appointment Booked",
      description: `Your appointment with ${doctorName} has been confirmed.`,
    });
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          Find a Doctor
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Book appointments with top doctors near you.
        </p>
      </div>

      <Card className="max-w-3xl mx-auto mb-12 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by doctor name or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={specialty} onValueChange={setSpecialty}>
            <SelectTrigger className="w-full md:w-[240px]">
              <SelectValue placeholder="Select Specialty" />
            </SelectTrigger>
            <SelectContent>
              {specialties.map(spec => (
                <SelectItem key={spec} value={spec}>
                  {spec === 'all' ? 'All Specialties' : spec}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </Card>
      
      {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor) => (
              <Card key={doctor.id} className="flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4 p-4">
                  <Image
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover border-2 border-primary"
                    data-ai-hint={doctor.imageHint}
                  />
                  <div>
                    <CardTitle className="text-xl">{doctor.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">{doctor.specialty}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-4 pt-0">
                  <div className="text-sm text-muted-foreground space-y-2">
                    <div className="flex items-center">
                       <Stethoscope className="h-4 w-4 mr-2" />
                       <span>{doctor.experience} years of experience</span>
                    </div>
                    <div className="flex items-center">
                       <MapPin className="h-4 w-4 mr-2" />
                       <span>{doctor.location}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4">
                  <Button className="w-full" onClick={() => handleBookAppointment(doctor.name)}>Book Appointment</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
      ) : (
        <div className="text-center py-16">
            <p className="text-lg font-semibold">No doctors found</p>
            <p className="text-muted-foreground mt-2">Try adjusting your search or filter.</p>
        </div>
      )}
    </div>
  );
}
