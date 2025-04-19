function Header() {
  return (
    <header className="header pad flex j-cont-sb">
      <div className="headerLeft flex a-items-center">
        <img width={40} height={40} src="/img/logo.svg" alt="Логотип" />
        <div className="headerInfo">
          <h2>REACT SNEAKERS</h2>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="headerRight flex">
        <li>
          <img width={18} height={18} src="img/cart.svg" alt="Корзина" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="img/favorites.svg" alt="Закладки" />
          <span>Закладки</span>
        </li>
        <li>
          <img width={18} height={18} src="img/profile.svg" alt="Профиль" />
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
