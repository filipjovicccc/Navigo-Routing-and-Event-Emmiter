import EventEmitter from 'eventemitter3';

const eventEmitter = new EventEmitter();

const Emitter = {
  on: (event, fn) => eventEmitter.on(event, fn),
  once: (event, fn) => eventEmitter.once(event, fn),
  off: (event, fn) => eventEmitter.off(event, fn),
  emit: (event, payload) => eventEmitter.emit(event, payload)
}

Object.freeze(Emitter);

export default Emitter;


// import { EventEmitter } from "fbemitter";

// const emitter = new EventEmitter();

// export default emitter;
// import { EventEmitter } from "fbemitter";
// import { h, render, Component } from "preact";

// function Navbar(){
//  {
//     return <div>
//   <h1>Hello from Navbar, hello again
//       </h1>;
//   <a href="/" data-navigo>Home</a>
//   <a href="/trash" data-navigo>Trash</a>
//     </div>
  
//   }
// }

// export default Navbar;