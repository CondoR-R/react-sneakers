import Btn from "../Btn/Btn";
import CartItem from "../CartItem/CartItem";
import SmallBtn from "../SmallBtn/SmallBtn";
import style from "./Drawer.module.scss";

function Drawer() {
  return (
    <div className={style.overlay}>
      <div className={style.drawer}>
        <div className="flex a-items-center j-cont-sb">
          <h2>Корзина</h2>
          <SmallBtn>
            <img src="img/remove.svg" alt="Закрыть" />
          </SmallBtn>
        </div>
        <div className={style.items}>
          <CartItem />
        </div>
        <div className={style.cartTotalBlock}>
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 496 руб.</b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <Btn
            positionClass={style.totalBtn}
            text="Оформить заказ"
            marginImg={
              <img width={14} height={12} src="/img/next.svg" alt="next" />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Drawer;
