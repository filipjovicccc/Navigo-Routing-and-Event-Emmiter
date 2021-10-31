import Freezer from "freezer-js";

if (!localStorage.getItem("deletedTodos"))
  localStorage.setItem("deletedItems", "[]");

let freezer = new Freezer({
  deletedItems: JSON.parse(localStorage.getItem("deletedItems")),
});
// export let initialState = freezer.get();

export default freezer;
