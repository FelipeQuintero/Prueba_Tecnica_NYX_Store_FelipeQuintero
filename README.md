# NYX eCommerce - Prueba Técnica Full Stack Semi Senior

Este proyecto es una aplicación de eCommerce construida con Next.js (App Router), TypeScript, Tailwind CSS y Zustand, consumiendo la FakeStore API.

## 🚀 Instrucciones de Ejecución

1. Clona el repositorio:
   ```bash
   git clone <tu-url-del-repositorio>
   cd nyx-ecommerce
Instala las dependencias:

Bash
npm install
Inicia el servidor de desarrollo:

Bash
npm run dev
Abre http://localhost:3000 en tu navegador.

🧠 Sección 5: Impacto de Negocio y Arquitectura
1. ¿Qué herramientas de IA usaste y para qué?
Utilicé Gemini como mi AI Copilot principal durante el desarrollo de esta prueba. Lo utilicé para:

Github Copilot: Acelerar la creación de interfaces de TypeScript y la estructura base de los componentes (UI).

Stitch with Google: Básicamente se realizaron unas propuestas de paleta de colores y de diseño utilizando la IA generativa de Stitch, para la interfaz de Usuario

Arquitectura de Estado: Diseñar un hook personalizado para Zustand que evite los errores de hidratación (Hydration Mismatch) que ocurren comúnmente al combinar Server-Side Rendering (SSR) con localStorage.

2. Si este fuera el eCommerce real de Hi Beauty con 10.000 usuarios diarios, ¿qué cambiarías en tu arquitectura?
Para soportar 10.000 usuarios diarios de forma robusta, implementaría las siguientes mejoras:

Estrategia de Caché Avanzada: Usaría unstable_cache de Next.js o integraría Redis para cachear las respuestas del catálogo. Actualmente, consultamos la API en cada carga; con tráfico real, el catálogo debe estar fuertemente cacheado y revalidarse por tiempo (ISR) o por demanda.

Paginación / Infinite Scroll: El catálogo actual carga todos los productos a la vez. Implementaría paginación a nivel de servidor.

Persistencia del Carrito en BD: Actualmente el carrito vive en el localStorage. A escala, el carrito debería estar ligado a la sesión del usuario en una base de datos (ej. PostgreSQL) para permitir una experiencia omnicanal (empezar la compra en el móvil y terminarla en la PC).



3. ¿Qué métrica de negocio mejoraría más con el componente de IA que implementaste y por qué?
El recomendador de productos relacionados (Opción A) impacta directa y positivamente en Ticket Promedio de Compra.

¿Por qué?
Al aprovechar la navegación del usuario e inyectar sugerencias contextuales ("También te puede interesar") en la página de detalle, estimulamos las ventas cruzadaz. Si un usuario entra a ver una joya y el recomendador de IA le sugiere anillos de la misma categoría que hacen juego, la fricción para descubrir nuevos productos desaparece. Esto aumenta la probabilidad de que el usuario agregue más de un artículo al carrito antes del checkout, elevando los ingresos totales sin necesidad de incrementar el Costo de Adquisición de Clientes (CAC).