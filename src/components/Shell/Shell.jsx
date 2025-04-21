import { useContext } from "react";
import SmallBtn from "../SmallBtn/SmallBtn";
import style from "./Shell.module.scss";
import { SneakersContext } from "../../pages/Provider/Provider";

function Shell({ children, title }) {
  const { goBack } = useContext(SneakersContext);

  return (
    <div className={style.shell}>
      <div className={style.header}>
        <SmallBtn onClick={goBack}>
          <img width={5} height={10} src="/img/backArrow.svg" alt="Назад" />
        </SmallBtn>
        <h1>{title}</h1>
      </div>
      <div className={style.body}>{children}</div>
    </div>
  );
}

export default Shell;
