# Gideon Boxing Gym Website

## Overview

A single-page marketing website for Gideon Boxing gym built with React frontend and Express backend. The site features smooth scroll navigation, animated sections, a contact inquiry form, and an interactive chatbot. The design uses a dark theme with gold accents for an aggressive boxing gym aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (single page app with 404 fallback)
- **Styling**: Tailwind CSS with custom theme configuration (dark mode, gold primary color #D4AF37)
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack React Query for server state and data fetching
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers
- **Animations**: Framer Motion for page animations and scroll reveals
- **Navigation**: react-scroll for smooth scrolling between sections
- **Typography**: Oswald (display) and Roboto (body) fonts from Google Fonts

### Backend Architecture
- **Framework**: Express 5 running on Node.js with TypeScript
- **Server Pattern**: Single HTTP server serving both API routes and static files
- **API Structure**: RESTful endpoints defined in `shared/routes.ts` with Zod schema validation
- **Development**: Vite dev server integrated via middleware for HMR during development
- **Production**: Static files served from `dist/public` after build

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts` contains table definitions
- **Migrations**: Drizzle Kit for schema management (`db:push` command)
- **Current Tables**: `inquiries` table for contact form submissions

### Shared Code Pattern
The `shared/` directory contains code used by both frontend and backend:
- `schema.ts`: Database table definitions and Zod validation schemas
- `routes.ts`: API route definitions with input/output types

### Build System
- **Client Build**: Vite compiles React app to `dist/public`
- **Server Build**: esbuild bundles server code to `dist/index.cjs`
- **Custom Build Script**: `script/build.ts` handles the full build process with dependency bundling optimization

## External Dependencies

### Database
- PostgreSQL database (connection via `DATABASE_URL` environment variable)
- Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- `connect-pg-simple` available for session storage if needed

### UI/Component Libraries
- Full shadcn/ui component suite (buttons, dialogs, forms, navigation, etc.)
- Radix UI primitives for accessible components
- Lucide React for icons
- Embla Carousel for carousel functionality
- Vaul for drawer components
- cmdk for command palette

### Development Tools
- Replit-specific Vite plugins for development (error overlay, cartographer, dev banner)
- TypeScript with strict mode enabled
- PostCSS with Tailwind and Autoprefixer

### Fonts & Assets
- Google Fonts: Oswald, Roboto, DM Sans, Fira Code, Geist Mono, Architects Daughter
- External images hosted on Wix static CDN for hero section