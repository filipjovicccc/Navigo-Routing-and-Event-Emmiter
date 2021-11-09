/* Welcome to freezer.js playground, feel free to clone it
 * Docs are available at https://github.com/arqex/freezer
 * Enjoy
 */
import EventEmitter from "./src/helpers/EventEmitter";

import Freezer from "freezer-js";

if (!localStorage.getItem("todos")) localStorage.setItem("todos", "[]");

var freezer = new Freezer({
  todos: [1],
  todoInput: "",
  status: "ready",
  filter: "all",
});

export let initialState = freezer.get();

EventEmitter.addListener("itemDeletedFromTrash", function (input) {
  freezer.get().deletedItems.splice(indexOfDeletedItem(input), 1);
  localStorage.setItem(
    "deletedItems",
    JSON.stringify(freezer.get().deletedItems)
  );
});
// var state = freezer.get();

// console.log(state.todos);
// var store = new Freezer({
//   a: { x: 1, y: 2, z: [0, 1, 2] },
//   b: [5, 6, 7, { m: 1, n: 2 }],
//   c: "Hola",
//   d: null,
// It is possible to store whatever
// });

// store.on("update", function (update) {
//   console.log("I was updated: " + update.a.z[3]);
// });

export default Freezer;
