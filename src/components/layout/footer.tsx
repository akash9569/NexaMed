import Link from "next/link";
import { NexaMedLogo } from "../icons";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <NexaMedLogo className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">NexaMed</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NexaMed. All rights reserved.
          </p>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-xs text-muted-foreground">
          <p>
            Disclaimer: The information provided on this website is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
        </div>
      </div>
    </footer>
  );
}
