import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import EventEmitter from "../helpers/EventEmitter";
import { Button } from "../shared/sharedComponents";
import freezer from "../../store";
function TrashEmitter(id) {
  useEffect(() => {
    const onNewLog = (eventData) => {
      setLogs((prevValue) => [...prevValue, eventData]);
    };
    const listener = EventEmitter.addListener("NewLog", onNewLog);
    return () => {
      listener.remove();
    };
  }, []);
  const [logs, setLogs] = useState([]);

  const example = logs.map((exmp) => exmp);

  const check = example[0];

  const deleteBtn = () => {
    setLogs(logs.filter((t) => t.id !== check.id));
  };
  console.log(freezer.get().deletedItems);
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
