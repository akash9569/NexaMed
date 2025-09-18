"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ShoppingCart, ChevronDown, Percent } from 'lucide-react';
import { SearchForm } from '@/components/search-form';
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

const navLinks = [
  { href: '/shop', label: 'All Products' },
  { href: '/pharmacy-locator', label: 'Pharmacy Locator' },
];

const megaMenuData = [
    {
        title: "Personal Care",
        categories: [
            { name: "Skin Care" },
            { name: "Oral Care" },
            { name: "Adult Diapers" },
            { name: "Sanitary Pads" },
            { name: "Sexual Wellness" },
            { name: "Mens Grooming" },
        ]
    },
    {
        title: "Baby Care",
        categories: [
            {
                name: "Diapers & Wipes",
                sub: ["Diapers", "Wipes"]
            },
            {
                name: "Diaper By Weight",
                sub: ["0 to 7 Kg", "7 to 14 Kg", "14 to 18 Kg", "Above 18 Kg"]
            },
            {
                name: "Baby Food",
                sub: ["Baby Cereals", "Formula Milk"]
            },
            {
                name: "Baby Skin Care",
                sub: ["Baby Creams", "Baby Lotions", "Baby Massage Oils", "Baby Lip Balms", "Baby Sunscreens", "Baby Powders", "Rash Creams"]
            },
            {
                name: "Baby Food By Age",
                sub: ["Preterm", "0 to 6 Months", "6 to 12 Months", "12 to 18 Months", "18 to 24 Months", "Above 2 Years"]
            },
            { name: "Baby Hair Care", sub: ["Baby Shampoos", "Baby Hair Oils"] },
            { name: "Baby Bath", sub: ["Soaps & Bars", "Body Wash"] },
            { name: "Baby Oral Care", sub: ["Baby Toothbrush", "Baby Toothpaste", "Gum & Tongue Cleaners"] },
            { name: "Feeding Bottles & Accessories", sub: ["Feeding Bottles", "Sterilizers", "Bottles & Accessories Cleaner", "Bottle Warmer", "Nipples & Teats", "Teethers & Pacifiers"] },
            { name: "Breast Feeding", sub: ["Manual Breast Pump", "Electric Breast Pump", "Breast Pads", "Nipple Shields"] },
            { name: "Mother Care", sub: ["Lactation Support", "Mother's Nutrition", "Mother Skin Care"] },
        ]
    },
    {
        title: "Vitamins & Supplements",
        categories: [
            { name: "Nutritional Drinks", sub: ["Adult Nutrition", "Kids Nutrition", "Specialty Nutrition", "Rehydration Drinks", "Green Tea"] },
            { name: "Sports Nutrition", sub: ["Protein Powders & Drinks", "Whey Protein", "Peanut Butter", "Muscle Mass Builders", "Protein Bars", "Pre Workout", "Post Workout"] },
            { name: "Vitamins", sub: ["Vitamin C", "Vitamin D", "Vitamin B", "Vitamin A", "Vitamin E", "Multivitamins"] },
            { name: "Minerals", sub: ["Calcium", "Iron", "Magnesium", "Zinc"] },
            { name: "Omega & Fish Oil", sub: ["Fish Oil", "Cod Liver Oil", "Flaxseed Oil"] },
            { name: "Speciality Supplements", sub: ["Gummies", "Biotin", "Collagen", "Pre & Probiotic", "Detox", "Antioxidant"] },
            { name: "Weight Management", sub: ["Fat Burner Supplements", "Weight Gain Supplements", "Meal Replacements", "Apple Cider Vinegar", "Sugar Substitutes"] },
            { name: "Immunity Boosters" },
        ]
    },
    {
        title: "Health Devices",
        categories: [
            { name: "BP Monitors" },
            { name: "Glucometers & Test Strips" },
            { name: "Covid Test Kits" },
            { name: "Thermometers" },
            { name: "Pulse Oximeters" },
            { name: "Pregnancy test Kit" },
            { name: "Heating Belts" },
            { name: "Weighing Machine" },
            { name: "Nebulizer" },
            { name: "Supports & Splints", sub: ["Abdominal Supports", "Arm & Wrist Supports", "Knee & Leg Supports", "Neck Supports", "Clavicle Supports"] },
        ]
    },
    {
        title: "Health Condition",
        categories: [
            { name: "Mental Wellness" },
            { name: "Liver Care" },
            { name: "Diabetic" },
            { name: "Pain Relief" },
            { name: "Cardiac" },
            { name: "Blood Pressure" },
            { name: "Kidney Care" },
            { name: "Stomach Care" },
            { name: "Respiratory" },
            { name: "Eye care" },
            { name: "Cold & Cough" },
            { name: "Wound Care" },
        ]
    },
    {
        title: "Ayurveda",
        categories: [
            { name: "Cold & Cough" },
            { name: "Diabetic Care" },
            { name: "Abdomen Care" },
            { name: "Liver Care" },
            { name: "Sexual Health Care" },
            { name: "Immunity Boosters" },
            { name: "Skin Hair & Nails Care" },
            { name: "Herbs", sub: ["Amla", "Tulsi", "Aloe Vera", "Ashwagandha", "Giloy", "Triphala", "Shilajit", "Neem", "Haldi"] },
            { name: "Herbal Juices" },
            { name: "Chyawanprash" },
            { name: "Honey" },
        ]
    }
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
              <DropdownMenuSeparator />
              {megaMenuData.map((menu) => (
                <div key={menu.title}>
                  <h3 className="font-semibold px-2 py-1.5">{menu.title}</h3>
                  {menu.categories.map((cat) => (
                    <Link key={cat.name} href="#" className="block pl-4 text-foreground/80 hover:text-foreground">
                      {cat.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-between gap-4 md:justify-start">
            <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
                {megaMenuData.map((menu) => (
                    <DropdownMenu key={menu.title}>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="p-0 text-foreground/60 hover:text-foreground/80 focus-visible:ring-0">
                                {menu.title}
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="start">
                            <ScrollArea className="h-96">
                                <DropdownMenuGroup>
                                    {menu.categories.map((category) =>
                                        category.sub ? (
                                        <DropdownMenuSub key={category.name}>
                                            <DropdownMenuSubTrigger>
                                                <span>{category.name}</span>
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuSubContent>
                                                <ScrollArea className="h-64">
                                                {category.sub.map((subItem) => (
                                                    <DropdownMenuItem key={subItem}>{subItem}</DropdownMenuItem>
                                                ))}
                                                </ScrollArea>
                                            </DropdownMenuSubContent>
                                        </DropdownMenuSub>
                                        ) : (
                                        <DropdownMenuItem key={category.name}>
                                            {category.name}
                                        </DropdownMenuItem>
                                        )
                                    )}
                                </DropdownMenuGroup>
                            </ScrollArea>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ))}
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
        
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <SearchForm />
          </div>
           <Button variant="ghost" size="icon" aria-label="Offers">
             <Percent className="h-5 w-5" />
           </Button>
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
          <Button>Login</Button>
        </div>
      </div>
    </header>
  );
}
