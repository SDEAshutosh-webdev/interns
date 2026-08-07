import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Button from '../Common/Button';
import Home from "../Pages/Home";
function ButtonRoutses() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/button" element={<Button text="Primary Button" />} />
      </Routes>   
    </BrowserRouter>
  );
}

export default ButtonRoutses;