import { useState } from "react";

import useGetData from "./customHooks/useGetData";

import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const [search, setSearch] = useState("");

  const [isCartOpened, setIsCartOpened] = useState(false);

  const filteredSneakers = search.trim()
    ? items.filter(({ name }) =>
        name.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim())
      )
    : items;

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // получаем список товаров
  useGetData("/items", setItems);

  // получаем список корзины
  useGetData("/cart", setCartItems);

  return (
    <div className="app">
      {isCartOpened && <Drawer />}
      <div className="wrapper">
        <Header />
        <div className="horisontalLine"></div>
        <main className="main pad">
          <div className="content">
            <div className="contentHeader flex j-cont-sb a-items-center">
              <h1>Все кроссовки</h1>
              <div className="searchBlock flex a-items-center">
                <label htmlFor="search">
                  <img
                    width={14.25}
                    height={14.25}
                    src="img/search.svg"
                    alt="Search"
                  />
                </label>
                <input
                  onChange={onChangeSearch}
                  value={search}
                  id="search"
                  type="text"
                  placeholder="Поиск..."
                />
              </div>
            </div>
            <div className="contentBody">
              {filteredSneakers.map(({ name, price, img, id }) => (
                <Card key={id} title={name} price={price} img={img} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
