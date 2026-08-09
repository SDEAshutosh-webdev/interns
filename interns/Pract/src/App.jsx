import { useState } from "react";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartProvider";
import "./Styles/App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <CartProvider>
      <div className={darkMode ? "app-container dark-mode" : "app-container"}>
        <Navbar />

        <main className="main-content">
          <AppRoutes />
        </main>

        <Footer
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>
    </CartProvider>
  );
}

export default App;