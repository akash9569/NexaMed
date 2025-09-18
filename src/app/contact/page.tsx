
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          Contact Us
        </h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          We'd love to hear from you! Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
                <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Our Address</h3>
                        <p className="text-muted-foreground">123 Health St, Wellness City, India 400001</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Email Us</h3>
                        <p className="text-muted-foreground">support@nexamed.com</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Call Us</h3>
                        <p className="text-muted-foreground">+91 98765 43210</p>
                    </div>
                </div>
            </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Question about an order" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>

       <section className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
            <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
                 <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.529815049302!2d77.219532!3d28.613939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1628854743283!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Google Map of our location"
                ></iframe>
            </div>
      </section>
    </div>
  );
}
