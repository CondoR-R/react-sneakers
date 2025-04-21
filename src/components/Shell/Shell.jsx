import { useContext } from "react";

import { SneakersContext } from "../../pages/Provider/Provider";

import SmallBtn from "../SmallBtn/SmallBtn";

import Btn from "../Btn/Btn";

import style from "./Shell.module.scss";

function Shell({
  children,
  title,
  ordersHistory = false,
  isLoading = false,
  onClick = () => {},
}) {
  const { goBack } = useContext(SneakersContext);

  return (
    <div className={style.shell}>
      <div className={style.header}>
        <div className={style.left}>
          <SmallBtn onClick={goBack}>
            <img width={5} height={10} src="/img/backArrow.svg" alt="Назад" />
          </SmallBtn>
          <h1>{title}</h1>
        </div>
        {ordersHistory && !isLoading && (
          <div className={style.right}>
            <Btn onClick={onClick} isRed text="Очистить" />
          </div>
        )}
      </div>
      <div className={!ordersHistory ? style.body : ""}>{children}</div>
    </div>
  );
}

export default Shell;
