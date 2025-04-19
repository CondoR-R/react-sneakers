import { createContext, useState } from "react";

import useGetData from "./customHooks/useGetData";

import Drawer from "./components/Drawer/Drawer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import axios from "axios";
import URL from "./URL";
import ContentBox from "./components/ContentBox/ContentBox";

const SneakersContext = createContext({});

function App() {
  // состояния
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const [isCartOpened, setIsCartOpened] = useState(false);

  // card
  const onClickAddToCart = (newItem) => () => {
    try {
      axios
        .post(`${URL}/cart`, newItem)
        .then((res) => setCartItems((prev) => [...prev, res.data]));
    } catch {
      console.log("Ошибка");
    }
  };

  const onClickRemoveFromCart = (id) => () => {
    // axios.delete(`${URL}/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.itemId !== id));
  };

  const onClickAddToFavorite = () => {};

  const onClickRemoveFromFavorite = () => {};

  // cart
  const totalPrice = cartItems.reduce((acc, { price }) => acc + price, 0);
  console.log(cartItems);

  const onClickShowCart = () => {
    setIsCartOpened(true);
  };

  const onClickCloseCart = () => {
    setIsCartOpened(false);
  };

  // запросы к серверу
  // получаем список товаров
  useGetData("/items", setItems);

  // получаем список корзины
  useGetData("/cart", setCartItems);

  const contextValue = {
    items,
    cartItems,
    isCartOpened,
    totalPrice,
    onClickAddToCart,
    onClickRemoveFromCart,
    onClickAddToFavorite,
    onClickRemoveFromFavorite,
    onClickShowCart,
    onClickCloseCart,
  };

  return (
    <SneakersContext.Provider value={contextValue}>
      <div className="app">
        {isCartOpened && <Drawer />}
        <div className="wrapper">
          <Header />
          <div className="horisontalLine"></div>
          <main className="main pad">
            <ContentBox />
          </main>
          <Footer />
        </div>
      </div>
    </SneakersContext.Provider>
  );
}

export default App;

export { SneakersContext };
