import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Menu from "./components/Menu";
import Lista from "./components/Lista";
import Sobre from "./components/Sobre";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<Lista />} />
      <Route path="/Home" element={<Lista />} />
      <Route path="/Sobre" element={<Sobre />} />
    </Routes>
  </BrowserRouter>
);
