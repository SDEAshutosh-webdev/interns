import { Routes, Route } from "react-router-dom";
import ProductPage from "../pages/ProductPage";

function ProductRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
    </Routes>
  );
}

export default ProductRoutes;