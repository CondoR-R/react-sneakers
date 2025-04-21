import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import axios from "axios";

import URL from "../../URL";

import Shell from "../../components/Shell/Shell";
import EmptyShell from "../../components/EmptyShell/EmptyShell";
import HorizontalLine from "../../components/HorizontalLine/HorizontalLine";

import renderCards from "../../functions/renderCards";

import style from "./OrderPage.module.scss";

function PurchasesPage() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onClickClear = () => {
    try {
      orders.forEach((item) => axios.delete(`${URL}/orders/${item.id}`));
      setOrders([]);
    } catch {
      alert("Произошла ошибка при удалении заказов!");
    }
  };

  useEffect(() => {
    try {
      (async () => {
        const res = await axios.get(`${URL}/orders`);
        setOrders(res.data.reverse());
        setIsLoading(false);
      })();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const renderOrders = () => {
    return (
      <Shell
        title={"Мои покупки"}
        ordersHistory
        isLoading={isLoading}
        onClick={onClickClear}
      >
        {isLoading ? (
          <>
            <ContentLoader
              className={style.orderLoading}
              speed={2}
              width={250}
              height={35}
              viewBox="0 0 250 35"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="0" y="0" rx="5" ry="5" width="250" height="35" />
            </ContentLoader>
            <div className={style.orders}>
              {renderCards(isLoading, [], "", true)}
            </div>
          </>
        ) : (
          orders.map(({ id, items, date }, i) => {
            const orderDate = new Date(date);
            const day = (orderDate.getDate() + "").padStart(2, "0");
            const month = (orderDate.getMonth() + 1 + "").padStart(2, "0");
            const year = (orderDate.getFullYear() + "").padStart(2, "0");
            return (
              <>
                <div className={style.orderBox}>
                  <h2 className={style.orderTitle}>
                    Заказ #{id} <span>от {`${day}-${month}-${year}`}</span>
                  </h2>

                  <div className={style.orders}>
                    {renderCards(isLoading, items, "id", true)}
                  </div>
                </div>
                {i !== orders.length - 1 && <HorizontalLine />}
              </>
            );
          })
        )}
      </Shell>
    );
  };

  const renderEmpty = () => {
    return (
      <EmptyShell
        title="У вас нет заказов"
        text="Пока что вы ничего не покупали. Оформите хотя бы один заказ."
      />
    );
  };

  return orders.length || isLoading ? renderOrders() : renderEmpty();
}

export default PurchasesPage;
