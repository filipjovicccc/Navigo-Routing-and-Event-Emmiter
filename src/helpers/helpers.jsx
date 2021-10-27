export const arrowHandler = (e, id, listName, list, fn, fn2) => {
  e.preventDefault();
  const changeListProp = list.map((t) => {
    if (t.id === id) {
      t.list = listName;
    }
    return t;
  });
  fn("");

  fn2(changeListProp);
};
