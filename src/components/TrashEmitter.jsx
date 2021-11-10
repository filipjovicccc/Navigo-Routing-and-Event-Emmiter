import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { Button } from "../shared/sharedComponents";
const getTodosFromLocalStorage = JSON.parse(localStorage.getItem("todos"));

const filteredList = (list, listName) =>
  list.filter((todo) => todo.list === listName);

function TrashEmitter(id) {
  const [logs, setLogs] = useState(getTodosFromLocalStorage);

  useEffect(() => {
    const filtered = filteredList(getTodosFromLocalStorage, 'DELETED')
    setLogs(filtered)
  }, []);

  const deleteBtn = (id) => {
    setLogs(logs.filter((t) => t.id !== id));
  };

  console.log('[out]from local: ', getTodosFromLocalStorage, '[out]logs: ', logs);
  return (
    <div>
      {logs.length !== 0 && logs.map((log) => (
        <div className="todo" key={log.key}>
          {log.text}
          <Button fn={() => deleteBtn(log.id)} customClass="trash-btn" arrow="fas fa-trash" />
        </div>
      ))}
    </div>
  );
}
export default TrashEmitter;
