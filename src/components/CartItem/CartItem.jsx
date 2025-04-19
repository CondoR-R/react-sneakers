import style from "./CartItem.module.scss";

import SmallBtn from "../SmallBtn/SmallBtn";

function CartItem() {
  return (
    <div className={`${style.cartItem} flex a-items-center`}>
      <img
        className={style.sneakersImg}
        width={70}
        height={70}
        src="/img/sneakers/1.jpg"
        alt="Sneakers"
      />
      <div>
        <p>Мужские Кроссовки Nike Air Max 270</p>
        <b>12 999 руб.</b>
      </div>
      <SmallBtn positionClass={style.btnPosition}>
        <img src="img/remove.svg" alt="Убрать" />
      </SmallBtn>
    </div>
  );
}

export default CartItem;
