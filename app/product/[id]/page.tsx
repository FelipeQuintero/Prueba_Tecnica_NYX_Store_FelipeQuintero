import { getProductById } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import RelatedProducts from "@/components/RelatedProducts";

export default async function ProductDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {

  const resolvedParams = await params;
  
  const product = await getProductById(resolvedParams.id);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al catálogo
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Imagen del producto */}
            <div className="relative h-96 w-full bg-gray-50 rounded-xl p-8">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, 50vw" // <- Agrega esta línea
            />
            </div>

            {/* Detalles del producto */}
            <div className="flex flex-col justify-center">
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">
                {product.category}
              </span>
              <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
                {product.title}
              </h1>
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold text-gray-900 mr-4">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500 flex items-center">
                  ⭐ {product.rating.rate} ({product.rating.count} reseñas)
                </span>
              </div>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                {product.description}
              </p>
            </div>
          </div>
        </div>

        {/* Componente de Sección 4: Recomendador */}
        <RelatedProducts category={product.category} currentProductId={product.id} />
      </div>
    </main>
  );
}