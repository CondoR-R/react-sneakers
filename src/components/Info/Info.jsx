import Btn from "../Btn/Btn";

import style from "./info.module.scss";

function Info({ onClick, spanContent, title, text, titleGreen = false }) {
  return (
    <div className={style.info}>
      <span className={style.span}>{spanContent}</span>
      <h1 className={`${style.title} ${titleGreen ? style.greenTitle : ""}`}>
        {title}
      </h1>
      <p className={style.text}>{text}</p>
      <Btn
        onClick={onClick}
        positionClass={style.btn}
        isLeftArrow
        marginImg={
          <img src="/img/leftArrow.svg" width={14} height={12} alt="Назад" />
        }
        text="Вернуться назад"
      />
    </div>
  );
}

export default Info;
