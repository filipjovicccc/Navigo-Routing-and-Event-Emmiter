import { h, render, Component } from "preact";
import { Button } from "../shared/sharedComponents";

function Form({inputText, setInputText, submitTodoHendler}){
 {

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

    return <div>
  {/* <h1>Hello from Form, hello again
      </h1>;
  <a href="/" data-navigo>Home</a>
  <a href="/trash" data-navigo>Trash</a> */}
       <form>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <Button
          fn={submitTodoHendler}
          customClass="todo-button"
          arrow="fas fa-plus-square"
          type="submit"
        />
      </form>


    </div>
  
  }
}

export default Form;