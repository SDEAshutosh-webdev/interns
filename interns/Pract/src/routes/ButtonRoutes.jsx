import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Button from "../components/common/Button/Button";

function ButtonRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/button" element={<Button text="Primary Button" />} />
    </Routes>
  );
}

export default ButtonRoutes;