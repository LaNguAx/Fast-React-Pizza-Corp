# 🍕 Fast React Pizza Corp

A modern pizza ordering web app built with React, Redux, and Vite — includes cart management, order flow, and client-side routing.

---

## 🧱 Tech Stack

- **React 18** – Component-driven UI
- **Vite 4** – Fast bundling and dev server
- **React Router v6.30** – Client-side routing with dynamic and nested routes
- **Redux Toolkit v2.7** – Global state management (cart, user)
- **Tailwind CSS v3.4** – Utility-first styling
- **Supabase** – Hosted backend providing RESTful API and storage

---

## ✨ Features

- 🧭 **Full client-side routing** with persistent URL state
- 🛒 **Add/remove pizzas** from cart with quantity controls
- 🚀 **Order form** with optional priority delivery and address autofill (via geolocation)
- 🔄 **State stored in Redux Toolkit** for scalable data flow
- 📦 **Pizza image storage** served from Supabase
- 📱 **Responsive UI** using Tailwind CSS

---

## 🗂 Folder Structure

```bash
src/
├── features/      # Feature modules (cart, menu, order, user)
├── services/      # Supabase API client
├── ui/            # Shared UI components
├── utils/         # Helper functions
└── App.jsx        # Root layout and routes
