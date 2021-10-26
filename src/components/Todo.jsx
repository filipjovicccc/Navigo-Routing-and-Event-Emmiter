import { h } from "preact";
import { useContext, useState } from "preact/hooks";
// import { todoContext, trashContext } from "../helpers/Context";
import { Button } from "../shared/sharedComponents";
import { arrowHandler } from "../helpers/helpers";
import EventEmitter from "../helpers/EventEmitter";

// import { deleteHandler } from "../helpers/helpers";
// import emitter from "../Eemmiter";

function Todo({ text, todo, todos, setTodos, setInputText, id }) {
  // const { todos, setTodos } = useContext(todoContext);
  // const { trashTodos, setTrashTodos } = useContext(trashContext);
  const [example, setExample] = useState("");

  const deleteRamp = () => {
    let filtered = todos.filter((t) => t.id !== todo.id);

    setTodos(filtered);
    EventEmitter.emit("NewLog", {
      text: "Hi from Event Emmiter",
      createat: new Date(),
    });
  };

  return (
    <div className="todo">
      {todo.list !== "DO" ? (
        todo.list === "DOING" ? (
          <Button
            fn={(e) => arrowHandler(e, id, "DO", todos, setInputText, setTodos)}
            customClass="complete-btn"
            arrow="fas fa-arrow-left"
          />
        ) : (
          <Button
            fn={(e) =>
              arrowHandler(e, id, "DOING", todos, setInputText, setTodos)
            }
            customClass="complete-btn"
            arrow="fas fa-arrow-left"
          />
        )
      ) : (
        <Button
          fn={(e) => deleteRamp()}
          // fn={(e) =>
          //   deleteHandler(
          //     e,
          //     id,
          //     todos,
          //     todo,
          //     setTodos,
          //     setTrashTodos,
          //     trashTodos,
          //     text,
          //     setInputText
          //   )
          // }
          customClass="trash-btn"
          arrow="fas fa-trash"
        />
      )}

      <li> {text}</li>
      {todo.list !== "DONE" ? (
        todo.list === "DOING" ? (
          <Button
            fn={(e) =>
              arrowHandler(e, id, "DONE", todos, setInputText, setTodos)
            }
            customClass="complete-btn"
            arrow="fas fa-arrow-right"
          />
        ) : (
          <Button
            fn={(e) =>
              arrowHandler(e, id, "DOING", todos, setInputText, setTodos)
            }
            customClass="complete-btn"
            arrow="fas fa-arrow-right"
          />
        )
      ) : (
        <Button
          fn={(e) => deleteRamp()}
          // fn={(e) =>
          //   deleteHandler(
          //     e,
          //     id,
          //     todos,
          //     todo,
          //     setTodos,
          //     setTrashTodos,
          //     trashTodos,
          //     text,
          //     setInputText
          //   )
          // }
          customClass="trash-btn"
          arrow="fas fa-trash"
        />
      )}
    </div>
  );
}

export default Todo;
