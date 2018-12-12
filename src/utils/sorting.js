export const sortAlphabetically = (a, b) => {
  const itemA = a.toUpperCase();
  const itemB = b.toUpperCase();

  if (itemA < itemB) {
    return -1;
  }
  if (itemA > itemB) {
    return 1;
  }
  return 0;
};
