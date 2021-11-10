import { h } from "preact";
import TrashEmitter from "../components/TrashEmitter";

function Trash() {

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
              <TrashEmitter id={Math.random() * 1000} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trash;
