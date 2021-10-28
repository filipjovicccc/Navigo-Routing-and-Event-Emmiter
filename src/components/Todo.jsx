import { h } from "preact";
import { Button } from "../shared/sharedComponents";
import { arrowHandler } from "../helpers/helpers";
import EventEmitter from "../helpers/EventEmitter";

function Todo({ text, todo, setInputText, id, todos, setTodos }) {
  const deleteRamp = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
    EventEmitter.emit("NewLog", {
      text: todo.text,
      id: todo.id,
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
          customClass="trash-btn"
          arrow="fas fa-trash"
        />
      )}
    </div>
  );
}

export default Todo;
