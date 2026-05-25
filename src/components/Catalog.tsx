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
      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === "all"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Todos
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
              selectedCategory === category
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grilla de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            priority={index < 4} // <-- Las primeras 4 imágenes cargan con prioridad
          />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No se encontraron productos en esta categoría.
        </p>
      )}
    </div>
  );
}