import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store/themeConfigSlice';
import IconCode from '../components/Icon/IconCode';
import IconDesktop from '../components/Icon/IconDesktop';
import IconBox from '../components/Icon/IconBox';
import IconSettings from '../components/Icon/IconSettings';
import IconChecks from '../components/Icon/IconChecks';
import IconStar from '../components/Icon/IconStar';
import IconSearch from '../components/Icon/IconSearch';
import IconInfoCircle from '../components/Icon/IconInfoCircle';
import IconArrowForward from '../components/Icon/IconArrowForward';
import IconServer from '../components/Icon/IconServer';
import IconBolt from '../components/Icon/IconBolt';
import IconBarChart from '../components/Icon/IconBarChart';
import IconCalendar from '../components/Icon/IconCalendar';
import IconChatDots from '../components/Icon/IconChatDots';
import IconMail from '../components/Icon/IconMail';
import IconUsers from '../components/Icon/IconUsers';
import IconClipboardText from '../components/Icon/IconClipboardText';
import IconFolder from '../components/Icon/IconFolder';

interface TechItem {
    name: string;
    version: string;
    category: string;
    description: string;
    badgeColor: string;
}

interface ComponentItem {
    name: string;
    category: string;
    path: string;
    description: string;
    tags: string[];
}

const techStack: TechItem[] = [
    { name: 'React', version: '^18.2.0', category: 'Core', description: 'Modern UI library with concurrent rendering and hooks', badgeColor: 'badge-outline-primary' },
    { name: 'TypeScript', version: '^4.9.3', category: 'Language', description: 'Typed JavaScript for robust development and compile-time safety', badgeColor: 'badge-outline-info' },
    { name: 'Vite', version: '^4.1.0', category: 'Build Tool', description: 'Next-generation lightning-fast frontend dev server & bundler', badgeColor: 'badge-outline-secondary' },
    { name: 'Tailwind CSS', version: '^3.3.2', category: 'Styling', description: 'Utility-first CSS framework with JIT engine, dark mode & RTL support', badgeColor: 'badge-outline-success' },
    { name: 'Redux Toolkit', version: '^1.8.5', category: 'State Management', description: 'Predictable global state container for themes, sidebar, and layout preferences', badgeColor: 'badge-outline-warning' },
    { name: 'React Router DOM', version: '^6.4.2', category: 'Routing', description: 'Declarative, client-side routing with nested layouts and lazy loading', badgeColor: 'badge-outline-danger' },
    { name: 'ApexCharts', version: '^3.37.1', category: 'Visualization', description: 'Interactive, responsive charts (Line, Bar, Donut, Area, Radial)', badgeColor: 'badge-outline-primary' },
    { name: 'Mantine DataTable', version: '^1.7.17', category: 'Data Tables', description: 'Feature-rich data table with sorting, pagination, search, and skin customizer', badgeColor: 'badge-outline-info' },
    { name: 'FullCalendar', version: '^6.1.4', category: 'Calendar', description: 'Full-featured drag-and-drop schedule, event manager, and day/week/month views', badgeColor: 'badge-outline-success' },
    { name: 'Formik & Yup', version: '^2.2.9 / ^0.32.11', category: 'Forms', description: 'Schema-based form validation and state management', badgeColor: 'badge-outline-warning' },
    { name: 'i18next', version: '^21.10.0', category: 'Internationalization', description: 'Multi-language translation engine with browser language detection', badgeColor: 'badge-outline-secondary' },
    { name: 'SweetAlert2', version: '^11.6.8', category: 'Alerts & Dialogs', description: 'Customizable, animated, responsive modal and toast popup system', badgeColor: 'badge-outline-danger' },
    { name: 'Quill & SimpleMDE', version: '^2.0.0 / ^5.2.0', category: 'Editors', description: 'Rich text WYSIWYG editor and Markdown editor', badgeColor: 'badge-outline-primary' },
    { name: 'SortableJS & React Sortable', version: '^1.15.0 / ^6.1.4', category: 'Interactivity', description: 'Drag-and-drop reordering library for kanban scrumboards and lists', badgeColor: 'badge-outline-info' },
    { name: 'Swiper', version: '^8.4.4', category: 'UI', description: 'Modern touch slider and carousel component', badgeColor: 'badge-outline-success' },
    { name: 'React Flatpickr', version: '^3.10.13', category: 'Inputs', description: 'Lightweight date and time range picker component', badgeColor: 'badge-outline-secondary' },
    { name: 'Headless UI', version: '^1.7.3', category: 'Accessible UI', description: 'Unstyled, fully accessible UI components (dialogs, menus, transitions)', badgeColor: 'badge-outline-warning' },
    { name: 'React Perfect Scrollbar', version: '^1.5.8', category: 'UI', description: 'Cross-browser smooth custom scrollbars', badgeColor: 'badge-outline-primary' },
];

const componentsCatalog: ComponentItem[] = [
    // Apps
    { name: 'Sales Dashboard', category: 'Dashboards', path: '/', description: 'Revenue metrics, total orders, sales analytics, and transaction log', tags: ['Dashboard', 'CRM', 'Analytics'] },
    { name: 'Analytics Dashboard', category: 'Dashboards', path: '/analytics', description: 'Visitor traffic, bounce rates, audience demographics, and geographic charts', tags: ['Dashboard', 'Traffic', 'ApexCharts'] },
    { name: 'Finance Dashboard', category: 'Dashboards', path: '/finance', description: 'Cash flow, account balances, expense tracking, and invoice breakdown', tags: ['Finance', 'Expenses', 'Reports'] },
    { name: 'Crypto Dashboard', category: 'Dashboards', path: '/crypto', description: 'Cryptocurrency market watch, portfolio balance, and trading history', tags: ['Crypto', 'Bitcoin', 'Market'] },
    { name: 'Invoice Management', category: 'Apps', path: '/apps/invoice/list', description: 'List, Add, Edit, and Preview invoices with printable templates', tags: ['Invoices', 'Billing', 'Print'] },
    { name: 'Scrumboard / Kanban', category: 'Apps', path: '/apps/scrumboard', description: 'Drag-and-drop project kanban board with columns, task cards, and tagging', tags: ['Kanban', 'Drag & Drop', 'Tasks'] },
    { name: 'Chat Application', category: 'Apps', path: '/apps/chat', description: 'Real-time conversational UI with contact list, message bubbles, and attachments', tags: ['Chat', 'Messaging', 'Social'] },
    { name: 'Mailbox', category: 'Apps', path: '/apps/mailbox', description: 'Full email client interface with inbox, star, trash, compose, and attachments', tags: ['Mail', 'Email', 'Inbox'] },
    { name: 'Notes App', category: 'Apps', path: '/apps/notes', description: 'Sticky notes manager with color tags, search, and categorized views', tags: ['Notes', 'Productivity', 'Sticky'] },
    { name: 'Todo List', category: 'Apps', path: '/apps/todolist', description: 'Task checklist with priorities, due dates, completion states, and filters', tags: ['Todo', 'Tasks', 'Checklist'] },
    { name: 'Calendar', category: 'Apps', path: '/apps/calendar', description: 'Interactive schedule with FullCalendar integration, event modal, and time grids', tags: ['Calendar', 'Schedule', 'Events'] },
    { name: 'Contacts Manager', category: 'Apps', path: '/apps/contacts', description: 'Customer & team directory with grid/list toggle, modal editing, and avatars', tags: ['Contacts', 'CRM', 'Users'] },

    // Components
    { name: 'Tabs', category: 'UI Components', path: '/components/tabs', description: 'Line, border, vertical, pill, and icon tabs with animated transitions', tags: ['Tabs', 'Navigation', 'Pills'] },
    { name: 'Accordions', category: 'UI Components', path: '/components/accordions', description: 'Expandable collapsibles with single and multi-panel support', tags: ['Accordion', 'Collapsible', 'FAQ'] },
    { name: 'Modals', category: 'UI Components', path: '/components/modals', description: 'Dialog overlays, animated slide-ins, fullscreen, and custom sizes', tags: ['Modal', 'Dialog', 'Popup'] },
    { name: 'Cards', category: 'UI Components', path: '/components/cards', description: 'Content containers with headers, footers, images, and action badges', tags: ['Cards', 'Layout', 'Containers'] },
    { name: 'Carousel', category: 'UI Components', path: '/components/carousel', description: 'Touch-friendly Swiper slider with pagination, thumbnails, and autoplay', tags: ['Carousel', 'Slider', 'Swiper'] },
    { name: 'SweetAlert', category: 'UI Components', path: '/components/sweetalert', description: 'Custom styled confirmation prompts, success dialogs, and toast messages', tags: ['Alerts', 'SweetAlert2', 'Toast'] },
    { name: 'Timeline', category: 'UI Components', path: '/components/timeline', description: 'Vertical milestone and audit history timelines with badges and icons', tags: ['Timeline', 'History', 'Milestones'] },
    { name: 'Notifications', category: 'UI Components', path: '/components/notifications', description: 'Toasts, snackbars, and slide-in notifications with position customization', tags: ['Toast', 'Notify', 'Feedback'] },
    { name: 'Pricing Tables', category: 'UI Components', path: '/components/pricing-table', description: 'Subscription tier cards with annual/monthly toggles and feature checklists', tags: ['Pricing', 'Billing', 'Tiers'] },
    { name: 'LightBox Gallery', category: 'UI Components', path: '/components/lightbox', description: 'Image gallery with zoom, fullscreen preview, and navigation controls', tags: ['Gallery', 'Images', 'Lightbox'] },

    // Elements
    { name: 'Alerts', category: 'UI Elements', path: '/elements/alerts', description: 'Standard, outline, with icons, dismissible, and custom colored alerts', tags: ['Alerts', 'Feedback', 'Banners'] },
    { name: 'Badges & Indicators', category: 'UI Elements', path: '/elements/badges', description: 'Status tags, numeric badges, notification dots, and pill styles', tags: ['Badges', 'Tags', 'Status'] },
    { name: 'Breadcrumbs', category: 'UI Elements', path: '/elements/breadcrumbs', description: 'Navigation path trails with separators and icon support', tags: ['Navigation', 'Breadcrumbs', 'Hierarchy'] },
    { name: 'Buttons & Button Groups', category: 'UI Elements', path: '/elements/buttons', description: 'Solid, outline, gradient, rounded, sizes, icons, and segmented groups', tags: ['Buttons', 'Actions', 'Controls'] },
    { name: 'Dropdowns', category: 'UI Elements', path: '/elements/dropdown', description: 'Custom dropdown menus with popper alignment and hover/click triggers', tags: ['Dropdown', 'Menus', 'Popper'] },
    { name: 'Progress Bars', category: 'UI Elements', path: '/elements/progress-bar', description: 'Animated, striped, multi-colored, and radial progress indicators', tags: ['Progress', 'Loading', 'Indicators'] },
    { name: 'Tooltips & Popovers', category: 'UI Elements', path: '/elements/tooltips', description: 'Contextual tooltips powered by Tippy.js with rich placement options', tags: ['Tooltips', 'Tippy', 'Hover'] },
    { name: 'Treeview', category: 'UI Elements', path: '/elements/treeview', description: 'Hierarchical file tree and nested directory navigation', tags: ['Treeview', 'Directory', 'Hierarchy'] },

    // DataTables
    { name: 'Basic & Advanced Tables', category: 'DataTables', path: '/datatables/advanced', description: 'Mantine DataTable with pagination, sorting, search, and custom cell renders', tags: ['Table', 'Sorting', 'Pagination'] },
    { name: 'Checkbox Selection Table', category: 'DataTables', path: '/datatables/checkbox', description: 'Batch row selection, bulk actions, and select-all controls', tags: ['Table', 'Checkbox', 'Bulk Action'] },
    { name: 'Export to Excel & CSV', category: 'DataTables', path: '/datatables/export', description: 'One-click export of table datasets to CSV, Excel, and Print formats', tags: ['Export', 'Excel', 'CSV'] },
    { name: 'Column Chooser & Filtering', category: 'DataTables', path: '/datatables/column-chooser', description: 'Toggle column visibility on the fly and range search by date/number', tags: ['Columns', 'Filter', 'Customization'] },

    // Forms
    { name: 'Form Validation', category: 'Forms', path: '/forms/validation', description: 'Strict validation with Formik and Yup schema including instant error messages', tags: ['Formik', 'Yup', 'Validation'] },
    { name: 'Input Mask & Select2', category: 'Forms', path: '/forms/input-mask', description: 'Formatted phone, credit card, currency masks, and searchable multi-selects', tags: ['Masks', 'Select2', 'Inputs'] },
    { name: 'Rich Text & Markdown', category: 'Forms', path: '/forms/quill-editor', description: 'Quill WYSIWYG editor and EasyMDE Markdown editor with live preview', tags: ['Editor', 'Quill', 'Markdown'] },
    { name: 'Date Range Pickers', category: 'Forms', path: '/forms/date-picker', description: 'Single date, date-time, and range selection with Flatpickr', tags: ['Flatpickr', 'Date', 'Picker'] },
    { name: 'File Upload & Preview', category: 'Forms', path: '/forms/file-upload', description: 'Drag-and-drop file uploader with image preview and remove actions', tags: ['Upload', 'Files', 'Images'] },

    // User & Auth
    { name: 'User Profile & Settings', category: 'Users & Auth', path: '/users/profile', description: 'User account settings, preferences, avatar management, and security tabs', tags: ['Profile', 'Settings', 'Preferences'] },
    { name: 'Auth Screens (Boxed & Cover)', category: 'Users & Auth', path: '/auth/boxed-signin', description: 'Sign In, Sign Up, Password Recovery, and Screen Lock layouts', tags: ['Auth', 'Login', 'Register'] },
    { name: 'Knowledge Base & FAQ', category: 'Pages', path: '/pages/knowledge-base', description: 'Help center with category cards, accordion FAQs, and article search', tags: ['Help', 'FAQ', 'Docs'] },
];

const Information = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [activeTab, setActiveTab] = useState<'catalog' | 'tech' | 'architecture' | 'guide'>('catalog');

    useEffect(() => {
        dispatch(setPageTitle('Template Information & Tech Directory'));
    }, [dispatch]);

    const categories = ['All', 'Dashboards', 'Apps', 'UI Components', 'UI Elements', 'DataTables', 'Forms', 'Users & Auth', 'Pages'];

    const filteredComponents = componentsCatalog.filter((item) => {
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        const matchesSearch =
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="space-y-6">
            {/* Header Hero Section */}
            <div className="panel bg-gradient-to-r from-primary to-indigo-700 text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-lg">
                <div className="relative z-10 max-w-3xl space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold uppercase tracking-wider">
                        <IconStar className="w-3.5 h-3.5 text-yellow-300" />
                        <span>Vristo React CRM & Admin Dashboard</span>
                    </div>
                    <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Template Architecture & Catalog</h1>
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                        A modern, enterprise-ready React 18 admin template built with Vite, TypeScript, Tailwind CSS, and Redux Toolkit.
                        Fully responsive with dark/light themes, multi-language internationalization (i18n), and comprehensive pre-built apps and UI elements.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                        <Link to="/" className="btn btn-dark shadow-md">
                            Go to Dashboard
                        </Link>
                        <button
                            type="button"
                            onClick={() => setActiveTab('tech')}
                            className="btn btn-outline-white"
                        >
                            View Tech Stack
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab('architecture')}
                            className="btn btn-outline-white"
                        >
                            Folder Structure
                        </button>
                    </div>
                </div>
                {/* Decorative background shapes */}
                <div className="absolute -right-10 -bottom-10 w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
                <div className="absolute right-20 top-6 opacity-10 pointer-events-none hidden lg:block">
                    <IconDesktop className="w-64 h-64" />
                </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="panel flex items-center gap-4 border border-[#e0e6ed] dark:border-[#1b2e4b] hover:shadow-md transition">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <IconCode className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-xs uppercase text-gray-500 font-semibold">Core Framework</div>
                        <div className="text-xl font-bold text-black dark:text-white-light">React 18 + Vite 4</div>
                        <div className="text-xs text-primary font-medium">TypeScript Enabled</div>
                    </div>
                </div>

                <div className="panel flex items-center gap-4 border border-[#e0e6ed] dark:border-[#1b2e4b] hover:shadow-md transition">
                    <div className="w-12 h-12 rounded-xl bg-success/10 text-success flex items-center justify-center shrink-0">
                        <IconBox className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-xs uppercase text-gray-500 font-semibold">Ready Applications</div>
                        <div className="text-xl font-bold text-black dark:text-white-light">8 Full Apps</div>
                        <div className="text-xs text-success font-medium">CRM, Mail, Chat, Invoices</div>
                    </div>
                </div>

                <div className="panel flex items-center gap-4 border border-[#e0e6ed] dark:border-[#1b2e4b] hover:shadow-md transition">
                    <div className="w-12 h-12 rounded-xl bg-warning/10 text-warning flex items-center justify-center shrink-0">
                        <IconServer className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-xs uppercase text-gray-500 font-semibold">Components & UI</div>
                        <div className="text-xl font-bold text-black dark:text-white-light">30+ Modules</div>
                        <div className="text-xs text-warning font-medium">Tailwind Styled & Themed</div>
                    </div>
                </div>

                <div className="panel flex items-center gap-4 border border-[#e0e6ed] dark:border-[#1b2e4b] hover:shadow-md transition">
                    <div className="w-12 h-12 rounded-xl bg-info/10 text-info flex items-center justify-center shrink-0">
                        <IconBolt className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-xs uppercase text-gray-500 font-semibold">State & Styling</div>
                        <div className="text-xl font-bold text-black dark:text-white-light">Redux + Tailwind</div>
                        <div className="text-xs text-info font-medium">Dark Mode & RTL Ready</div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-[#e0e6ed] dark:border-[#1b2e4b] gap-2 overflow-x-auto">
                <button
                    type="button"
                    onClick={() => setActiveTab('catalog')}
                    className={`py-3 px-5 border-b-2 font-semibold text-sm flex items-center gap-2 whitespace-nowrap transition-colors ${
                        activeTab === 'catalog'
                            ? 'border-primary text-primary dark:text-primary'
                            : 'border-transparent text-gray-500 hover:text-black dark:hover:text-white'
                    }`}
                >
                    <IconBox className="w-4 h-4" />
                    <span>Component & Page Catalog ({componentsCatalog.length})</span>
                </button>

                <button
                    type="button"
                    onClick={() => setActiveTab('tech')}
                    className={`py-3 px-5 border-b-2 font-semibold text-sm flex items-center gap-2 whitespace-nowrap transition-colors ${
                        activeTab === 'tech'
                            ? 'border-primary text-primary dark:text-primary'
                            : 'border-transparent text-gray-500 hover:text-black dark:hover:text-white'
                    }`}
                >
                    <IconCode className="w-4 h-4" />
                    <span>Tech Stack & Libraries ({techStack.length})</span>
                </button>

                <button
                    type="button"
                    onClick={() => setActiveTab('architecture')}
                    className={`py-3 px-5 border-b-2 font-semibold text-sm flex items-center gap-2 whitespace-nowrap transition-colors ${
                        activeTab === 'architecture'
                            ? 'border-primary text-primary dark:text-primary'
                            : 'border-transparent text-gray-500 hover:text-black dark:hover:text-white'
                    }`}
                >
                    <IconFolder className="w-4 h-4" />
                    <span>Project Architecture</span>
                </button>

                <button
                    type="button"
                    onClick={() => setActiveTab('guide')}
                    className={`py-3 px-5 border-b-2 font-semibold text-sm flex items-center gap-2 whitespace-nowrap transition-colors ${
                        activeTab === 'guide'
                            ? 'border-primary text-primary dark:text-primary'
                            : 'border-transparent text-gray-500 hover:text-black dark:hover:text-white'
                    }`}
                >
                    <IconInfoCircle className="w-4 h-4" />
                    <span>Developer Cheatsheet</span>
                </button>
            </div>

            {/* TAB 1: CATALOG */}
            {activeTab === 'catalog' && (
                <div className="space-y-5">
                    {/* Search and Category Filters */}
                    <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
                        <div className="relative flex-1 max-w-md">
                            <input
                                type="text"
                                placeholder="Search pages, components, tags (e.g., invoice, modal, chart)..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="form-input ltr:pl-10 rtl:pr-10"
                            />
                            <span className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <IconSearch className="w-4 h-4" />
                            </span>
                        </div>

                        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`btn btn-sm ${
                                        selectedCategory === cat ? 'btn-primary' : 'btn-outline-primary'
                                    } rounded-full whitespace-nowrap`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Catalog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredComponents.map((item) => (
                            <div
                                key={item.path + item.name}
                                className="panel border border-[#e0e6ed] dark:border-[#1b2e4b] hover:border-primary dark:hover:border-primary transition-all flex flex-col justify-between group p-5 rounded-xl"
                            >
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between gap-2">
                                        <span className="badge badge-outline-primary text-xs font-semibold">{item.category}</span>
                                        <span className="text-xs text-gray-400 font-mono">{item.path}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-black dark:text-white-light group-hover:text-primary transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-normal">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        {item.tags.map((tag) => (
                                            <span key={tag} className="badge bg-gray-100 text-gray-700 dark:bg-dark dark:text-gray-300 text-[10px]">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="pt-4 mt-2 border-t border-[#f1f2f3] dark:border-[#191e3a]">
                                    <Link
                                        to={item.path}
                                        className="btn btn-sm btn-primary w-full inline-flex items-center justify-center gap-1.5"
                                    >
                                        <span>Open Page Demo</span>
                                        <IconArrowForward className="w-3.5 h-3.5 rtl:rotate-180" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredComponents.length === 0 && (
                        <div className="panel p-12 text-center text-gray-500">
                            <IconInfoCircle className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                            <p className="text-base font-semibold">No components or pages matched your search filter.</p>
                            <button
                                type="button"
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedCategory('All');
                                }}
                                className="btn btn-outline-primary btn-sm mt-3"
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            )}

            {/* TAB 2: TECH STACK */}
            {activeTab === 'tech' && (
                <div className="panel space-y-5">
                    <div>
                        <h2 className="text-xl font-bold text-black dark:text-white-light">Installed Technologies & Dependencies</h2>
                        <p className="text-sm text-gray-500">Core frameworks, utility libraries, and UI packages configured in package.json.</p>
                    </div>

                    <div className="table-responsive">
                        <table className="table-hover">
                            <thead>
                                <tr>
                                    <th>Package / Library</th>
                                    <th>Category</th>
                                    <th>Installed Version</th>
                                    <th>Usage / Purpose</th>
                                </tr>
                            </thead>
                            <tbody>
                                {techStack.map((tech) => (
                                    <tr key={tech.name}>
                                        <td className="font-semibold text-black dark:text-white-light">{tech.name}</td>
                                        <td>
                                            <span className={`badge ${tech.badgeColor}`}>{tech.category}</span>
                                        </td>
                                        <td>
                                            <code className="text-xs bg-gray-100 dark:bg-dark px-2 py-0.5 rounded font-mono text-primary font-bold">
                                                {tech.version}
                                            </code>
                                        </td>
                                        <td className="text-sm text-gray-600 dark:text-gray-300">{tech.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* TAB 3: ARCHITECTURE */}
            {activeTab === 'architecture' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="panel space-y-4">
                        <h2 className="text-xl font-bold text-black dark:text-white-light flex items-center gap-2">
                            <IconFolder className="w-5 h-5 text-primary" />
                            Directory Hierarchy
                        </h2>
                        <div className="font-mono text-xs bg-gray-50 dark:bg-black/40 p-4 rounded-xl space-y-1 text-gray-700 dark:text-gray-300 border border-[#e0e6ed] dark:border-[#1b2e4b]">
                            <div>📁 src/</div>
                            <div className="pl-4">├── 📁 assets/ <span className="text-gray-400"># CSS, fonts, SVG graphics</span></div>
                            <div className="pl-4">├── 📁 components/ <span className="text-gray-400"># Shared layouts, icons & portals</span></div>
                            <div className="pl-8">│   ├── 📁 Icon/ <span className="text-gray-400"># 150+ Modular SVG icon components</span></div>
                            <div className="pl-8">│   └── 📁 Layouts/ <span className="text-gray-400"># Header, Sidebar, Footer, BlankLayout</span></div>
                            <div className="pl-4">├── 📁 pages/ <span className="text-gray-400"># Application views & route targets</span></div>
                            <div className="pl-8">│   ├── 📁 Apps/ <span className="text-gray-400"># CRM, Invoice, Mail, Chat, Notes, Todo</span></div>
                            <div className="pl-8">│   ├── 📁 Components/ <span className="text-gray-400"># Modals, Tabs, Carousel, SweetAlert</span></div>
                            <div className="pl-8">│   ├── 📁 DataTables/ <span className="text-gray-400"># 11 Mantine DataTable variants</span></div>
                            <div className="pl-8">│   ├── 📁 Elements/ <span className="text-gray-400"># Badges, Buttons, Tooltips, Treeview</span></div>
                            <div className="pl-8">│   ├── 📁 Forms/ <span className="text-gray-400"># Validation, Masks, Wizards, Editors</span></div>
                            <div className="pl-8">│   └── 📁 Users/ <span className="text-gray-400"># Profile & Account Settings</span></div>
                            <div className="pl-4">├── 📁 router/ <span className="text-gray-400"># React Router configuration & routes.tsx</span></div>
                            <div className="pl-4">├── 📁 store/ <span className="text-gray-400"># Redux Toolkit themeConfigSlice</span></div>
                            <div className="pl-4">├── 📄 i18n.ts <span className="text-gray-400"># Multi-lingual locale definitions</span></div>
                            <div className="pl-4">├── 📄 main.tsx <span className="text-gray-400"># Application mount & provider tree</span></div>
                            <div className="pl-4">└── 📄 tailwind.css <span className="text-gray-400"># Tailwind directives and custom theme rules</span></div>
                        </div>
                    </div>

                    <div className="panel space-y-4">
                        <h2 className="text-xl font-bold text-black dark:text-white-light flex items-center gap-2">
                            <IconSettings className="w-5 h-5 text-primary" />
                            Core Architecture Highlights
                        </h2>

                        <div className="space-y-3">
                            <div className="p-3.5 rounded-lg border border-[#e0e6ed] dark:border-[#1b2e4b] bg-white dark:bg-black/20">
                                <div className="font-semibold text-black dark:text-white flex items-center gap-2">
                                    <IconChecks className="w-4 h-4 text-success" />
                                    Dynamic Layout System
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                    Supports both <code>DefaultLayout</code> (Sidebar, Header, Footer, Theme Customizer) and <code>BlankLayout</code> (used for Auth, 404, and splash screens).
                                </p>
                            </div>

                            <div className="p-3.5 rounded-lg border border-[#e0e6ed] dark:border-[#1b2e4b] bg-white dark:bg-black/20">
                                <div className="font-semibold text-black dark:text-white flex items-center gap-2">
                                    <IconChecks className="w-4 h-4 text-success" />
                                    Live Theme Customizer
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                    On-the-fly toggling between Light, Dark, and System modes, Boxed vs Full layouts, LTR vs RTL text orientation, and semi-dark sidebar themes.
                                </p>
                            </div>

                            <div className="p-3.5 rounded-lg border border-[#e0e6ed] dark:border-[#1b2e4b] bg-white dark:bg-black/20">
                                <div className="font-semibold text-black dark:text-white flex items-center gap-2">
                                    <IconChecks className="w-4 h-4 text-success" />
                                    Lazy Loaded Routes & Code Splitting
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                    All page modules are lazy-loaded with <code>React.lazy</code> and wrapped in Suspense boundaries for minimal initial bundle size and instant navigation.
                                </p>
                            </div>

                            <div className="p-3.5 rounded-lg border border-[#e0e6ed] dark:border-[#1b2e4b] bg-white dark:bg-black/20">
                                <div className="font-semibold text-black dark:text-white flex items-center gap-2">
                                    <IconChecks className="w-4 h-4 text-success" />
                                    Type-Safe State Management
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                    Redux Toolkit manages layout persistence in local storage with TypeScript interfaces (<code>IRootState</code>).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* TAB 4: DEVELOPER GUIDE */}
            {activeTab === 'guide' && (
                <div className="panel space-y-6">
                    <div>
                        <h2 className="text-xl font-bold text-black dark:text-white-light">Developer Quick Reference & How-Tos</h2>
                        <p className="text-sm text-gray-500">Essential commands and workflows for building and extending this Vristo template.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border border-[#e0e6ed] dark:border-[#1b2e4b] rounded-xl p-5 space-y-3">
                            <h3 className="font-bold text-base text-black dark:text-white-light flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">1</span>
                                CLI Commands
                            </h3>
                            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-xs space-y-2">
                                <div><span className="text-gray-400"># Start local Vite development server</span></div>
                                <div className="text-success">npm run dev</div>
                                <div className="pt-1"><span className="text-gray-400"># Typecheck and build for production</span></div>
                                <div className="text-success">npm run build</div>
                                <div className="pt-1"><span className="text-gray-400"># Preview production build locally</span></div>
                                <div className="text-success">npm run preview</div>
                            </div>
                        </div>

                        <div className="border border-[#e0e6ed] dark:border-[#1b2e4b] rounded-xl p-5 space-y-3">
                            <h3 className="font-bold text-base text-black dark:text-white-light flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">2</span>
                                How to Add a New Route
                            </h3>
                            <ol className="text-xs text-gray-600 dark:text-gray-300 space-y-2 list-decimal list-inside">
                                <li>Create your component in <code>src/pages/YourPage.tsx</code>.</li>
                                <li>Open <code>src/router/routes.tsx</code> and add lazy import:
                                    <div className="bg-gray-100 dark:bg-dark p-2 rounded mt-1 font-mono text-[11px]">
                                        const YourPage = lazy(() =&gt; import('../pages/YourPage'));
                                    </div>
                                </li>
                                <li>Add the route object inside the <code>routes</code> array:
                                    <div className="bg-gray-100 dark:bg-dark p-2 rounded mt-1 font-mono text-[11px]">
                                        &#123; path: '/your-page', element: &lt;YourPage /&gt; &#125;
                                    </div>
                                </li>
                                <li>Add navigation item into <code>src/components/Layouts/Sidebar.tsx</code>.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Information;
