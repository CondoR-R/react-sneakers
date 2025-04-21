import { useContext, useState } from "react";

import { SneakersContext } from "../Provider/Provider";

import style from "./MainPage.module.scss";
import SmallBtn from "../../components/SmallBtn/SmallBtn";
import Card from "../../components/Card/Card";

function MainPage() {
  const { items } = useContext(SneakersContext);

  const [search, setSearch] = useState("");

  // изменение данных для вывода
  const filteredSneakers = search.trim()
    ? items.filter(({ name }) =>
        name.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim())
      )
    : items;

  // обработка событий
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const clickClearSearch = () => {
    setSearch("");
  };

  return (
    <div className={style.content}>
      <div className={`${style.contentHeader} flex j-cont-sb a-items-center`}>
        <h1>{search ? `Поиск по: ${search}` : "Все кроссовки"}</h1>
        <div className={`${style.searchBlock} flex a-items-center`}>
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
          {search && (
            <SmallBtn
              onClick={clickClearSearch}
              positionClass={"searchClear"}
              isSmall
            >
              <img width={7} height={7} src="/img/remove.svg" alt="Очистить" />
            </SmallBtn>
          )}
        </div>
      </div>
      <div className={`${style.contentBody}`}>
        {filteredSneakers.map(({ name, price, img, id }) => (
          <Card key={id} title={name} price={price} img={img} id={id} />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
