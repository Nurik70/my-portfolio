import React, { useContext } from "react";
import "../Styles/Achivement.css";
import crossFoto from "../images/cross.jpg";
import { LanguageContext } from "../LanguageContext"; // Импортируем контекст языка

const Achivement = () => {
  const { language } = useContext(LanguageContext); // Используем контекст языка

  // Тексты для разных языков
  const texts = {
    en: {
      title: "My Achivement",
      project: "Project",
      projectDescription:
        "I have a small project, my partner and I made a website for selling sneakers. The goal of the project was to create a website and sell it to a sneaker store.",
      education: "Education and Certifications",
      educationDescription:
        "In elementary school, I took part in competitions and received 1st place, graduated with honors from the Salymbekov Business School courses and received a diploma.",
      certifications: "Certifications and diploma",
      certificationsList: ["📄 Salymbekov Business School", "🎗 Diploma"],
      sport: "Sport",
      sportDescription:
        "From an early age, I went to wrestling 🤼, participated in competitions, received prizes and medals. After 7th grade, I went to football and participated in competitions.",
      medals: "Medals and Achivement",
      medalsList: "🥇 2 medals 🥈 3 medals 🥉 4 medals",
      languages: "Languages",
      languagesDescription:
        "I am fluent in both English and Russian, with a strong grasp of web development terminology and programming concepts in these languages.",
      tools: "Tools and Technologies",
      toolsDescription:
        "I am experienced with the following tools and technologies:\n- React, JavaScript, HTML, CSS\n- Git, GitHub, Visual Studio Code\n- Python, Flask, SQL",
    },
    ru: {
      title: "Мои достижения",
      project: "Проект",
      projectDescription:
        "У меня есть небольшой проект, мой партнер и я сделали сайт для продажи кроссовок. Цель проекта заключалась в том, чтобы создать сайт и продать его в магазин кроссовок.",
      education: "Образование и сертификаты",
      educationDescription:
        "В начальной школе я участвовал в соревнованиях и занял 1-е место, окончил курсы с отличием в бизнес-школе Салымбекова и получил диплом.",
      certifications: "Сертификаты и диплом",
      certificationsList: ["📄 Бизнес-школа Салымбекова", "🎗 Диплом"],
      sport: "Спорт",
      sportDescription:
        "С раннего возраста я занимался борьбой 🤼, участвовал в соревнованиях, получал призы и медали. После 7-го класса я занялся футболом и участвовал в соревнованиях.",
      medals: "Медали и достижения",
      medalsList: "🥇 2 медали 🥈 3 медали 🥉 4 медали",
      languages: "Языки",
      languagesDescription:
        "Я свободно владею как английским, так и русским языками, с хорошим знанием терминологии веб-разработки и программирования на этих языках.",
      tools: "Инструменты и технологии",
      toolsDescription:
        "Я имею опыт работы с следующими инструментами и технологиями:\n- React, JavaScript, HTML, CSS\n- Git, GitHub, Visual Studio Code\n- Python, Flask, SQL",
    },
  };

  // Выбираем тексты в зависимости от текущего языка
  const selectedTexts = texts[language];

  return (
    <div className="main-achivement">
      <div className="word-achi-top">
        <h1>{selectedTexts.title}</h1>
      </div>
      <div className="row">
        <div className="information-achi">
          <h3>{selectedTexts.project}</h3>
          <p>{selectedTexts.projectDescription}</p>
        </div>
        <div className="information-achi">
          <img src={crossFoto} className="img-cross-foto" alt="Cross Foto" />
          <a href="/Pages/Progects.js" className="button-link-prog">
            View My Projects
          </a>
        </div>
      </div>
      <div className="row">
        <div className="information-achi">
          <h3>{selectedTexts.education}</h3>
          <p>{selectedTexts.educationDescription}</p>
        </div>
        <div className="information-achi">
          <h3>{selectedTexts.certifications}</h3>
          {selectedTexts.certificationsList.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="information-achi">
          <h3>{selectedTexts.sport}</h3>
          <p>{selectedTexts.sportDescription}</p>
        </div>
        <div className="information-achi">
          <h3>{selectedTexts.medals}</h3>
          <div>{selectedTexts.medalsList}</div>
        </div>
      </div>
      <div className="row">
        <div className="information-achi">
          <h3>{selectedTexts.languages}</h3>
          <p>{selectedTexts.languagesDescription}</p>
        </div>
        <div className="information-achi">
          <h3>{selectedTexts.tools}</h3>
          <p>{selectedTexts.toolsDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Achivement;
