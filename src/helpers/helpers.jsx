import { h } from "preact";
export const arrowHandler = (e, id, listName, list, fn, zn2) => {
  e.preventDefault();
  const changeListProp = list.map((t) => {
    if (t.id === id) {
      t.list = listName;
    }
    return t;
  });
  fn("");

  zn2(changeListProp);
};
