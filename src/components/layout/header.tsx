"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Pill, ShoppingCart } from 'lucide-react';
import { SearchForm } from '@/components/search-form';
import { PillWiseLogo } from '../icons';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/cart-context';
import { Badge } from '@/components/ui/badge';

const navLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/#categories', label: 'Categories' },
  { href: '/pharmacy-locator', label: 'Pharmacy Locator' },
];

export function Header() {
  const pathname = usePathname();
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <PillWiseLogo className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              PillWise
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === href ? 'text-foreground' : 'text-foreground/60'
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden mr-2"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <PillWiseLogo className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline">PillWise</span>
            </Link>
            <div className="flex flex-col space-y-3">
              {navLinks.map(({ href, label }) => (
                <Link key={label} href={href} className="text-foreground/80 hover:text-foreground">
                  {label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-between space-x-4 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <SearchForm />
          </div>
          <Button variant="ghost" size="icon" aria-label="Shopping Cart" asChild>
            <Link href="/cart">
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 justify-center p-0">{totalItems}</Badge>
                )}
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
