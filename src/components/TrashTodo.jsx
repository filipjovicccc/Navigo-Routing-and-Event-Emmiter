import { h } from "preact";
import { useState } from "preact/hooks";
// import { trashContext } from "../helpers/Context";
// import { useContext } from "preact/hooks";
import { Button } from "../shared/sharedComponents";


function TrashTodo(
  // { todo, id }
  ) {
  // const { trashTodos, setTrashTodos } = useContext(trashContext);


  // const deleteRamp = () => {
  //   let filtered = trashTodos.filter((t) => t.id !== todo.id);

  //   setTrashTodos(filtered);
  // };

  return (
    <div className="todo">
      {/* <li>{text} */}
        {/* {todo.ex3} */}
      {/* </li> */}
      <Button 
      // fn={deleteRamp} 
      customClass="trash-btn" 
      arrow="fas fa-trash" />
    </div>
  );
}

export default TrashTodo;