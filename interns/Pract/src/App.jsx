import { useState } from 'react'
import Button from "./Common/Button";
import ButtonRoutes from "./routes/ButtonRoutes";
import ProductRoutes from './routes/ProductRoutes';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <ProductRoutes />;
      <ButtonRoutes />;
      <div className="button-container">
      <Button text="Save" variant="primary"/>
      </div>
    
    </>
  )
}

export default App;


