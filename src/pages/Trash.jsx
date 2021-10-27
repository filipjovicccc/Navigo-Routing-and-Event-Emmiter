import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import EventEmitter from "../helpers/EventEmitter";
import TrashEmitter from "../components/TrashEmitter";

// const LazyLoader = React.lazy(() => import("../components/LazyLoading"));
function Trash() {
  return (
    <div>
      <header>
        <h1> Trash page</h1>
        {/* <Suspense fallback={<p>Loading...</p>}>
          <LazyLoader />
        </Suspense> */}
      </header>
      <div className="wrapper">
        <div className="wrap">
          <div>another component</div>
          <h1>Trash</h1>
          <hr />

          <div className="todo-container">
            {/* <Suspense fallback={<p>Loading...</p>}>
            <LazyLoader /> */}
            <ul className="todo-list">
              <TrashEmitter id={Math.random() * 1000} />
            </ul>
            {/* </Suspense> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trash;
