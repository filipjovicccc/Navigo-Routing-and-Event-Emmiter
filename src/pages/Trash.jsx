import { h } from "preact";
import {useEffect, useState} from "preact/hooks"
import EventEmitter from "../helpers/EventEmitter";
import { Button } from "../shared/sharedComponents";
// import TrashEmitter from "../components/TrashEmitter";
function Trash() {
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

  return (
    <div>
      <header>
        <h1> Trash page</h1>
    </header>
      <div className="wrapper">
        <div className="wrap">
          <div>another component</div>
          <h1>Trash</h1>
          <hr />

          <div className="todo-container">
            <ul className="todo-list">
            {logs.map((log) => (
        <div className="todo" key={log.key}>
          {log.text}
          <Button fn={deleteBtn} customClass="trash-btn" arrow="fas fa-trash" />
        </div>
      ))}
     
        {/* <TrashEmitter id={Math.random() * 1000} /> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trash;
