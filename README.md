# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Setup Process

Follow these steps to fully set up and run this project on your system.

1.  Install Node.js

    Download and install Node.js (LTS recommended) from: https://nodejs.org

    Verify installation:

        node -v
        npm -v

2.  Install Dependencies

    Run the following command inside the project folder:

    npm install

    npm install axios framer-motion react react-dom react-icons react-router-dom

3.  Start Development Server

    npm run dev

## Project Structure

cart-system/
│── node_modules/
│
│── public/
│ ├── Store.svg
│ └── vite.svg
│
│── src/
│ ├── assets/
│ │ └── products_200.json
│ │
│ ├── Components/
│ │ ├── CartItems/
│ │ │ ├── CartItems.css
│ │ │ └── CartItems.jsx
│ │ │
│ │ ├── Contexts/
│ │ │ ├── CartContext.jsx
│ │ │ └── CartProvider.jsx
│ │ │
│ │ ├── Nav/
│ │ │ ├── Nav.css
│ │ │ └── Nav.jsx
│ │ │
│ │ └── ProductDetails/
│ │ ├── AboutProduct.jsx
│ │ ├── ProductDetails.css
│ │ └── ProductSuggestions.jsx
│ │
│ ├── Products/
│ │ ├── Products.css
│ │ └── Products.jsx
│ │
│ ├── Pages/
│ │ ├── index.css
│ │ └── App.jsx
│ │
│ ├── main.jsx
│ └── index.css
│
│── package.json
│── vite.config.js
└── README.md
