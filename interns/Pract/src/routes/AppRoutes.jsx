import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import MenuPage from "../pages/Menu/MenuPage";
import CartPage from "../pages/Cart/CartPage";
import Contact from "../pages/Contact/Contact";
import OrderTrackingPage from "../pages/OrderTracking/OrderTrackingPage";
import Wishlist from "../pages/Wishlist/Wishlist";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/products" element={<MenuPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/track-order" element={<OrderTrackingPage />} />
      <Route path="/wishlist" element={<Wishlist/>} />
    </Routes>
  );
}
