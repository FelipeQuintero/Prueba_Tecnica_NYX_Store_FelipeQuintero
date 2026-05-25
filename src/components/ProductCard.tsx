"use client";

import Image from "next/image";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/useCartStore";

interface ProductCardProps {
  product: Product;
  priority?: boolean; // <-- Añadimos esto
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="relative h-64 w-full bg-white p-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          priority={priority} // <-- Se lo pasamos a Next Image
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      {/* El resto de tu código sigue igual... */}
      <div className="flex flex-col flex-grow p-5 border-t border-gray-100">
        <span className="text-xs font-medium text-blue-600 uppercase tracking-wider mb-2">
          {product.category}
        </span>
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2">
          {product.title}
        </h3>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button 
            onClick={() => addToCart(product)}
            className="px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors active:scale-95"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}