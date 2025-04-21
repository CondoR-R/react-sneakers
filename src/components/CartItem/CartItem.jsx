import { useContext } from "react";

import { SneakersContext } from "../../pages/Provider/Provider";

import SmallBtn from "../SmallBtn/SmallBtn";

import style from "./CartItem.module.scss";

function CartItem({ title, price, img, id }) {
  const { onClickRemoveFromCart } = useContext(SneakersContext);

  return (
    <div className={`${style.cartItem} flex a-items-center`}>
      <img
        className={style.sneakersImg}
        width={70}
        height={70}
        src={img}
        alt="Sneakers"
      />
      <div>
        <p>{title}</p>
        <b>{price} руб.</b>
      </div>
      <SmallBtn
        onClick={onClickRemoveFromCart(id)}
        positionClass={style.btnPosition}
      >
        <img src="img/remove.svg" alt="Убрать" />
      </SmallBtn>
    </div>
  );
}

export default CartItem;
