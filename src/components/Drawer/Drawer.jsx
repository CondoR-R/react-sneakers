function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <div className="flex a-items-center j-cont-sb">
          <h2>Корзина</h2>
          <button className="smallBtn btnPosition">
            <img src="img/remove.svg" alt="Закрыть" />
          </button>
        </div>

        <div className="items">
          <div className="cartItem flex a-items-center">
            <img
              className="sneakersImg"
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <button className="smallBtn btnPosition">
              <img src="img/remove.svg" alt="Убрать" />
            </button>
          </div>
        </div>
        <div className="cartTotalBlock">
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
          <button className="btn totalBtn">
            <span className="btnMargin"></span>
            <span className="btnText">Оформить заказ</span>
            <span className="btnMargin">
              <img width={14} height={12} src="/img/next.svg" alt="next" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
