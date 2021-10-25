import { h } from "preact";
import TrashTodo from "../components/TrashTodo";
// import { useContext } from "preact/hooks";
import { useState } from "preact/hooks";
// import emitter from "../Eemmiter";
// import { trashContext } from "../helpers/Context";

// const LazyLoader = React.lazy(() => import("../components/LazyLoading"));
function Trash() {
  // const { trashTodos, setTrashTodos } = useContext(trashContext);
  const [trashTodos, setTrashTodos] = useState([])
  const [example, useExample] = useState("")
  function componentDidMount(){
   Emmiter.on("trash todos", (newValue) => useExample({example: newValue}))
   console.log(example)
  }
  function componentWillUnmount(){
  Emmiter.off("trash todos");
  }

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
               

                 {
                example.map((todo) => (
                  <TrashTodo
                  componentDidMount={componentDidMount}
                  componentWillUnmount={componentWillUnmount}
                  newValue={newValue}
                    trashTodos={trashTodos}
                    setTrashTodos={setTrashTodos}
                    id={Math.random() * 1000}
                    todo={todo}
                    key={todo.id}
                    text={todo.text}
                  />
                ))} 
              </ul>
            {/* </Suspense> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trash;
