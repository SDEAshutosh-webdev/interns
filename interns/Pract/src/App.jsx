import Navbar from "./components/common/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartProvider";
import "./styles/App.css";

function App() {
  return (
    <CartProvider>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <AppRoutes />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
