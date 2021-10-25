import { h, render, Component } from "preact";

export const Button = ({ fn, customClass, arrow }) => (
    <button onClick={fn} className={customClass}>
      <i className={arrow}></i>
    </button>
  );
  
  export const List = ({ title, children }) => (
    <div className="wrap">
      <h1>{title}</h1>
      <hr />
      <div className="todo-container">
        <ul className="todo-list">{children}</ul>
      </div>
    </div>
  );