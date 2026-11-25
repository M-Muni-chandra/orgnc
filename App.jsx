import { Routes, Route } from "react-router-dom";

import Home from "./Home.jsx";
import Admin from "./Admin.jsx";
import Inventory from "./Inventory.jsx";
import Customer from "./Customer.jsx";
import Captain from "./Captain.jsx";

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
