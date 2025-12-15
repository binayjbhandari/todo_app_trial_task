# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Getting Started

To run this project locally:

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` to view the application.

Project Approach

Vite + React: Fast dev server and modern React setup with functional components & hooks.
React Router: Handles routes for list (/todos), create, and edit pages.
Tailwind CSS: Utility classes for clean, responsive UI (cards, forms, grid).
localStorage: Mock storage for todos (JSON array persisted in browser).
todoService.js: Centralizes CRUD operations (add, get, update, delete).
Image Upload: Files converted to base64 strings and stored in localStorage.
Features: Delete confirmation, required title validation, responsive layout.