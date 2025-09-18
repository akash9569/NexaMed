"use client";

import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { formatCurrency } from '@/lib/utils';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const { toast } = useToast();
  const router = useRouter();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Placed!",
      description: "Thank you for your purchase.",
    });
    clearCart();
    router.push('/');
  };

  if (cart.length === 0) {
    return (
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 text-center">
            <h1 className="text-2xl font-bold">Your cart is empty</h1>
            <p className="text-muted-foreground mt-2">Add some items to proceed to checkout.</p>
            <Button asChild className="mt-6">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
        </div>
    )
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <h1 className="text-3xl font-headline font-bold mb-8">Checkout</h1>
      <form onSubmit={handlePlaceOrder}>
        <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Shipping Information</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="you@example.com" required />
                        </div>
                         <div className="md:col-span-2 space-y-2">
                            <Label htmlFor="address">Address</Label>
                            <Input id="address" placeholder="123 Main St" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input id="city" placeholder="Anytown" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="pincode">Pincode</Label>
                            <Input id="pincode" placeholder="123456" required />
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="md:col-span-1">
                 <Card>
                    <CardHeader>
                        <CardTitle>Order Summary</CardTitle>
                        <CardDescription>{cart.length} item(s)</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2 max-h-64 overflow-y-auto">
                            {cart.map(item => (
                                <div key={item.id} className="flex justify-between items-center text-sm">
                                    <div className="flex items-center">
                                       <Image src={item.imageUrl} alt={item.name} width={40} height={40} className="rounded-md mr-3" />
                                       <div>
                                           <p className="font-medium">{item.name}</p>
                                           <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                                       </div>
                                    </div>
                                    <span>{formatCurrency(item.price * item.quantity)}</span>
                                </div>
                            ))}
                        </div>
                        <div className="border-t pt-4 space-y-2">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>{formatCurrency(subtotal)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>{formatCurrency(subtotal)}</span>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full">Place Order</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
      </form>
    </div>
  );
}
