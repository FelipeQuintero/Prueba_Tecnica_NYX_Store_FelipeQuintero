"use client"; // Añade esto arriba

import Image from "next/image";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="group flex flex-col bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
      {/* Contenedor Imagen: Fondo piedra suave */}
      <div className="relative h-64 md:h-72 w-full bg-stone-50 p-6 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      
      {/* Detalles: Texto Japandi */}
      <div className="flex flex-col flex-grow p-6 border-t border-gray-50">
        <span className="text-xs font-semibold text-amber-900 uppercase tracking-widest mb-2.5">
          {product.category}
        </span>
        
        <Link href={`/product/${product.id}`} className="hover:text-amber-800 transition-colors">
          <h3 className="text-base font-semibold text-stone-950 line-clamp-2 mb-3.5 leading-snug cursor-pointer">
            {product.title}
          </h3>
        </Link>
        
        <div className="mt-auto flex items-center justify-between gap-3">
          <span className="text-xl font-bold text-stone-950">
            ${product.price.toFixed(2)}
          </span>
          
          {/* Botón Japandi: Negro Carbón */}
          <button 
            onClick={() => addToCart(product)} // Conectado a Zustand
            className="px-6 py-2.5 bg-stone-900 text-white text-sm font-semibold rounded-lg hover:bg-stone-800 transition-colors active:scale-95 whitespace-nowrap"
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}