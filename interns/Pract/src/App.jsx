import { useState } from "react";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartProvider";
import { WishlistProvider } from "./context/WishlistContext";
import "./styles/App.css";
import PromoBanner from "./components/features/food/offers/PromoBanner";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <CartProvider>
      <WishlistProvider>
        <div className={darkMode ? "app-container dark-mode" : "app-container"}>
          <Navbar />
          <PromoBanner /> 
          <main className="main-content">
            <AppRoutes />
          </main>

          <Footer
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </div>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;