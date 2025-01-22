import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recibos from "./pages/Recibos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recibos" element={<Recibos />} />
    </Routes>
  );
};

export default App
