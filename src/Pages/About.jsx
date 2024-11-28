import React, { useContext } from "react";
import "../Styles/About.css";
import { LanguageContext } from "../LanguageContext";

const About = () => {
  const { language } = useContext(LanguageContext);

  const texts = {
    en: {
      header: "ABOUT ME",
      description:
        "Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology",
      getToKnow: "Get to know me!",
      skills: "My Skills",
    },
    ru: {
      header: "ОБО МНЕ",
      description:
        "Здесь вы найдете больше информации обо мне, чем я занимаюсь и какие у меня текущие навыки в области программирования и технологий",
      getToKnow: "Познакомьтесь со мной!",
      skills: "Мои навыки",
    },
  };

  return (
    <div className="container about-page">
      <div className="about-header">
        <h2>{texts[language].header}</h2>
        <p>{texts[language].description}</p>
      </div>
      <div className="about-content">
        <div className="get-to-know">
          <h3>{texts[language].getToKnow}</h3>
          <p>
            I'm a <strong>Frontend Focused Web Developer</strong> building and
            managing the Front-end of Websites and Web Applications.
            I'm a <strong>Frontend Focused Web Developer</strong> building and
            managing the Front-end of Websites and Web Applications.
            I'm a <strong>Frontend Focused Web Developer</strong> building and
            managing the Front-end of Websites and Web Applications.
          </p>
        </div>
        <div className="skills-section">
          <h3>{texts[language].skills}</h3>
          <div className="skills">
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">JavaScript</div>
            <div className="skill">React</div>
            <div className="skill">Python</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
