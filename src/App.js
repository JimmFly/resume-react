import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./components/home-component";
import NavComponent from "./components/nav-component";
import FooterComponent from "./components/footer-component";
import Animation from "./components/homeAnimation";
import "./styles/style.css";
function App() {
  return (
    <div className="App">
      <Animation />
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
