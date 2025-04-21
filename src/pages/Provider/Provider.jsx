import { createContext, useState } from "react";

import useGetData from "../../customHooks/useGetData";

import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

import URL from "../../URL";

import Drawer from "../../components/Drawer/Drawer";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import style from "./Provider.module.scss";

const SneakersContext = createContext({});

function Provider() {
  const navigate = useNavigate();

  // состояния
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const [isCartOpened, setIsCartOpened] = useState(false);

  // Вычисляемые значения
  const totalPrice = cartItems.reduce((acc, { price }) => acc + price, 0);

  // Обработка событий
  const onClickAddToCart = (newItem) => () => {
    try {
      axios
        .post(`${URL}/cart`, newItem)
        .then((res) => setCartItems((prev) => [...prev, res.data]));
    } catch (error) {
      console.log(error.message);
    }
  };

  const onClickRemoveFromCart = (id) => () => {
    try {
      axios.delete(`${URL}/cart/${id}`);
    } catch (error) {
      console.log(error.message);
    }

    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = (newItem) => {
    try {
      axios
        .post(`${URL}/favorite`, newItem)
        .then((res) => setFavoriteItems((prev) => [...prev, res.data]));
    } catch (error) {
      alert("Не удалось добавить в избранное");
    }
  };

  const onRemoveFromFavorite = (id) => {
    try {
      axios.delete(`${URL}/favorite/${id}`);
    } catch (error) {
      alert("Произошла ошибка :(");
    }
  };

  const onClickShowCart = () => {
    setIsCartOpened(true);
  };

  const onClickCloseCart = () => {
    setIsCartOpened(false);
  };

  const goBack = () => {
    navigate(-1);
  };

  // запросы к серверу при инициализации приложения
  useGetData("/items", setItems);
  useGetData("/cart", setCartItems);
  useGetData("/favorite", setFavoriteItems);

  // контекст
  const contextValue = {
    items,
    cartItems,
    favoriteItems,
    isCartOpened,
    totalPrice,
    onClickAddToCart,
    onClickRemoveFromCart,
    onAddToFavorite,
    onRemoveFromFavorite,
    onClickShowCart,
    onClickCloseCart,
    goBack,
  };

  return (
    <SneakersContext.Provider value={contextValue}>
      <div className={style.app}>
        {isCartOpened && <Drawer />}
        <div className={style.wrapper}>
          <Header />
          <div className={style.horisontalLine}></div>
          <main className={`${style.main} pad`}>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </SneakersContext.Provider>
  );
}

export default Provider;

export { SneakersContext };
