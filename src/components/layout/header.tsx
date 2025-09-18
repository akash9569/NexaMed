"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ShoppingCart, ChevronDown, Percent, MapPin, UserCircle } from 'lucide-react';
import { PillWiseLogo } from '../icons';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/cart-context';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from '@/components/ui/scroll-area';

const topNavLinks = [
  { href: '/shop', label: 'Buy Medicines' },
  { href: '#', label: 'Find Doctors' },
  { href: '#', label: 'Lab Tests' },
  { href: '#', label: 'Circle Membership' },
  { href: '#', label: 'Health Records' },
];

const categoryNavLinks = [
    { title: "Apollo Products" },
    { title: "Baby Care" },
    { title: "Nutritional Drinks & Supplements" },
    { title: "Women Care" },
    { title: "Personal Care" },
    { title: "Ayurveda" },
    { title: "Health Devices" },
    { title: "Home Essentials" },
    { title: "Health Condition" },
]


export function Header() {
  const pathname = usePathname();
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
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
                <ScrollArea className="h-[calc(100vh-8rem)]">
                  <div className="flex flex-col space-y-3 pr-6">
                    {topNavLinks.map(({ href, label }) => (
                      <Link key={label} href={href} className="font-semibold text-foreground/80 hover:text-foreground">
                        {label}
                      </Link>
                    ))}
                    <DropdownMenuSeparator />
                     <h3 className="font-semibold px-2 py-1.5 text-primary">Shop by Category</h3>
                    {categoryNavLinks.map((menu) => (
                      <Link key={menu.title} href="#" className="block pl-4 text-sm text-foreground/80 hover:text-foreground py-1">
                        {menu.title}
                      </Link>
                    ))}
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>

          <Link href="/" className="mr-6 flex items-center space-x-2">
            <PillWiseLogo className="h-8 w-8 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline text-2xl">
              PillWise
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1 border-l pl-4">
            <MapPin className="h-5 w-5 text-muted-foreground" />
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="flex flex-col items-start cursor-pointer">
                        <span className="text-xs text-muted-foreground">Delivery Address</span>
                        <Button variant="link" className="p-0 h-auto text-sm font-semibold">Select Address <ChevronDown className="ml-1 h-4 w-4" /></Button>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Address 1</DropdownMenuItem>
                    <DropdownMenuItem>Address 2</DropdownMenuItem>
                </DropdownMenuContent>
             </DropdownMenu>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-4 text-sm font-semibold">
           {topNavLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className={cn(
                  'transition-colors hover:text-primary pb-1',
                   pathname === href ? 'text-primary border-b-2 border-primary' : 'text-foreground/80'
                )}
              >
                {label}
              </Link>
            ))}
        </nav>
        
        <div className="flex items-center space-x-2">
           <Button variant="ghost" size="icon" aria-label="Offers" className="hidden sm:inline-flex">
             <Percent className="h-5 w-5" />
           </Button>
          <Button variant="ghost" size="icon" aria-label="Shopping Cart" asChild>
            <Link href="/cart">
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 justify-center p-0 text-xs">{totalItems}</Badge>
                )}
              </div>
            </Link>
          </Button>
          <Button>
              <UserCircle className="mr-2 h-5 w-5"/>
              Login
          </Button>
        </div>
      </div>
      <div className="hidden md:flex bg-primary/90 text-primary-foreground">
        <div className="container flex items-center justify-center gap-6 text-sm font-medium">
            {categoryNavLinks.map((link) => (
                <Link key={link.title} href="#" className="py-2.5 transition-colors hover:text-white/80">{link.title}</Link>
            ))}
        </div>
      </div>
    </header>
  );
}
