import { h, render, Component } from "preact";
import "./Navbar.css"

class Navbar extends Component {
  render() {
    return <div className="navbar">
  {/* <h1>Hello from Navbar</h1>; */}
  <a href="/" style={{ color: "inherit", textDecoration: "inherit" }} data-navigo>Home</a>
  <a href="/trash"style={{ color: "inherit", textDecoration: "inherit" }}  data-navigo>Trash</a>
    </div>
  
  }
}

export default Navbar;