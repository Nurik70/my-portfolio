import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../LanguageContext';
import '../Styles/Navbar.css';
import myPhoto from '../images/my-foto-home.jpg';

const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);

  // Тексты для обоих языков
  const texts = {
    en: {
      portfolio: "Portfolio",
      home: "Home",
      about: "About Me",
      projects: "Projects",
      achievement: "Achievement",
      contacts: "Contact",
      toggleLanguage: "Switch to Russian",
    },
    ru: {
      portfolio: "Портфолио",
      home: "Главная",
      about: "Обо мне",
      projects: "Проекты",
      achievement: "Достижения",
      contacts: "Контакты",
      toggleLanguage: "Переключить на английский",
    },
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="photo-and-portfolio">
        <img src={myPhoto} className="img-my-foto-nav" alt="Temirbekov Nurzhigit" />
        <h1>{texts[language].portfolio}</h1>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>{texts[language].home}</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>{texts[language].about}</Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>{texts[language].projects}</Link>
        <Link to="/achivement" onClick={() => setMenuOpen(false)}>{texts[language].achievement}</Link>
        <Link to="/contacts" onClick={() => setMenuOpen(false)}>{texts[language].contacts}</Link>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      <button className="language-toggle" onClick={toggleLanguage}>
        {texts[language].toggleLanguage}
      </button>
    </nav>
  );
};

export default Navbar;
