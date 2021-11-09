import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import EventEmitter from "../helpers/EventEmitter";
import { Button } from "../shared/sharedComponents";
import freezer from "../../store";
function TrashEmitter(id) {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const getTodosFromLocalStorage = JSON.parse(localStorage.getItem("todos"));
    // setLogs(getTodosFromLocalStorage);
    const onNewLog = (eventData) => {
      setLogs((prevValue) => [...prevValue, eventData]);
    };
    const listener = EventEmitter.addListener("NewLog", onNewLog);
    return () => {
      listener.remove();
    };
  }, [logs, setLogs]); //ubaciti dependecy

  const example = logs.map((exmp) => exmp);
  // logs.filter(todo => todo.list === 'DELETED')
  const getDeleted = logs.filter((exmp) => exmp.list === "DELETED");

  const check = example[0];

  const deleteBtn = () => {
    setLogs(logs.filter((t) => t.id !== check.id));
  };

  return (
    <div>
      {logs.map((log) => (
        <div className="todo" key={log.key}>
          {log.text}
          <Button fn={deleteBtn} customClass="trash-btn" arrow="fas fa-trash" />
        </div>
      ))}
    </div>
  );
}
export default TrashEmitter;
