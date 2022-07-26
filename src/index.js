import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Menu from "./components/Menu";
import Lista from "./components/Lista";
import Sobre from "./components/Sobre";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Menu />
    <Lista />
    <Sobre />
  </>
);
