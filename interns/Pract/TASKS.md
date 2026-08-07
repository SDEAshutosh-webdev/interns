# 📋 Intern Team Task Assignment (12 Members) — Food Ordering App

This document breaks down the project roadmap into **12 distinct, non-overlapping tasks** for your intern team. Each task is designed to be simple, production-grade, and beginner-friendly for new React developers.

---

## 🎯 Architectural Guidelines for All Interns

1. **File Isolation Rule:** Work only inside your assigned component/page folder to avoid Git merge conflicts.
2. **Styles Location:** Always place your `.css` file in `src/styles/` (e.g. `src/styles/CheckoutForm.css`).
3. **Data Service Rule:** Do not hardcode raw data inside components. Use `src/api/foodService.js` or `src/api/mockData.js`.
4. **Build Check:** Always run `npm run build` locally before creating a Pull Request.

---

## 👥 Track 1: Customer Experience & Discovery

### 👤 Intern 1: Category Filter Bar Component
* **Target File(s):**
  * `src/components/features/food/CategoryFilter.jsx`
  * `src/styles/CategoryFilter.css`
* **Task Goal:** Extract the category pills from `MenuPage.jsx` into a standalone, reusable `<CategoryFilter />` component.
* **Key Deliverables:**
  * Add category icons (e.g. 🍳 Breakfast, 🍛 Main Course, 🍕 Italian, 🍟 Snacks).
  * Show item count badges on each category pill (e.g. "Main Course (3)").
* **Skills Learned:** React Props, Event Handlers, Array Mapping.

---

### 👤 Intern 2: Food Sorting & Price Filter Component
* **Target File(s):**
  * `src/components/features/food/SortControl.jsx`
  * `src/styles/SortControl.css`
* **Task Goal:** Create a dropdown selector to sort food items.
* **Key Deliverables:**
  * Sort options: **Price: Low to High**, **Price: High to Low**, **Top Rated (Rating)**.
  * Integrate the sorting logic in `src/pages/Menu/MenuPage.jsx`.
* **Skills Learned:** JavaScript `array.sort()`, `<select>` state binding.

---

### 👤 Intern 3: Food Details Modal Popup
* **Target File(s):**
  * `src/components/features/food/FoodDetailsModal.jsx`
  * `src/styles/FoodDetailsModal.css`
* **Task Goal:** Show a detailed modal popup when a user clicks on any `FoodCard`.
* **Key Deliverables:**
  * Displays food image, detailed description, ingredients list, calories/nutrition info, and a "+ Add to Cart" button.
  * Includes a close button (`✕`) and overlay click-outside to close.
* **Skills Learned:** Modal overlay state, conditional rendering (`isOpen`).

---

## 👥 Track 2: Cart, Checkout & Order Management

### 👤 Intern 4: Delivery Address & Checkout Form
* **Target File(s):**
  * `src/components/features/cart/CheckoutForm.jsx`
  * `src/styles/CheckoutForm.css`
* **Task Goal:** Build a delivery details form on the Cart page.
* **Key Deliverables:**
  * Inputs: Full Name, Phone Number, Street Address, City, Pincode, Delivery Instructions.
  * Basic validation (Ensure fields are not empty, phone is 10 digits).
* **Skills Learned:** Controlled form state (`useState`), form validation.

---

### 👤 Intern 5: Coupon Code & Discount System
* **Target File(s):**
  * `src/components/features/cart/CouponDiscount.jsx`
  * `src/styles/CouponDiscount.css`
* **Task Goal:** Allow users to apply promo discount codes on the Cart page.
* **Key Deliverables:**
  * Promo codes: `FOODIE50` (₹50 off), `WELCOME20` (20% off total).
  * Show applied discount line item in the Order Summary card.
* **Skills Learned:** String comparison, mathematical discount calculation.

---

### 👤 Intern 6: Live Order Tracking Page & Timeline
* **Target File(s):**
  * `src/pages/OrderTracking/OrderTrackingPage.jsx`
  * `src/styles/OrderTrackingPage.css`
* **Task Goal:** Create a visually appealing order status page after checkout.
* **Key Deliverables:**
  * Visual progress stepper: `[1] Order Received` ➔ `[2] Preparing Food` ➔ `[3] Out for Delivery` ➔ `[4] Delivered`.
  * Display estimated delivery time (e.g. "Arriving in 25 minutes").
  * Register route `/track-order` in `AppRoutes.jsx`.
* **Skills Learned:** Route parameter handling, multi-step UI layout.

---

## 👥 Track 3: Customer Engagement & Ratings

### 👤 Intern 7: Wishlist / Favorites System
* **Target File(s):**
  * `src/context/WishlistContext.js`
  * `src/hooks/useWishlist.js`
  * `src/styles/Wishlist.css`
* **Task Goal:** Allow users to bookmark favorite food items with a heart icon.
* **Key Deliverables:**
  * Add a heart icon (`❤️` / `🤍`) on `FoodCard.jsx`.
  * Save favorite items in `WishlistContext`.
  * Show total favorite count in Navbar.
* **Skills Learned:** Creating React Context & custom hooks from scratch.

---

### 👤 Intern 8: Customer Reviews & Ratings Component
* **Target File(s):**
  * `src/components/features/reviews/ReviewList.jsx`
  * `src/components/features/reviews/AddReviewForm.jsx`
  * `src/styles/ReviewSection.css`
* **Task Goal:** Display user reviews and allow customers to submit feedback.
* **Key Deliverables:**
  * Star rating display (`★★★★☆ 4.5/5`).
  * List of customer comments with avatar icons.
  * A simple form to submit a new review (Name, Rating, Comment).
* **Skills Learned:** Array state manipulation (`[...prev, newReview]`).

---

### 👤 Intern 9: Promotional Offer Banners & Carousel
* **Target File(s):**
  * `src/components/features/offers/PromoBanner.jsx`
  * `src/styles/PromoBanner.css`
* **Task Goal:** Add attractive discount promo banners to the Home Page.
* **Key Deliverables:**
  * Banner 1: "50% OFF on First 3 Orders! Code: FIRST50".
  * Banner 2: "Free Delivery on orders above ₹200".
  * Auto-sliding or manual Next/Prev controls.
* **Skills Learned:** `setInterval` in `useEffect`, CSS gradient banners.

---

## 👥 Track 4: Trust, Support & App Polish

### 👤 Intern 10: FAQ Accordion Component
* **Target File(s):**
  * `src/pages/Contact/FaqAccordion.jsx`
  * `src/styles/FaqAccordion.css`
* **Task Goal:** Build an interactive FAQ section on the Contact page.
* **Key Deliverables:**
  * Expand/collapse accordion for questions like:
    * *What are your delivery hours?*
    * *How can I track my order?*
    * *What payment methods are supported?*
* **Skills Learned:** Toggle state management (`activeFaqId`).

---

### 11. Intern 11: Toast Notification System
* **Target File(s):**
  * `src/components/common/Toast/Toast.jsx`
  * `src/context/ToastContext.js`
  * `src/styles/Toast.css`
* **Task Goal:** Display popup notifications when actions occur.
* **Key Deliverables:**
  * Animated toast popup in bottom-right corner ("✅ Added Maharashtrian Poha to Cart!").
  * Auto-hides after 3 seconds.
* **Skills Learned:** `setTimeout` side-effects, global Notification Context.

---

### 👤 Intern 12: Application Footer & Dark Mode Toggle
* **Target File(s):**
  * `src/components/common/Footer/Footer.jsx`
  * `src/styles/Footer.css`
* **Task Goal:** Add a production-grade Footer and Light/Dark mode toggle.
* **Key Deliverables:**
  * Quick links (Home, Menu, Cart, Contact), social media links, copyright notice.
  * Theme switcher toggle button in Navbar or Footer.
* **Skills Learned:** CSS custom variables, global theme state.

---

## 🚀 Recommended Workflow for Team Leader

1. **Assign 1 task per intern** according to their track.
2. Direct interns to read **[INTERN_GUIDE.md](file:///c:/Users/ashutosh.chikhalkar/Desktop/test/interns/interns/Pract/INTERN_GUIDE.md)** for coding standards.
3. Have each intern create their feature branch (`git checkout -b feature/intern-name-task`).
4. Review Pull Requests ensuring `npm run build` succeeds cleanly.
