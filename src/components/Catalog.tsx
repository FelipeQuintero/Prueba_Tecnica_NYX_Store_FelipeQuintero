"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface CatalogProps {
  initialProducts: Product[];
  categories: string[];
}

export default function Catalog({ initialProducts, categories }: CatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProducts =
    selectedCategory === "all"
      ? initialProducts
      : initialProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Filtros: Minimalistas y orgánicos */}
      <div className="flex flex-wrap gap-2.5 mb-10 pb-2 border-b border-gray-100">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
            selectedCategory === "all"
              ? "bg-stone-900 text-white"
              : "bg-stone-100 text-stone-700 hover:bg-stone-200"
          }`}
        >
          Todos
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              selectedCategory === category
                ? "bg-stone-900 text-white"
                : "bg-stone-100 text-stone-700 hover:bg-stone-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grilla de productos: Totalmente Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <p className="text-center text-stone-600 mt-12 py-10 bg-white rounded-lg shadow-sm border border-gray-100">
          No se encontraron productos en esta categoría.
        </p>
      )}
    </div>
  );
}