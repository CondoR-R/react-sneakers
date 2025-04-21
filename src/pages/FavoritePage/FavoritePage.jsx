import { useContext } from "react";
import Shell from "../../components/Shell/Shell";
import { SneakersContext } from "../Provider/Provider";
import EmptyShell from "../../components/EmptyShell/EmptyShell";
import Card from "../../components/Card/Card";

function FavoritePage() {
  const { favoriteItems } = useContext(SneakersContext);
  return favoriteItems.length ? (
    <Shell title={"Мое избранное"}>
      {favoriteItems.map(({ name, price, img, itemId }) => (
        <Card title={name} price={price} img={img} id={itemId} />
      ))}
    </Shell>
  ) : (
    <EmptyShell
      title="Закладок нет :("
      text="Вы ничего не добавляли в закладки"
    />
  );
}

export default FavoritePage;
