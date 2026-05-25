# 🛍️ NYX eCommerce — Prueba Técnica Full Stack Semi Senior

Aplicación de eCommerce desarrollada con **Next.js (App Router)**, **TypeScript**, **Tailwind CSS** y **Zustand**, consumiendo la API pública de **FakeStore API**.

---

## 🚀 Stack Tecnológico

- ⚡ **Next.js 14+**
- 🔷 **TypeScript**
- 🎨 **Tailwind CSS**
- 🗂️ **Zustand** para manejo de estado
- 🌐 **FakeStore API**
- 🤖 Herramientas IA para apoyo en desarrollo y diseño

---

## 📦 Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone <tu-url-del-repositorio>
cd nyx-ecommerce
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar entorno de desarrollo

```bash
npm run dev
```

### 4. Abrir en el navegador

```txt
http://localhost:3000
```

---

## 🧠 Impacto de Negocio y Arquitectura

## 1. Herramientas de IA utilizadas

Durante el desarrollo de esta prueba técnica se utilizaron distintas herramientas de inteligencia artificial como apoyo para acelerar procesos de desarrollo, diseño y arquitectura.

### 🔹 Gemini

Utilizado como AI Copilot principal para:

- Resolución de dudas técnicas
- Generación de ideas de arquitectura
- Optimización de estructuras de componentes

### 🔹 GitHub Copilot

Utilizado para:

- Acelerar la escritura de interfaces TypeScript
- Crear estructuras base de componentes UI
- Mejorar productividad en tareas repetitivas

### 🔹 Stitch with Google

Utilizado para:

- Propuestas visuales de UI
- Exploración de paletas de colores
- Generación de ideas de diseño para la experiencia de usuario

### 🔹 Zustand + SSR Hydration Strategy

Se diseñó una estrategia personalizada para evitar errores de hidratación (`Hydration Mismatch`) al combinar:

- Server-Side Rendering (SSR)
- Persistencia en `localStorage`
- Estado global con Zustand

---

## 2. Escalabilidad para 10.000 usuarios diarios

Si este proyecto evolucionara a un eCommerce real con alto tráfico, se implementarían las siguientes mejoras:

### ⚡ Estrategia de Caché Avanzada

Actualmente el catálogo consulta la API en cada carga.

Para producción se implementaría:

- `unstable_cache` de Next.js
- Redis como capa de caché
- ISR (Incremental Static Regeneration)
- Revalidación por demanda

Esto reduciría:

- Tiempo de respuesta
- Consumo de APIs externas
- Carga sobre el servidor

---

### 📚 Paginación e Infinite Scroll

Actualmente todos los productos se cargan simultáneamente.

A escala se implementaría:

- Paginación server-side
- Lazy loading
- Infinite scroll optimizado

Con esto se mejora:

- Rendimiento
- UX
- Tiempo de carga inicial

---

### 🛒 Persistencia de Carrito en Base de Datos

Actualmente el carrito vive en `localStorage`.

En un entorno real se migraría a:

- PostgreSQL
- Redis Session Store
- Backend persistente asociado al usuario

Beneficios:

- Experiencia omnicanal
- Persistencia multi-dispositivo
- Recuperación de sesiones

---

### ☁️ Infraestructura y Observabilidad

También se considerarían mejoras como:

- CDN para assets estáticos
- Edge Functions
- Monitoring con Sentry
- Logs centralizados
- Rate limiting
- CI/CD automatizado

---

## 3. Métrica de negocio impactada por IA

### 🎯 Métrica principal: Ticket Promedio de Compra

El componente de IA implementado para recomendaciones de productos relacionados impacta directamente el:

- **Average Order Value (AOV)**
- Ticket promedio por compra

### ¿Por qué?

El sistema de recomendaciones contextuales:

- Sugiere productos complementarios
- Reduce fricción de descubrimiento
- Incentiva ventas cruzadas

#### Ejemplo

Si un usuario visualiza una joya y el sistema recomienda:

- anillos relacionados,
- accesorios complementarios,
- productos de la misma categoría,

la probabilidad de agregar múltiples productos al carrito aumenta significativamente.

---

## 📈 Beneficios de Negocio

Esto genera:

- Incremento de ingresos por sesión
- Mayor conversión
- Mejor experiencia de usuario
- Incremento del Lifetime Value (LTV)
- Sin aumentar el CAC (Costo de Adquisición de Clientes)

---

## ✅ Conclusión

La arquitectura actual cumple correctamente como prueba técnica y MVP funcional.

Sin embargo, las mejoras propuestas permitirían evolucionar el proyecto hacia una solución preparada para:

- alto tráfico,
- escalabilidad,
- persistencia robusta,
- y mejores métricas de negocio.

---

## 👨‍💻 Autor

Prueba técnica desarrollada para evaluación Full Stack Semi Senior.