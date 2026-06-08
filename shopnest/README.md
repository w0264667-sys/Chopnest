# ShopNest 🛍️

E-commerce mobile-first completo con panel de administración avanzado, bots de IA y sistema de ventas por WhatsApp/Telegram.

## Stack Tecnológico
- **Frontend**: React 18 + Vite + TypeScript/JSX
- **Estilos**: Tailwind CSS + shadcn/ui
- **Animaciones**: Framer Motion
- **Backend**: Base44 SDK (base de datos, auth, integraciones)
- **Estado**: TanStack Query + cartStore (localStorage)
- **Bots IA**: Base44 Agents (dev_creative_bot + shopnest_bot)

## Instalación Rápida

```bash
# 1. Instala dependencias
npm install

# 2. Instala componentes shadcn/ui (necesarios para la UI)
npx shadcn@latest init
npx shadcn@latest add button input label textarea select switch dialog badge card toast sheet slider progress scroll-area separator tabs

# 3. Configura variables de entorno
cp .env.example .env
# Edita .env con tu App ID de Base44

# 4. Ejecuta en desarrollo
npm run dev
```

## Variables de Entorno
```
VITE_BASE44_APP_ID=tu_app_id_aqui
```
Obtén tu App ID en: https://base44.com

## Estructura del Proyecto
```
src/
├── api/          → Cliente Base44
├── agents/       → Configuración bots IA (JSON)
├── components/
│   ├── shop/     → Componentes tienda (ProductCard, Cart, etc.)
│   ├── payment/  → Diseños de tarjeta (Classic, Gradient, Glass, Metal)
│   └── ui/       → shadcn/ui components
├── entities/     → Esquemas JSON de la base de datos
├── lib/          → cartStore, emailService, AuthContext, utils
└── pages/
    ├── admin/    → Panel de administración completo
    └── *.jsx     → Páginas del usuario (Home, Cart, Orders, etc.)
```

## Páginas del Usuario
| Ruta | Descripción |
|------|-------------|
| / | Home con carrusel, categorías y productos |
| /search | Búsqueda con filtros |
| /product/:id | Detalle de producto + reseñas |
| /cart | Carrito con cupones |
| /checkout | Checkout 3 pasos (dirección, pago, confirmación) |
| /order-success | Confirmación de pedido + PDF factura |
| /orders | Historial de pedidos + rastreo |
| /favorites | Productos favoritos |
| /vouchers | Cupones disponibles |
| /profile | Perfil + avatar + modo oscuro |
| /payment-methods | Métodos de pago guardados |
| /about | Sobre nosotros + contacto + mapa |

## Panel Admin (/admin)
| Módulo | Función |
|--------|---------|
| Dashboard | KPIs y últimos pedidos |
| Bot IA | Chat con dev_creative_bot |
| Bot Ventas | WhatsApp & Telegram (shopnest_bot) |
| Productos | CRUD + categorías + reseñas IA |
| Pedidos | Gestión + tracking + estados |
| Cupones | CRUD de descuentos |
| Banners | Hasta 8 banners + generación IA |
| Diseño Pago | 4 diseños de tarjeta |
| Notificaciones | Push a usuarios |
| Plantillas Email | Welcome + confirmación pedido |
| Temas | 6 paletas de color |
| Ajustes | Branding, contacto, redes, envío |
| Import Masivo | 30+ productos demo |
| Reseñas Masivas | Generador de reseñas IA |
| Exportar | Backup JSON/CSV por módulo |

## Bots IA
- **dev_creative_bot**: Gestión creativa del sitio (banners, productos, ofertas)
- **shopnest_bot**: Asistente de ventas para WhatsApp & Telegram

## Despliegue en GitHub + Vercel (Gratis)
```bash
git init
git add .
git commit -m "ShopNest inicial"
git remote add origin https://github.com/tuusuario/shopnest.git
git push -u origin main
```
Luego conecta el repo en https://vercel.com y agrega VITE_BASE44_APP_ID.

## Notas
- El módulo de pago (Checkout) guarda datos de tarjeta en Base44 — en producción usa Stripe.
- Los bots requieren plan Base44 con créditos de integración activos.
- El bot de WhatsApp usa la API de Base44 Agents.
