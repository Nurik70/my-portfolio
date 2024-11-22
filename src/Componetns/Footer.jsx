import React, { useContext } from "react";
import "../Styles/Footer.css";
import { LanguageContext } from "../LanguageContext"; // Импортируем контекст языка

function Footer() {
  const { language } = useContext(LanguageContext); // Используем контекст языка

  // Тексты для разных языков
  const texts = {
    en: {
      createdBy: "© 2024 created: Temirbekov Nurzhigit",
    },
    ru: {
      createdBy: "© 2024 создано: Темирбеков Нуржигит",
    },
  };

  // Выбираем тексты в зависимости от текущего языка
  const selectedTexts = texts[language];

  return (
    <footer className="footer">
      <div className="footer-col">
        <p>{selectedTexts.createdBy}</p>
        <div className="social-links">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
