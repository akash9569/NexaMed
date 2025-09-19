import Link from "next/link";
import { NexaMedLogo } from "../icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const shopLinks = [
    { name: "Medicines", href: "/shop" },
    { name: "Personal Care", href: "/personal-care" },
    { name: "Health Devices", href: "/health-devices" },
    { name: "Baby Care", href: "/baby-care" },
  ];
  
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Find Doctors", href: "/find-doctors" },
    { name: "Health Checkups", href: "/health-checkups" },
    { name: "Health Records", href: "/health-records" },
    { name: "Membership", href: "/membership" },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <NexaMedLogo className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl font-headline">NexaMed</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your trusted partner in health and wellness. Delivering care, one click at a time.
            </p>
             <div className="flex space-x-4 mt-4">
              <Link href="https://www.facebook.com/iamakashsingh9" aria-label="Facebook"><Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
              <Link href="https://x.com/AkashSingh57860" aria-label="Twitter"><Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
              <Link href="https://www.instagram.com/iamakashsingh9/?next=%2F" aria-label="Instagram"><Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
              <Link href="https://www.linkedin.com/in/akash-singh-a69213242/" aria-label="LinkedIn"><Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              {shopLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-3">Subscribe to our newsletter for the latest health tips and offers.</p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} NexaMed. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="#" className="hover:text-primary">Privacy Policy</Link>
                <Link href="#" className="hover:text-primary">Terms of Service</Link>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-muted-foreground">
            <p>
              Disclaimer: The information provided on this website is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
