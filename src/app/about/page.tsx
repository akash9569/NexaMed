import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, CheckCircle, Shield } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Akash Singh',
    title: 'Founder & CEO',
    imageUrl: 'https://drive.google.com/uc?export=download&id=1n-Rn-wyi1nbrLnqMrKFVXEvhJ6Fxs8KK',
    imageHint: 'male founder photo',
    description: 'With over 20 years of experience in the medical field, Dr. Singh founded NexaMed to make healthcare accessible to all.',
  },
  {
    name: 'Shubhashish Singh',
    title: 'Chief Technology Officer',
    imageUrl: 'https://instagram.flko10-2.fna.fbcdn.net/v/t51.2885-15/514298171_18080025979883069_7922431422593200564_n.webp?efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEwODB4MTA4MC5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.flko10-2.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2QFcNZmRb0aMxtWCLwZ58a29T7mWolfsXraA3rY47gBAEet5AW4vJ_ehejB8lY5wU9r6Gegv8AYJY7VGoexkUSYX&_nc_ohc=9EtC_fpGqesQ7kNvwEC6MKF&_nc_gid=z2-rBH5bxtmACDnkCO8TPQ&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzY2NjQyNTkxMjQ4OTY5ODYyMQ%3D%3D.3-ccb7-5&oh=00_AfbAknHYaDanQZ1V78QqNfGu1wYIERYUUCH3PLzcL-bBwg&oe=68D2B076&_nc_sid=7a9f4b',
    imageHint: 'male technology officer',
    description: 'Vikram leads our technology team, ensuring a seamless and secure digital experience for our users.',
  },
  {
    name: 'Priya Desai',
    title: 'Head of Pharmacy',
    imageUrl: 'https://img.freepik.com/premium-vector/modern-interior-pharmacy-male-pharmacist_169241-3431.jpg',
    imageHint: 'female pharmacist',
    description: 'A licensed pharmacist, Priya oversees all our pharmacy operations, ensuring quality and authenticity.',
  },
   {
    name: 'Rohan Gupta',
    title: 'Head of Operations',
    imageUrl: 'https://picsum.photos/seed/team4/300/300',
    imageHint: 'male operations head',
    description: 'Rohan ensures that our logistics and customer service run smoothly, delivering care to your doorstep efficiently.',
  },
];

const whyChooseUsItems = [
    {
        icon: Shield,
        title: "Trusted & Authentic",
        description: "We source our products from trusted suppliers and ensure 100% authenticity."
    },
    {
        icon: CheckCircle,
        title: "Wide Range of Products",
        description: "From prescription medicines to wellness products, we have everything you need."
    },
    {
        icon: Heart,
        title: "Personalized Care",
        description: "Our AI tools and expert team are here to provide you with personalized health insights."
    }
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          About NexaMed
        </h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          Your partner in accessible, reliable, and comprehensive healthcare. We are committed to bringing quality medical care and products to your doorstep.
        </p>
      </section>

      <section className="mb-16">
         <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                    To revolutionize healthcare access in India by creating a seamless, user-friendly digital platform that provides authentic medicines, expert health information, and personalized care. We believe everyone deserves to live a healthy life, and we are dedicated to making that a reality.
                </p>
                 <h2 className="text-3xl font-bold mb-4 mt-8">Our Vision</h2>
                <p className="text-muted-foreground">
                    To be India's most trusted digital healthcare ecosystem, known for our commitment to quality, affordability, and patient-centric innovation.
                </p>
            </div>
             <Image
                src="https://www.n2growth.com/wp-content/uploads/2010/12/AdobeStock_143303680-scaled.jpeg"
                alt="Our Mission"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                data-ai-hint="doctors collaborating"
            />
         </div>
      </section>

       <section className="mb-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUsItems.map(item => (
                <Card key={item.title}>
                    <CardHeader className="items-center">
                         <div className="bg-primary/10 p-3 rounded-full">
                            <item.icon className="h-8 w-8 text-primary" />
                         </div>
                        <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="overflow-hidden text-center">
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
                data-ai-hint={member.imageHint}
              />
              <CardHeader>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <p className="text-primary font-semibold">{member.title}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
