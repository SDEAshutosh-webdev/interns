# 🍔 Food Ordering App — Frontend Architecture & Intern Developer Guide

Welcome to the **Food Ordering App** codebase! This guide serves as standard documentation for all team members. It details the project's folder structure, coding rules, and step-by-step instructions for implementing new features.

---

## 📁 Project Directory Structure

```text
src/
├── api/                    # 🌐 Service Layer (Mock data today -> Real API endpoints tomorrow)
│   ├── foodService.js      # Data fetching methods (getAllFoodItems, getFoodByCategory)
│   └── mockData.js         # Mock food menu dataset
│
├── components/             # 🧱 UI Component Hierarchy
│   ├── common/             # Reusable, domain-agnostic UI components
│   │   ├── Button/         # Button component (Button.jsx)
│   │   ├── Navbar/         # Navbar component (Navbar.jsx)
│   │   └── SearchBar/      # SearchBar component (SearchBar.jsx)
│   │
│   └── features/           # Feature-specific domain components
│       └── food/           # FoodCard (FoodCard.jsx)
│
├── context/                # 🧠 React Context (Global State)
│   └── CartContext.jsx     # Food cart state management (Items, Quantity, Total Price)
│
├── hooks/                  # 🪝 Custom React Hooks
│   ├── useCart.js          # Hook to access CartContext
│   └── useFoodItems.js     # Hook to handle food data loading & category filtering
│
├── pages/                  # 📄 Page Views (Views rendered by Routes)
│   ├── Home/               # Home page hero, search & featured items
│   ├── Menu/               # Full menu with category filter pills
│   ├── Cart/               # Order summary & checkout simulation
│   └── Contact/            # Contact info & message form
│
├── routes/                 # 🛣️ Centralized Routing Setup
│   └── AppRoutes.jsx       # Main route mappings (<Routes>, <Route>)
│
├── styles/                 # 🎨 Dedicated Centralized CSS Folder
│   ├── index.css           # Global resets & base typography
│   ├── App.css             # Main layout container rules
│   ├── Button.css          # Button variant styles
│   ├── Navbar.css          # Navigation bar styles & cart badge
│   ├── SearchBar.css       # Search input styling
│   ├── FoodCard.css        # Food card grid card styles
│   ├── Home.css            # Home page hero & CTA banner styles
│   ├── MenuPage.css        # Menu page & category pill styles
│   ├── CartPage.css        # Cart page & checkout summary card styles
│   └── Contact.css         # Contact page grid & form styles
│
├── utils/                  # 🛠️ Shared Helper Utilities
│   └── formatters.js       # Price formatting (`formatPrice(180)` -> `₹180`)
│
├── App.jsx                 # App Root layout wrapper with CartProvider
└── main.jsx                # React DOM entry point
```

---

## 📖 Folder-by-Folder Responsibilities & Rules

### 1. `src/styles/` (Centralized Styling Folder)

* **What it does:** Stores all `.css` files for components, pages, and global application styling.
* **Rules for Interns:**
  * All `.css` files are placed inside `src/styles/`.
  * Name the `.css` file identically to the component or page (e.g. `Button.css`, `Navbar.css`, `Home.css`).
  * Import the CSS from `styles/` inside your component:

    ```javascript
    import "../../styles/Button.css";
    ```

---

### 2. `src/api/` (Data & Service Layer)

* **What it does:** Contains mock data and service functions for fetching food items.
* **Rules for Interns:**
  * **NEVER** write `fetch()` or `axios` calls inside JSX components directly. Always place data access logic inside `foodService.js`.
  * Today `foodService.js` returns data from `mockData.js`. When the backend API is built later, we only change `foodService.js` to call `fetch("https://api.myproject.com/food")`. The rest of the app will continue to work seamlessly!

```javascript
// Example: src/api/foodService.js
import { MOCK_FOOD_ITEMS } from "./mockData";

export const foodService = {
  getAllFoodItems: async () => {
    return MOCK_FOOD_ITEMS;
  },
};
```

---

### 3. `src/components/common/` (Shared UI Building Blocks)

* **What it does:** Stores reusable UI components used throughout multiple pages (`Button.jsx`, `Navbar.jsx`, `SearchBar.jsx`).
* **Rules for Interns:**
  * Common components must be **pure and configurable** via props (`variant`, `disabled`, `onClick`).
  * Do NOT put specific business logic or API calls inside common components.

---

### 4. `src/components/features/` (Domain Features)

* **What it does:** Houses UI components specific to food ordering domain (`FoodCard.jsx`).
* **Rules for Interns:**
  * Use components from `common/` inside your feature components.
  * Connect to global state hooks (e.g., `useCart`) to trigger actions like "+ Add to Cart".

---

### 5. `src/context/` & `src/hooks/` (State Management)

* **What it does:** Manages global state that must be shared across pages (e.g., cart count, total price, cart items).
* **Rules for Interns:**
  * Import `useCart` from `src/hooks/useCart.js` whenever you need to add an item to the cart or display cart count:

```javascript
import { useCart } from "../../hooks/useCart";

function MyComponent() {
  const { addToCart, totalCount } = useCart();
  // ...
}
```

---

### 6. `src/pages/` (Top-Level Page Views)

* **What it does:** Holds full-page views (`Home`, `Menu`, `Cart`, `Contact`).
* **Rules for Interns:**
  * Keep pages lean! Pages should focus on layout composition using components from `components/common` and `components/features`.

---

### 7. `src/routes/` (Routing Setup)

* **What it does:** Centralized routing mapping URLs to pages in `AppRoutes.jsx`.
* **Rules for Interns:**
  * When adding a new page, register its route in `src/routes/AppRoutes.jsx`:

```jsx
<Route path="/menu" element={<MenuPage />} />
```

---

### 8. `src/utils/` (Helper Functions)

* **What it does:** Utility functions for string formatting, price formatting, and calculations.
* **Example:**

```javascript
import { formatPrice } from "../../utils/formatters";
console.log(formatPrice(180)); // Outputs: "₹180"
```

---

## 🚀 How to Implement a New Feature (Step-by-Step)

Suppose an intern needs to add a **"Reviews"** feature to food items:

1. **Step 1 (CSS):** Create `src/styles/Reviews.css`.
2. **Step 2 (Mock Data):** Add mock reviews array to `src/api/mockData.js`.
3. **Step 3 (Service Layer):** Add `getReviewsForFood(foodId)` method in `src/api/foodService.js`.
4. **Step 4 (Feature Component):** Create `src/components/features/reviews/ReviewList.jsx` and import `../../styles/Reviews.css`.
5. **Step 5 (Integration):** Import and use `<ReviewList />` inside `src/pages/Menu/MenuPage.jsx`.

---

## 🛠️ Git Collaboration Rules for Small Intern Teams

1. **Work in Feature Branches:** Never commit directly to `main`. Create branches like `feature/cart-page`, `feature/food-filter`.
2. **Run Build Before Pushing:** Always run `npm run build` locally before pushing code to ensure there are no broken imports or missing CSS files.
