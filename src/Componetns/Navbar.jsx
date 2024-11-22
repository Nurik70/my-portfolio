import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../LanguageContext';
import '../Styles/Navbar.css';
import myPhoto from '../images/my-foto-home.jpg';

const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

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

  return (
    <nav>
      <div className="photo-and-portfolio">
        <img src={myPhoto} className="img-my-foto-nav" alt="Temirbekov Nurzhigit" />
        <h1>{texts[language].portfolio}</h1>
      </div>
      <div className="nav-links">
        <Link to="/">{texts[language].home}</Link>
        <Link to="/about">{texts[language].about}</Link>
        <Link to="/projects">{texts[language].projects}</Link>
        <Link to="/achivement">{texts[language].achievement}</Link>
        <Link to="/contacts">{texts[language].contacts}</Link>
      </div>
      <button className="language-toggle" onClick={toggleLanguage}>
        {texts[language].toggleLanguage}
      </button>
    </nav>
  );
};

export default Navbar;
