🛒 Modern E-Commerce Website
A fully functional e-commerce platform built with Next.js 15, TypeScript, Tailwind CSS, and Prisma.

✨ Features
🛍️ Product catalog with advanced filtering and search
🛒 Persistent shopping cart with localStorage
💳 Multi-step checkout process
📱 Fully responsive design
🗄️ Full backend with REST API
🔒 Type-safe with TypeScript
🎨 Beautiful UI with shadcn/ui components
🚀 Tech Stack
Framework: Next.js 15 (App Router)
Language: TypeScript 5
Styling: Tailwind CSS 4
UI Components: shadcn/ui
Database: Prisma ORM + SQLite
State: React Hooks + localStorage
📦 Installation
# Install dependenciesbun install# Set up environment variablescp .env.example .env# Set up databasebun run db:push# Run development serverbun run dev
📁 Project Structure

src/
├── app/              # Next.js app directory
├── components/        # Reusable components
├── lib/             # Utilities and database
└── hooks/           # Custom React hooks
🔗 API Endpoints
GET /api/products - Get all products
POST /api/orders - Create a new order
POST /api/seed - Seed database with sample products
📄 License
MIT License



---

## 🎯 **Final Folder Structure on GitHub**

Your GitHub repository should look like this:

your-ecommerce-repo/
├── .gitignore
├── .env.example
├── Caddyfile
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json (or bun.lock)
├── postcss.config.mjs
├── prisma/
│ └── schema.prisma
├── public/
│ ├── logo.svg
│ └── robots.txt
├── README.md
├── src/
│ ├── app/
│ │ ├── api/
│ │ │ ├── orders/
│ │ │ │ └── route.ts
│ │ │ ├── products/
│ │ │ │ └── route.ts
│ │ │ ├── seed/
│ │ │ │ └── route.ts
│ │ │ └── route.ts
│ │ ├── globals.css
│ │ ├── layout.tsx
│ │ └── page.tsx
│ ├── components/
│ │ └── ui/ (all shadcn/ui components)
│ ├── hooks/
│ ├── lib/
│ └── ...
├── tailwind.config.ts
└── tsconfig.json
