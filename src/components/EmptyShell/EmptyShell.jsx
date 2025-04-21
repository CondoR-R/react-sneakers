import { useContext } from "react";
import Btn from "../Btn/Btn";

import style from "./EmptyShell.module.scss";
import { SneakersContext } from "../../pages/Provider/Provider";

function EmptyShell({ title, text }) {
  const { goBack } = useContext(SneakersContext);

  return (
    <div className={style.emptyShell}>
      <span className={style.span}>🥺</span>
      <h1 className={style.title}>{title}</h1>
      <p className={style.text}>{text}</p>
      <Btn
        onClick={goBack}
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

export default EmptyShell;
