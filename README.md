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

Scaffolding y Boilerplate: Acelerar la creación de interfaces de TypeScript y la estructura base de los componentes (UI).

Debugging Avanzado: Resolver de manera eficiente un breaking change introducido recientemente en Next.js 15 (la asincronía obligatoria de los params en las rutas dinámicas).

Arquitectura de Estado: Diseñar un hook personalizado para Zustand que evite los errores de hidratación (Hydration Mismatch) que ocurren comúnmente al combinar Server-Side Rendering (SSR) con localStorage.

2. Si este fuera el eCommerce real de Hi Beauty con 10.000 usuarios diarios, ¿qué cambiarías en tu arquitectura?
Para soportar 10.000 usuarios diarios de forma robusta, implementaría las siguientes mejoras:

Estrategia de Caché Avanzada: Usaría unstable_cache de Next.js o integraría Redis para cachear las respuestas del catálogo. Actualmente, consultamos la API en cada carga; con tráfico real, el catálogo debe estar fuertemente cacheado y revalidarse por tiempo (ISR) o por demanda.

Paginación / Infinite Scroll: El catálogo actual carga todos los productos a la vez. Implementaría paginación a nivel de servidor o Infinite Scrolling para reducir el tamaño del payload inicial y mejorar el First Contentful Paint (FCP).

Persistencia del Carrito en BD: Actualmente el carrito vive en el localStorage. A escala, el carrito debería estar ligado a la sesión del usuario en una base de datos (ej. PostgreSQL) para permitir una experiencia omnicanal (empezar la compra en el móvil y terminarla en la PC).

Monitoreo y Telemetría: Integraría Sentry para el tracking de errores en el cliente/servidor y Web Vitals para medir el rendimiento de la experiencia del usuario en tiempo real.

3. ¿Qué métrica de negocio mejoraría más con el componente de IA que implementaste y por qué?
El recomendador de productos relacionados (Opción A) impacta directa y positivamente en el AOV (Average Order Value / Ticket Promedio de Compra).

¿Por qué?
Al aprovechar la navegación del usuario e inyectar sugerencias contextuales ("También te puede interesar") en la página de detalle, estimulamos el Cross-selling (venta cruzada). Si un usuario entra a ver una joya y el recomendador de IA le sugiere anillos de la misma categoría que hacen juego, la fricción para descubrir nuevos productos desaparece. Esto aumenta la probabilidad de que el usuario agregue más de un artículo al carrito antes del checkout, elevando los ingresos totales sin necesidad de incrementar el Costo de Adquisición de Clientes (CAC).