export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Extensión para el carrito (Sección 2)
export interface CartItem extends Product {
  quantity: number;
}
