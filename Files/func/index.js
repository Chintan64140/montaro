const getRandom10 = (arr) => {
  return arr
    .sort(() => Math.random() - 0.5) // shuffle array
    .slice(0, 10); // take first 10
};

const toKeyValueArray = (obj) => {
  return Object.entries(obj).map(([key, value]) => ({
    key,
    value,
  }));
};

export { getRandom10, toKeyValueArray };
