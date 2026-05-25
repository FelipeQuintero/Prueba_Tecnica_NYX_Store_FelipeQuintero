import { getProducts, getCategories } from "@/services/api";
import Catalog from "@/components/Catalog";

export default async function Home() {
  // Fetching en paralelo para optimizar tiempos de carga
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 text-center sm:text-left">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            NYX Store
          </h1>
          <p className="text-gray-500 max-w-2xl">
            Descubre nuestra colección de productos consumidos directamente desde FakeStore API.
          </p>
        </header>

        <Catalog initialProducts={products} categories={categories} />
      </div>
    </main>
  );
}