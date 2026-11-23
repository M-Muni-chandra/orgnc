import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Inventory from "./pages/Inventory";
import Customer from "./pages/Customer";
import Captain from "./pages/Captain";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/captain" element={<Captain />} />
    </Routes>
  );
}

export default App;