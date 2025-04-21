import { useContext } from "react";

import { SneakersContext } from "../Provider/Provider";

import Shell from "../../components/Shell/Shell";
import EmptyShell from "../../components/EmptyShell/EmptyShell";

import renderCards from "../../functions/renderCards";

function FavoritePage() {
  const { favoriteItems, isLoadingCards } = useContext(SneakersContext);

  return isLoadingCards || favoriteItems.length ? (
    <Shell title={"Мое избранное"}>
      {renderCards(isLoadingCards, favoriteItems, "itemId")}
    </Shell>
  ) : (
    <EmptyShell
      title="Закладок нет :("
      text="Вы ничего не добавляли в закладки"
    />
  );
}

export default FavoritePage;
