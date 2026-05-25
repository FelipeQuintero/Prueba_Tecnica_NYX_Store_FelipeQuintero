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
    <section className="mt-16 border-t border-gray-200 pt-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
          También te puede interesar
        </h2>
        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          Recomendaciones IA
        </span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}