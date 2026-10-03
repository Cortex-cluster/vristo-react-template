# Vristo React CRM & Admin Dashboard Template

A modern, responsive React 18 admin dashboard and CRM template powered by **Vite**, **TypeScript**, **Tailwind CSS**, and **Redux Toolkit**.

## 🚀 Features

- **React 18 & TypeScript**: Robust, concurrent rendering with full type safety.
- **Lightning-fast Dev Server**: Powered by Vite 4 with instant Hot Module Replacement (HMR).
- **Tailwind CSS 3**: Clean utility-first styling with dark/light mode toggle and RTL layout support.
- **State Management**: Redux Toolkit for theme configurations and global states.
- **Data Tables**: Mantine DataTable integration with sorting, pagination, search, column chooser, and Excel/CSV export.
- **Rich Charts**: ApexCharts suite (Line, Bar, Donut, Area, and Radial).
- **Interactive Apps**:
  - CRM Sales, Analytics, Finance, and Crypto Dashboards
  - Full Invoice Manager (List, Add, Edit, Preview)
  - Drag-and-Drop Scrumboard / Kanban
  - Chat & Real-Time Messaging UI
  - Mailbox Client
  - Sticky Notes Manager
  - Todo Checklist
  - FullCalendar Event Scheduler
  - Contacts Directory
- **Forms & Inputs**: Formik + Yup schema validation, Quill WYSIWYG, SimpleMDE Markdown, Flatpickr date range pickers, and Input Masks.
- **30+ UI Elements & Components**: Modals, Tabs, Accordions, Lightbox, Alerts, SweetAlert2, Tippy.js tooltips, and 150+ modular SVG icons.
- **Dedicated `/information` Page**: Built-in template directory cataloging all technologies, libraries, components, and architecture guides.

---

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev -- --host
```
The application will be live at: `http://localhost:5173/`

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📖 Template Information Page

Navigate to [`/information`](http://localhost:5173/information) in the browser or click **Template Info** at the top of the sidebar navigation to explore:
- Comprehensive breakdown of all installed packages & version matrix
- Searchable & filterable catalog of all pre-built apps and UI components
- Direct demo links to test every page
- Architecture & directory structure documentation
- Developer cheatsheet and guides

---

## 📁 Project Structure

```
src/
├── assets/         # Fonts, global CSS, SVGs
├── components/     # Reusable components, icons, and layout frames
│   ├── Icon/       # 150+ modular SVG icon components
│   └── Layouts/    # Sidebar, Header, Footer, Default & Blank Layouts
├── pages/          # Application views, dashboards, and forms
│   ├── Apps/       # CRM Apps (Mail, Chat, Scrumboard, Invoice, Calendar)
│   ├── Components/ # UI components (Modals, Tabs, Carousel, etc.)
│   ├── DataTables/ # Mantine DataTable variants
│   ├── Elements/   # UI elements (Badges, Buttons, Tooltips, etc.)
│   ├── Forms/      # Formik validation, editors, masks, datepickers
│   └── Information.tsx # Template directory and technical guide
├── router/         # React Router v6 route configuration
└── store/          # Redux Toolkit theme & state slices
```
