import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./pages/homepage";
import NavComponent from "./components/nav-component";
import FooterComponent from "./components/footer-component";
import Animation from "./components/homeAnimation";
import ResumePage from "./pages/resumePage";
import ContactPage from "./pages/contactPage";
import Project1 from "./pages/project1";
import Project2 from "./pages/project2";
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
        <Route path="/Project1" element={<Project1 />} />
        <Route path="/Project2" element={<Project2 />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
