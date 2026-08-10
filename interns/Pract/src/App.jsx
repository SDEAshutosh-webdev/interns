import Navbar from "./components/common/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartProvider";
import { WishlistProvider } from "./context/WishlistContext";
import "./styles/App.css";

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <div className="app-container">
          <Navbar />

          <main className="main-content">
            <AppRoutes />
          </main>
        </div>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;