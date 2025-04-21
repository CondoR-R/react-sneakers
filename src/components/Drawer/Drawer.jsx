import { useContext } from "react";
import Btn from "../Btn/Btn";
import CartItem from "../CartItem/CartItem";
import SmallBtn from "../SmallBtn/SmallBtn";
import style from "./Drawer.module.scss";
import { SneakersContext } from "../../pages/Provider/Provider";

function Drawer() {
  const { onClickCloseCart, cartItems, totalPrice } =
    useContext(SneakersContext);

  const renderEmptyCart = () => {
    return (
      <div className={`${style.emptyCartBox} flex a-items-center`}>
        <div>
          <img
            className={style.img}
            width={120}
            height={120}
            src="/img/emptyCart.svg"
            alt="Корзина пуста"
          />
          <p>Корзина пустая</p>
          <span className={style.span}>
            Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
          </span>
          <Btn
            onClick={onClickCloseCart}
            positionClass={style.btnPosition}
            isLeftArrow
            marginImg={
              <img
                src="/img/leftArrow.svg"
                width={14}
                height={12}
                alt="Назад"
              />
            }
            text="Вернуться назад"
          />
        </div>
      </div>
    );
  };

  const renderCart = () => {
    return (
      <>
        <div className={style.items}>
          {cartItems.map(({ name, price, id, img }) => (
            <CartItem key={id} title={name} price={price} img={img} id={id} />
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
      </>
    );
  };

  return (
    <div className={style.overlay}>
      <div className={style.drawer}>
        <div className="flex a-items-center j-cont-sb">
          <h2>Корзина</h2>
          <SmallBtn onClick={onClickCloseCart}>
            <img width={14} height={12} src="img/remove.svg" alt="Закрыть" />
          </SmallBtn>
        </div>
        {cartItems.length ? renderCart() : renderEmptyCart()}
      </div>
    </div>
  );
}

export default Drawer;
