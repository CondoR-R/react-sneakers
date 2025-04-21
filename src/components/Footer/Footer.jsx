import style from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={`${style.footer} pad`}>
      <p>
        Используемые технологии: Sass, React, JSX, CSS modules, хуки (useState,
        useEffect, useContext), Context API, React Router, axios
      </p>
    </footer>
  );
}

export default Footer;
