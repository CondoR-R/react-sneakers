import { createContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

import URL from "../../URL";

import Drawer from "../../components/Drawer/Drawer";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HorizontalLine from "../../components/HorizontalLine/HorizontalLine";

import style from "./Provider.module.scss";

const SneakersContext = createContext({});

function Provider() {
  const navigate = useNavigate();

  // состояния
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [arrangedId, setArrangedId] = useState(null);
  const [emojiIndex, setEmojiIndex] = useState(Math.floor(Math.random() * 9));

  const [isCartOpened, setIsCartOpened] = useState(false);
  const [isLoadingCards, setIsLoadingCards] = useState(true);
  const [isArranged, setIsArranged] = useState(false);

  // Вычисляемые значения
  const totalPrice = cartItems.reduce((acc, { price }) => acc + price, 0);

  // Обработка событий
  const setRandomEmojieIndex = () => {
    setEmojiIndex(Math.floor(Math.random() * 9));
  };

  const onClickAddToCart = (newItem) => () => {
    try {
      (async () => {
        // const res = await axios.post(`${URL}/cart`, newItem);
        setCartItems((prev) => [...prev, /* res.data */ newItem]);
      })();
    } catch (error) {
      console.log(error.message);
    }
  };

  const onClickRemoveFromCart = (id) => () => {
    try {
      // axios.delete(`${URL}/cart/${id}`);
    } catch (error) {
      alert("Не удалось добавить в корзину");
    }

    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onClickAddToFavorite = (newItem) => () => {
    try {
      (async () => {
        // const res = await axios.post(`${URL}/favorite`, newItem);
        setFavoriteItems((prev) => [...prev, /*res.data*/ newItem]);
      })();
    } catch (error) {
      alert("Не удалось добавить в избранное");
    }
  };

  const onClickRemoveFromFavorite = (id) => () => {
    try {
      (async () => {
        // axios.delete(`${URL}/favorite/${id}`);
        setFavoriteItems((prev) => prev.filter((item) => item.id !== id));
      })();
    } catch (error) {
      alert("Произошла ошибка :(");
    }
  };

  const onClickShowCart = () => {
    setIsCartOpened(true);
  };

  const onClickCloseCart = () => {
    setIsCartOpened(false);
    setIsArranged(false);
  };

  const goBack = () => {
    setRandomEmojieIndex();
    navigate(-1);
  };

  const onClickArrange = () => {
    setIsArranged(true);
    try {
      (async () => {
        const items = [...cartItems].map(({ name, img, price, itemId }) => ({
          name,
          img,
          price,
          id: itemId,
        }));

        const res = await axios.post(`${URL}/orders`, {
          items,
          date: new Date(),
        });
        setArrangedId(res.data.id);

        // cartItems.forEach((item) => axios.delete(`${URL}/cart/${item.id}`));
        setCartItems((_) => []);
      })();
    } catch {
      alert("Не удалось создать заказ!");
    }
  };

  // запросы к серверу при инициализации приложения
  useEffect(() => {
    (async () => {
      try {
        const itemsResponse = await axios.get(`${URL}/items`);
        // const [cartResponse, favoriteResponse, itemsResponse] =
        //   await Promise.all([
        //     axios.get(`${URL}/cart`),
        //     axios.get(`${URL}/favorite`),
        //     axios.get(`${URL}/items`),
        //   ]);

        // setCartItems(cartResponse.data);
        // setFavoriteItems(favoriteResponse.data);
        setItems(itemsResponse.data);
        setIsLoadingCards(false);
      } catch (error) {
        alert("Ошибка при загрузке страницы :(");
      }
    })();
  }, []);

  // контекст
  const contextValue = {
    items,
    cartItems,
    favoriteItems,
    isCartOpened,
    isLoadingCards,
    isArranged,
    totalPrice,
    arrangedId,
    emojiIndex,
    onClickAddToCart,
    onClickRemoveFromCart,
    onClickAddToFavorite,
    onClickRemoveFromFavorite,
    onClickShowCart,
    onClickCloseCart,
    goBack,
    onClickArrange,
    setRandomEmojieIndex,
  };

  return (
    <SneakersContext.Provider value={contextValue}>
      <div className={style.app}>
        <div>
          <Drawer isOppened={isCartOpened} />
        </div>
        <div className={style.wrapper}>
          <Header />
          <HorizontalLine />
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
