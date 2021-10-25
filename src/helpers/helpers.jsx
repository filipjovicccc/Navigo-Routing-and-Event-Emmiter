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
  
  export const deleteHandler = (e, id, list, ex, fn, fn2, ex2, ex3, fn3) => {
    fn2([...ex2, { ex3: ex3, id: Math.random() * 1000 }]);
    fn3("");
  
    fn(list.filter((el) => el.id !== ex.id));
  };