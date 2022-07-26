import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./pages/homepage";
import NavComponent from "./components/nav-component";
import FooterComponent from "./components/footer-component";
import Animation from "./components/homeAnimation";
import ResumePage from "./pages/resumePage";
import ContactPage from "./pages/contactPage";
import "./styles/style.css";
function App() {
  return (
    <div className="App">
      <Animation />
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
