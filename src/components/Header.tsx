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
      {/* Header con fondo blanco y sombra suave para minimalismo */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20 transition-all duration-300">
            {/* Logo de la tienda: Negro Japandi */}
            <Link href="/" className="font-semibold text-2xl tracking-tighter text-stone-950">
              NYX<span className="text-amber-800">.</span> Store
            </Link>
            
            {/* Botón del Carrito: Acentos oscuros */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-stone-700 hover:text-stone-950 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount !== undefined && cartCount > 0 && (
                <span className="absolute top-1 right-1 inline-flex items-center justify-center h-4 w-4 text-[10px] font-bold text-white bg-[#B95B3D] rounded-full">
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