import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { SneakersContext } from "../../pages/Provider/Provider";

import style from "./Header.module.scss";

function Header() {
  const { onClickShowCart, totalPrice, setRandomEmojieIndex } =
    useContext(SneakersContext);

  return (
    <header className={`${style.header} pad flex j-cont-sb`}>
      <NavLink className={`${style.headerLeft} flex a-items-center`}>
        <img width={40} height={40} src="/img/logo.svg" alt="Логотип" />
        <div className={style.headerInfo}>
          <h2>REACT SNEAKERS</h2>
          <p>Магазин лучших кроссовок</p>
        </div>
      </NavLink>
      <ul className={`${style.headerRight} flex`}>
        <li>
          <button onClick={onClickShowCart}>
            <img width={18} height={18} src="img/cart.svg" alt="Корзина" />
            <span>{totalPrice} руб.</span>
          </button>
        </li>
        <li>
          <NavLink
            to="/favorite"
            onClick={setRandomEmojieIndex}
            className={style.link}
          >
            <img
              width={18}
              height={18}
              src="img/favorites.svg"
              alt="Закладки"
            />
            <span>Избранное</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={setRandomEmojieIndex}
            to="/my-purchases"
            className={style.link}
          >
            <img width={18} height={18} src="img/profile.svg" alt="Профиль" />
            <span>Профиль</span>
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
