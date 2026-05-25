import { getRelatedProducts } from "@/services/api";
import ProductCard from "./ProductCard";

interface RelatedProductsProps {
  category: string;
  currentProductId: number;
}

export default async function RelatedProducts({ category, currentProductId }: RelatedProductsProps) {
  // Fetching de productos relacionados desde el servidor
  const relatedProducts = await getRelatedProducts(category, currentProductId);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="mt-20 border-t border-gray-100 pt-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-3 border-l-4 border-stone-200 pl-5">
        <h2 className="text-3xl font-semibold text-stone-950 tracking-tight leading-snug">
          También te puede interesar
        </h2>
        {/* Badge IA: Terracota suave */}
        <span className="text-xs font-semibold text-amber-950 bg-amber-50 px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap">
          Recomendaciones IA
        </span>
      </div>
      
      {/* Grilla: Misma responsive que el catálogo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-10">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}