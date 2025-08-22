# Gadgetsphere

**Gadgetsphere** is a modern, responsive web application built with **Next.js 15** and **NextAuth.js**. It allows users to browse products, view product details, and, after logging in, access a protected dashboard to add new products. The app demonstrates public and protected routes, authentication, and responsive UI with mobile-friendly navigation.  

---

## Features

- Landing page with Hero, Product Highlights, and Footer  
- Credential-based and Google login using NextAuth.js  
- Public product list and product detail pages  
- Protected dashboard for adding new products  
- Mobile-friendly navigation menu  
- Optional enhancements: loading spinners, toast notifications, theme toggle  

---

## Technologies Used

- **Frontend:** Next.js 15 (App Router), React, Tailwind CSS, Material Tailwind  
- **Authentication:** NextAuth.js  
- **Backend / API:** Next.js Route Handlers (`/api`)  
- **Other Libraries:** Lucide Icons, react-hook-form  

---

## Setup & Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/ArunRoy404/nextjs-jobtask.git
   cd gadgetsphere
   ```

2. **Install dependencies**  
   ```bash
    npm install
    # or
    yarn install

   ```

3. **Configure environment variables** 
   Create a .env.local file in the root directory:
   ```bash
    NEXTAUTH_SECRET=your_secret_key
    MONGODB_URI=your_mongodb_uri
    DB_NAME=your_database_name
    NEXT_PUBLIC_API_URL=http://localhost:3000

   ```

4. **Run the development server** 
   ```bash
    npm run dev
    # or
    yarn dev
   ```
   Open http://localhost:3000 -> to view the app.

5. **CBuild and run for production** 
   ```bash
    npm run build
    npm run start
   ```

--- 

## Route Summary

| Route                    | Access    | Description                                           |
|--------------------------|-----------|-------------------------------------------------------|
| `/`                      | Public    | Landing page with Navbar, Hero, Product Highlights, Footer |
| `/login`                 | Public    | Login page using credentials or Google login         |
| `/register`              | Public    | User registration page                                |
| `/products`              | Public    | Product listing page with name, description, and price |
| `/products/[id]`         | Public    | Product details page for a single product            |
| `/dashboard/add-product` | Protected | Add new product form; accessible only when logged in |


