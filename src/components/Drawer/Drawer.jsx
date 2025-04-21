import { useContext } from "react";

import { SneakersContext } from "../../pages/Provider/Provider";

import Btn from "../Btn/Btn";
import CartItem from "../CartItem/CartItem";
import SmallBtn from "../SmallBtn/SmallBtn";
import Info from "../Info/Info";

import style from "./Drawer.module.scss";

function Drawer({ isOppened }) {
  const {
    onClickCloseCart,
    cartItems,
    totalPrice,
    onClickArrange,
    isArranged,
    arrangedId,
    isInProcess,
  } = useContext(SneakersContext);

  const renderEmptyCart = () => {
    return (
      <div className={style.emptyCartBox}>
        <Info
          spanContent={
            isArranged ? (
              <img
                className={style.imgList}
                width={83}
                height={120}
                src="/img/arranged.svg"
                alt="Заказ оформлен"
              />
            ) : (
              <img
                className={style.imgBox}
                width={120}
                height={120}
                src="/img/emptyCart.svg"
                alt="Корзина пуста"
              />
            )
          }
          title={isArranged ? "Заказ оформлен!" : "Корзина пустая"}
          titleGreen
          text={
            isArranged
              ? `Ваш заказ #${arrangedId} скоро будет передан курьерской доставке`
              : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
          }
          onClick={onClickCloseCart}
        />
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
            onClick={onClickArrange}
            isInProcess={isInProcess}
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
    <div
      className={`${style.overlay} ${isOppened ? style.overlayVisible : ""}`}
      onClick={onClickCloseCart}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${style.drawer} ${isOppened ? style.drawerVisible : ""}`}
      >
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
