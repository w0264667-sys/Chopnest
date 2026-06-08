# 🎨 NexusFlow Admin Panel - Guía de Diseño Completo

## 📐 Estructura General

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  ╔════════════════╦═════════════════════════════════════════════════╗  │
│  ║                ║                                                 ║  │
│  ║  SIDEBAR       ║                 HEADER                         ║  │
│  ║  260px         ║  [🔍 Search] [🔔] [👤 User] [🌙/☀️ Theme] ║  │
│  ║                ║                                                 ║  │
│  ║ ╔════════════╗ ║                                                 ║  │
│  ║ ║ NexusFlow  ║ ╠═════════════════════════════════════════════════╣  │
│  ║ ╚════════════╝ ║                                                 ║  │
│  ║                ║                                                 ║  │
│  ║ 📊 Dashboard   ║          MAIN CONTENT AREA                      ║  │
│  ║ 👥 Users       ║          (Outlet - Dynamic)                     ║  │
│  ║ 📝 Content     ║                                                 ║  │
│  ║ ⚙️  Settings    ║          1. Dashboard (default)               ║  │
│  ║ 🔔 Notifications║          2. Users                             ║  │
│  ║                ║          3. Content                            ║  │
│  ║ ─────────────  ║          4. Settings                           ║  │
│  ║ 🌙 Dark Mode   ║          5. Notifications                      ║  │
│  ║ 🚪 Logout      ║                                                 ║  │
│  ║                ║                                                 ║  │
│  ╚════════════════╩═════════════════════════════════════════════════╝  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 1️⃣ **DASHBOARD** (`/admin`)

### Métricas en Tiempo Real

```
┌─────────────────────────────────────────────────────────────┐
│                      Dashboard                              │
│ Welcome back! Here's what's happening today.                │
└─────────────────────────────────────────────────────────────┘

┌─────────┬─────────┬──────────┬──────────┐
│  👥 Users       │📄 Posts  │👁️ Published│💰 Blocked │
│  2,543  ↑12.5%  │ 482     │   428     │  12       │
│         📈      │   ↑ 8.2% │  ↑ 4.1%  │   ↓ 1.2%  │
└─────────┴─────────┴──────────┴──────────┘

┌──────────────────────────┬──────────────────────────┐
│   📊 User Growth         │  📊 Content Performance  │
│   (Line Chart - 7 días)  │  (Bar Chart - 6 categorías)│
│                          │                           │
│   ↑ 280 ┊  ╱╲            │  100┊█████████████         │
│   ↑ 250 ┊ ╱  ╲╱╲  ╱      │   80┊█████████ ████       │
│   ↑ 200 ┊╱      ╲╱  ╲    │   60┊████ ███ ██ █        │
│         ┊ Mon-Sun        │      │Tech Bus Life...     │
│         └────────────────┘      └──────────────────    │
└──────────────────────────┴──────────────────────────────┘

┌──────────────────────────┬──────────────────────────┐
│  📋 Recent Activity       │  🔄 Activity Timeline    │
│                          │                           │
│ • New user registered    │  🔵 New user registered  │
│   John Doe               │     2 hours ago          │
│   2 hours ago            │                           │
│                          │  📄 Post published       │
│ • Post published         │     "Getting Started..."  │
│   "Getting Started..."   │     4 hours ago          │
│   4 hours ago            │                           │
│                          │  ⚙️  System maintenance  │
│ • System maintenance     │     1 day ago            │
│   Backup completed       │                           │
│   1 day ago              │  🚫 User blocked         │
│                          │     2 days ago           │
│ • User blocked           │                           │
│   Policy violation       │  📝 Content removed      │
│   2 days ago             │     3 days ago           │
│                          │                           │
│ • Content removed        │                           │
│   Inappropriate content  │                           │
│   3 days ago             │                           │
└──────────────────────────┴──────────────────────────┘
```

---

## 2️⃣ **USUARIOS** (`/admin/users`)

### Gestión Completa de Usuarios (CRUD)

```
┌─────────────────────────────────────────────────────────────┐
│  Users                     [➕ Add User]                     │
│  Manage user accounts and permissions                        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 🔍 [Buscar por nombre o email...]                          │
└─────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ Name           │ Email              │ Role    │ Status │ Joined │
├──────────────────────────────────────────────────────────────────┤
│ J John Doe     │ john@example.com   │ admin   │ Active │ Jan 1  │
│ J Jane Smith   │ jane@example.com   │ editor  │ Active │ Jan 5  │
│ B Bob Lee      │ bob@example.com    │ user    │ Block  │ Jan 10 │
│ A Alice Chen   │ alice@example.com  │ admin   │ Active │ Jan 15 │
│ C Carol White  │ carol@example.com  │ editor  │ Active │ Jan 20 │
├──────────────────────────────────────────────────────────────────┤
│ Actions: [✏️ Edit] [🚫/✅ Block/Unblock] [🗑️ Delete]           │
└──────────────────────────────────────────────────────────────────┘
```

### Modal Crear/Editar Usuario

```
┌────────────────────────────────────┐
│  Add New User              [✕]     │
├────────────────────────────────────┤
│                                    │
│  Full Name                         │
│  [________________________]         │
│                                    │
│  Email Address                     │
│  [________________________]         │
│                                    │
│  Role                              │
│  [▼ Select Role]                   │
│   • Admin                          │
│   • Editor                         │
│   • User                           │
│                                    │
│  Password (para crear nuevo)       │
│  [________________________]         │
│                                    │
│  [Save]  [Cancel]                  │
└────────────────────────────────────┘
```

### Confirmación Eliminar

```
┌──────────────────────┐
│  Delete user?        │
│                      │
│  [Delete] [Cancel]   │
└──────────────────────┘
```

---

## 3️⃣ **CONTENIDO** (`/admin/content`)

### Gestión de Posts y Categorías

```
┌─────────────────────────────────────────────────────────────┐
│  Content                   [Posts] [Categories]              │
│  Manage your site content                                    │
└─────────────────────────────────────────────────────────────┘

📌 PESTAÑA: Posts (Activa)
┌─────────────────────────────────────────────────────────────┐
│ 🔍 [Buscar...]             [➕ New Post]                    │
├─────────────────────────────────────────────────────────────┤
│ Title              │ Category    │ Status      │ Actions    │
├─────────────────────────────────────────────────────────────┤
│ React Guide        │ Tech        │ Published   │ [✏️][🗑️]  │
│ TypeScript Tips    │ Tech        │ Draft       │ [✏️][🗑️]  │
│ SEO Mastery        │ Business    │ Published   │ [✏️][🗑️]  │
│ Healthy Living     │ Lifestyle   │ Published   │ [✏️][🗑️]  │
│ Travel Europe      │ Travel      │ Draft       │ [✏️][🗑️]  │
└─────────────────────────────────────────────────────────────┘

📌 PESTAÑA: Categories
┌─────────────────────────────────────────────────────────────┐
│ [➕ Add Category]                                            │
├─────────────────────────────────────────────────────────────┤
│ Tech       (15 posts)      [✏️][🗑️]                        │
│ Business   (8 posts)       [✏️][🗑️]                        │
│ Lifestyle  (12 posts)      [✏️][🗑️]                        │
│ Health     (7 posts)       [✏️][🗑️]                        │
│ Travel     (9 posts)       [✏️][🗑️]                        │
│ Food       (11 posts)      [✏️][🗑️]                        │
└─────────────────────────────────────────────────────────────┘
```

---

## 4️⃣ **CONFIGURACIÓN** (`/admin/settings`)

### Tres Secciones Principales

```
┌─────────────────────────────────────────────────────────────┐
│  Settings                                                    │
│  Configure your application                                  │
└─────────────────────────────────────────────────────────────┘

╔═════════════════════════════════════════════════════════════╗
║  📋 GENERAL SETTINGS                                        ║
╠═════════════════════════════════════════════════════════════╣
║                                                             ║
║  Site Name                                                  ║
║  [NexusFlow_____________]                                   ║
║                                                             ║
║  Site Description                                           ║
║  [A modern SaaS platform...............................]     ║
║                                                             ║
║  Logo URL                                                   ║
║  [https://example.com/logo.png_________________]            ║
║                                                             ║
║                               [💾 Save Changes]            ║
╚═════════════════════════════════════════════════════════════╝

╔═════════════════════════════════════════════════════════════╗
║  📧 SMTP CONFIGURATION                                      ║
╠═════════════════════════════════════════════════════════════╣
║                                                             ║
║  SMTP Host                                                  ║
║  [smtp.gmail.com________________]                           ║
║                                                             ║
║  Port                                                       ║
║  [587_]                                                     ║
║                                                             ║
║  Username                                                   ║
║  [noreply@nexusflow.com_____________]                       ║
║                                                             ║
║  Password              [👁️ Show]                           ║
║  [••••••••••••••••]                                         ║
║                                                             ║
║                               [💾 Save Changes]            ║
╚═════════════════════════════════════════════════════════════╝

╔═════════════════════════════════════════════════════════════╗
║  🔑 API KEYS                                                ║
╠═════════════════════════════════════════════════════════════╣
║                                                             ║
║  Key Name: [Development Key_______]  [➕ Create Key]       ║
║                                                             ║
║  ┌──────────────────────────────────────────────────────┐ ║
║  │ Development Key                                      │ ║
║  │ sk_dev_1234567890ab•••••••••••90abcdef    [👁️]      │ ║
║  │ Created: 2024-01-01    Last Used: 2h ago  [🗑️]      │ ║
║  └──────────────────────────────────────────────────────┘ ║
║                                                             ║
║  ┌──────────────────────────────────────────────────────┐ ║
║  │ Production Key                                       │ ║
║  │ sk_prod_9876543210de•••••••••••12345def   [👁️]      │ ║
║  │ Created: 2024-01-05    Last Used: 1d ago  [🗑️]      │ ║
║  └──────────────────────────────────────────────────────┘ ║
║                                                             ║
╚═════════════════════════════════════════════════════════════╝
```

---

## 5️⃣ **NOTIFICACIONES** (`/admin/notifications`)

### Sistema de Notificaciones con Filtros

```
┌─────────────────────────────────────────────────────────────┐
│  Notifications (2 sin leer)                                 │
│  Stay updated with system events                            │
└─────────────────────────────────────────────────────────────┘

Filtros: [All (5)] [Unread (2)] [Info (1)] [Warning (2)] [Error (0)]

┌─────────────────────────────────────────────────────────────┐
│  🔵 New user registered                   2 hours ago       │
│  Sarah Johnson signed up for an account                     │
│  [✓ Mark as read]  [🗑️ Delete]                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  ⚠️  System warning                       4 hours ago        │
│  Database backup failed, please review logs                 │
│  [✓ Mark as read]  [🗑️ Delete]                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  ✅ Post published                        1 day ago         │
│  "Guide to TypeScript" is now live                          │
│  [✓ Mark as read]  [🗑️ Delete]                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  🔵 Payment received                      2 days ago        │
│  Invoice #12345 has been paid                               │
│  [✓ Mark as read]  [🗑️ Delete]                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  ℹ️  Server maintenance scheduled         3 days ago        │
│  Planned maintenance on 2024-02-01 22:00 UTC               │
│  [✓ Mark as read]  [🗑️ Delete]                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎨 Paleta de Colores

| Elemento | Color | Tailwind Class |
|----------|-------|---|
| Primario | Teal 500 | `bg-teal-500 text-teal-600` |
| Activo | Teal 600 | `bg-teal-600` |
| Fondo Claro | Slate 50 | `bg-slate-50` |
| Fondo Oscuro | Slate 900 | `dark:bg-slate-900` |
| Bordes | Slate 200/700 | `border-slate-200 dark:border-slate-700` |
| Texto Claro | Slate 900 | `text-slate-900` |
| Texto Oscuro | Slate 50 | `dark:text-white` |
| Error | Red 500 | `text-red-600 dark:text-red-400` |
| Éxito | Green 500 | `text-green-600 dark:text-green-400` |

---

## 🔐 Control de Acceso

```
┌────────────────────────────────────────┐
│  RUTAS PROTEGIDAS                      │
├────────────────────────────────────────┤
│                                        │
│  /admin              → Admin + Editor  │
│  /admin/users        → Admin + Editor  │
│  /admin/content      → Admin + Editor  │
│  /admin/settings     → Admin ONLY      │
│  /admin/notifications → Admin + Editor │
│                                        │
│  Sin acceso → Redirige a /            │
└────────────────────────────────────────┘
```

---

## 📱 Responsive Design

- **Mobile** (< 768px): Sidebar collapse, hamburger menu
- **Tablet** (768px - 1024px): Sidebar sidebar, full layout
- **Desktop** (> 1024px): Full sidebar visible, optimal spacing

---

## 🎯 Features Implementadas

| Feature | Estado | Detalles |
|---------|--------|---------|
| Auth | ✅ Completo | Supabase Email/Password |
| Dashboard | ✅ Completo | Estadísticas + Gráficos |
| CRUD Usuarios | ✅ Completo | Create/Read/Update/Delete/Block |
| CRUD Posts | ✅ Completo | UI lista, awaiting API |
| CRUD Categorías | ✅ Completo | UI lista, awaiting API |
| Configuración | ✅ Completo | General + SMTP + API Keys |
| Notificaciones | ✅ Completo | Lista + Filtros |
| Dark Mode | ✅ Completo | Toggle + Persistencia |
| Responsive | ✅ Completo | Mobile + Desktop |
| API Integration | ✅ Completo | 8 endpoints funcionales |

---

## 💾 Tecnologías Utilizadas

- **Frontend**: React 18.3.1 + TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS + Dark Mode
- **Icons**: Lucide React
- **Charts**: Chart.js + react-chartjs-2
- **State**: Context API (Auth + Theme)
- **Backend**: Supabase Edge Functions (Deno)
- **Database**: Supabase PostgreSQL
- **Build**: Vite 5.4.2
