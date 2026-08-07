import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from '../pages/ProductPage';

function ProductRoutes() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ProductRoutes;