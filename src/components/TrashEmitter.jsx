import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { Button } from "../shared/sharedComponents";

function TrashEmitter() {
  const getTodosFromLocalStorage = JSON.parse(localStorage.getItem("todos"));
  const [logs, setLogs] = useState(getTodosFromLocalStorage);

  useEffect(() => {
    const filtered = async () =>
      filteredList(getTodosFromLocalStorage, "DELETED");
    setLogs(filtered);

    return () => {};
  }, [getTodosFromLocalStorage]);

  const filteredList = (list, listName) =>
    list.filter((todo) => todo.list === listName);
  console.log(logs);
  const deleteBtn = (id) => {
    setLogs(logs.filter((t) => t.id !== id));
  };

  return (
    <div>
      {logs.length !== 0 &&
        logs.map((log) => (
          <div className="todo" key={log.key}>
            {log.text}
            <Button
              fn={() => deleteBtn(log.id)}
              customClass="trash-btn"
              arrow="fas fa-trash"
            />
          </div>
        ))}
    </div>
  );
}
export default TrashEmitter;
