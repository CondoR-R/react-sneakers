import { useContext } from "react";
import Btn from "../Btn/Btn";
import CartItem from "../CartItem/CartItem";
import SmallBtn from "../SmallBtn/SmallBtn";
import style from "./Drawer.module.scss";
import { SneakersContext } from "../../App";

function Drawer() {
  const { onClickCloseCart, cartItems, totalPrice } =
    useContext(SneakersContext);

  return (
    <div className={style.overlay}>
      <div className={style.drawer}>
        <div className="flex a-items-center j-cont-sb">
          <h2>Корзина</h2>
          <SmallBtn onClick={onClickCloseCart}>
            <img width={14} height={12} src="img/remove.svg" alt="Закрыть" />
          </SmallBtn>
        </div>
        <div className={style.items}>
          {cartItems.map(({ name, price, id, itemId, img }) => (
            <CartItem
              key={id}
              title={name}
              price={price}
              img={img}
              itemId={itemId}
            />
          ))}
        </div>
        <div className={style.cartTotalBlock}>
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>{totalPrice} руб.</b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>{Math.round(totalPrice * 0.05)} руб.</b>
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
