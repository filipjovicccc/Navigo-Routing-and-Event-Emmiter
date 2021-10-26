import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import EventEmitter from "../helpers/EventEmitter";
export default function TrashEmitter() {
  useEffect(() => {
    const onNewLog = (eventData) => {
      setLogs((prevValue) => [...prevValue, eventData]);
    };
    const listener = EventEmitter.addListener("NewLog", onNewLog);
    return () => {
      listener.remove();
    };
  });
  const [logs, setLogs] = useState([]);
  return (
    <div>
      {logs.map((log) => (
        <div key={log.createat}>{log.text}</div>
      ))}
    </div>
  );
}
