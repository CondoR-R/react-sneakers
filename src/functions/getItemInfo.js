const getItemInfo = (itemsGroup, itemId) => {
  const id = itemsGroup.find((item) => item?.itemId === itemId)?.id;
  return [id !== undefined, id];
};

export default getItemInfo;
