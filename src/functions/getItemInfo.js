const getItemInfo = (itemsGroup, itemId) => {
  const id = itemsGroup.find(
    (item) => /* item?.itemId */ item?.id === itemId
  )?.id;
  return [id !== undefined, id];
};

export default getItemInfo;
