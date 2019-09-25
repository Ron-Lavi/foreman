export const chunkItemsByAmount = (items, amount = 12) => {
  const chunkedItems = [];
  for (let i = 0; i < items.length; i += amount) {
    chunkedItems.push(items.slice(i, i + amount));
  }
  return chunkedItems;
};
