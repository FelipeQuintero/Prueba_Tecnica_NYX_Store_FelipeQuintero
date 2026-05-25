"use client";

import { useCartStore } from "@/store/useCartStore";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCartStore();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay oscuro de fondo: Más opaco para minimalismo */}
      <div 
        className="fixed inset-0 bg-stone-950/70 z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Panel lateral: Japandi */}
      <div className="fixed inset-y-0 right-0 w-full max-w-lg md:max-w-md bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300 overflow-hidden">
        <div className="flex items-center justify-between p-6 md:p-8 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-stone-950 tracking-tight">Tu Carrito</h2>
          <button onClick={onClose} className="p-2 text-stone-500 hover:text-stone-950 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Lista de productos: Responsive y espaciosa */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
          {cart.length === 0 ? (
            <p className="text-center text-stone-600 mt-16 py-10 bg-stone-50 rounded-lg">Tu carrito está vacío.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-5 md:gap-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="relative w-24 h-24 md:w-20 md:h-20 bg-stone-50 rounded-xl p-3 flex-shrink-0 border border-gray-50 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-contain p-1" 
                    sizes="96px"
                  />
                </div>
                
                <div className="flex flex-col flex-1">
                  <h3 className="text-sm md:text-base font-semibold text-stone-950 line-clamp-2 leading-snug">{item.title}</h3>
                  <p className="text-base text-stone-600 mt-1.5">${item.price.toFixed(2)}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-3.5">
                    {/* Controles: Minimalistas */}
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3.5 py-2 text-stone-600 hover:bg-stone-50 transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 text-sm font-semibold text-stone-950">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3.5 py-2 text-stone-600 hover:bg-stone-50 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    {/* Eliminar: Rojo Terracota suave */}
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-[#B95B3D] hover:text-red-900 p-2 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer: Fondo blanco con sombra interna */}
        {cart.length > 0 && (
          <div className="border-t border-gray-100 p-6 md:p-8 bg-white shadow-[inner_0_2px_4px_rgba(0,0,0,0.02)]">
            <div className="flex justify-between items-center text-lg font-semibold text-stone-950 mb-6">
              <p>Total a pagar</p>
              <p className="text-2xl">${getCartTotal().toFixed(2)}</p>
            </div>
            {/* Botón Principal Japandi */}
            <button className="w-full bg-stone-950 text-white px-8 py-4 rounded-xl font-semibold hover:bg-stone-800 transition-colors active:scale-[0.98] tracking-tight">
              Proceder al pago
            </button>
          </div>
        )}
      </div>
    </>
  );
}