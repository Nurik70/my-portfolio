import React from "react";
import { Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./LanguageContext"; // Импортируем LanguageProvider
import Navbar from "./Componetns/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Progects from "./Pages/Progects";
import Contacts from "./Pages/Contacts";
import Achivement from "./Pages/Achivement";
import Footer from "./Componetns/Footer";
import "./App.css";

const App = () => {
  return (
    <LanguageProvider>
      {" "}
      {/* Оборачиваем все в LanguageProvider */}
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Progects />} />
          <Route path="/achivement" element={<Achivement />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
      <Footer />
    </LanguageProvider>
  );
};

export default App;
