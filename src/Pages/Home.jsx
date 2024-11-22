import React, { useContext } from "react";
import "../Styles/Home.css";
import { LanguageContext } from "../LanguageContext";

const Home = () => {
  const { language } = useContext(LanguageContext);

  const texts = {
    en: {
      greeting: "HEY, I'M TEMIRBEKOV NURZHIGIT",
      description: "I study at Salymbekov University, make and create websites. I have small projects.",
      button: "View My Projects",
    },
    ru: {
      greeting: "ПРИВЕТ, Я ТЕМИРБЕКОВ НУРЖИГИТ",
      description: "Я учусь в университете Салымбекова, занимаюсь разработкой сайтов и имею несколько небольших проектов.",
      button: "Посмотреть Мои Проекты",
    },
  };

  return (
    <div className="container home-page">
      <div className="hero">
        <div className="big-home-text">{texts[language].greeting}</div>
        <div className="small-home-text">{texts[language].description}</div>
        <a href="/Pages/Progects.js" className="button-link">
          {texts[language].button}
        </a>
      </div>
    </div>
  );
};

export default Home;
