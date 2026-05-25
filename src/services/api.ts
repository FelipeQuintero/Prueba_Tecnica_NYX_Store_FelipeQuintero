import { Product } from "@/types/product";

const API_URL = "https://fakestoreapi.com";

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_URL}/products`);
    
    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    // En una aplicación real, aquí podríamos enviar el error a un servicio como Sentry
    throw new Error("No pudimos cargar los productos en este momento. Por favor, intenta de nuevo más tarde.");
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const response = await fetch(`${API_URL}/products/categories`);
    
    if (!response.ok) {
      throw new Error(`Error fetching categories: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return []; // Fallback seguro
  }
}

export async function getProductById(id: string): Promise<Product> {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    if (!response.ok) throw new Error("Error fetching product");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("No se pudo cargar el producto.");
  }
}

export async function getRelatedProducts(category: string, currentProductId: number): Promise<Product[]> {
  try {
    const response = await fetch(`${API_URL}/products/category/${category}`);
    if (!response.ok) throw new Error("Error fetching related products");
    
    const products: Product[] = await response.json();
    
    return products.filter((p) => p.id !== currentProductId).slice(0, 3);
  } catch (error) {
    console.error(error);
    return [];
  }
}