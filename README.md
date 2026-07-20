# Duka

Duka is a small single-page e-commerce storefront built with React and React Router. It pulls product data from the [Fake Store API](https://fakestoreapi.com), and lets users browse products, view details in a modal, adjust quantity, and manage a shopping cart — all without a page reload.

## Features

- **Home page** — hero section, product category showcase, and contact info
- **Shop page** — grid of products fetched live from the Fake Store API, with loading and error states
- **Product modal** — click a product card to view details and add it to the cart with a chosen quantity
- **Cart page** — view items, adjust quantities, remove items, and see a running total
- **Persistent nav** — cart item count badge visible across all pages

## Tech Stack

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/) — client-side routing (`createBrowserRouter`)
- CSS Modules — scoped component styling
- [Fake Store API](https://fakestoreapi.com) — product data

## Project Structure

```
src/
├── main.jsx              # App entry point, router setup
├── routes.jsx            # Route definitions
├── App.jsx                # Root layout, cart state, and Outlet context
├── App.module.css         # Global resets + root styles
├── Nav.jsx / Nav.module.css
├── Home.jsx / Home.module.css
├── Shop.jsx / Shop.module.css
├── Card.jsx / Card.module.css       # Product card (shop grid)
├── AddtoCart.jsx / AddtoCart.module.css   # Product detail / add-to-cart modal content
├── Cart.jsx / Cart.module.css
├── ErrorPage.jsx           # 404 / route error fallback
└── assets/                 # SVG images (cart, cta, category icons)
```

## Routing

| Path      | Component | Description                  |
|-----------|-----------|-------------------------------|
| `/`       | `Home`    | Landing page                  |
| `/shop`   | `Shop`    | Product listing                |
| `/cart`   | `Cart`    | Shopping cart                  |
| `*`       | `ErrorPage` | Shown on unmatched routes / route errors |

Cart state and handlers (`addToCart`, `removeFromCart`, `increment`, `decrement`) live in `App.jsx` and are passed down to child routes via React Router's `Outlet` context, accessed in child components with `useOutletContext()`.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (or yarn/pnpm)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

> Note: exact scripts depend on your bundler config (e.g. Vite) — adjust `package.json` scripts as needed if not already present.

## Known Limitations / Roadmap

- No persistent cart storage (cart resets on page refresh)
- No checkout flow
- Accessibility and responsive-layout improvements in progress (keyboard navigation for product cards and cart controls, focus management in the product modal, and responsive breakpoints for mobile)


