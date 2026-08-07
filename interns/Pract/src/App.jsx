import { useState } from 'react';
import Button from "./Common/Button";
import ButtonRoutes from "./routes/ButtonRoutes";
import ProductRoutes from './routes/ProductRoutes';
import About from "./Pages/About"; 
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ProductRoutes />
      
    </div>
  );
}

export default App;