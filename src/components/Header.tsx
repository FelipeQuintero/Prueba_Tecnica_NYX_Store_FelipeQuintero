"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { useStore } from "@/hooks/useStore";
import Link from "next/link";
import CartSidebar from "./CartSidebar";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Hook custom para evitar problemas de hidratación en Next.js
  const cartCount = useStore(useCartStore, (state) => state.getCartCount());

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-bold text-2xl tracking-tighter text-black">
              NYX<span className="text-blue-600">.</span>
            </Link>
            
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-600 hover:text-black transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount !== undefined && cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}