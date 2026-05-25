import { getProducts, getCategories } from "@/services/api";
import Catalog from "@/components/Catalog";

export default async function Home() {
  // Fetching en paralelo para optimizar tiempos de carga
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <main className="min-h-screen bg-[#FDF9F3] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Cabecera Japandi */}
        <header className="mb-12 text-center sm:text-left border-b border-gray-100 pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tighter mb-3 leading-tight">
            NYX Colección<span className="text-amber-800">.</span>
          </h1>
          <p className="text-stone-700 text-lg max-w-2xl leading-relaxed">
            Explora una cuidada selección de productos consumidos directamente desde FakeStore API, ahora bajo una estética Japandi: minimalista, natural y cálida.
          </p>
        </header>

        <Catalog initialProducts={products} categories={categories} />
      </div>
    </main>
  );
}