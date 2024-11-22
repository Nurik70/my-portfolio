import React, { useContext, useState } from 'react';
import '../Styles/Contacts.css';
import { LanguageContext } from "../LanguageContext";

const Contacts = () => {
  const { language } = useContext(LanguageContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  const texts = {
    en: {
      header: "Contact",
      description: "Please reach out to us via the form below.",
      name: "Name:",
      email: "Email:",
      message: "Message:",
      send: "Send",
    },
    ru: {
      header: "Контакты",
      description: "Пожалуйста, свяжитесь с нами через форму ниже.",
      name: "Имя:",
      email: "Электронная почта:",
      message: "Сообщение:",
      send: "Отправить",
    },
  };

  return (
    <div className="main-contact">
      <div className="main-slogan">
        <h1>{texts[language].header}</h1>
        <p>{texts[language].description}</p>
      </div>
      <div className="contacts">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{texts[language].name}</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{texts[language].email}</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">{texts[language].message}</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">{texts[language].send}</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
