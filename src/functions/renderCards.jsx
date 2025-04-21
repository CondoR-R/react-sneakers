import Card from "../components/Card/Card";

const renderCards = (
  isLoading = false,
  items = [],
  id = "",
  isOrderHistory = false
) => {
  const emptyItems = new Array(20).fill(null);

  return isLoading
    ? emptyItems.map((_, i) => (
        <Card key={i} isLoadingOrders={isOrderHistory && isLoading} />
      ))
    : items.map((item) => (
        <Card
          key={item[id]}
          title={item.name}
          price={item.price}
          img={item.img}
          id={item[id]}
          isOrderHistory={isOrderHistory}
        />
      ));
};

export default renderCards;
