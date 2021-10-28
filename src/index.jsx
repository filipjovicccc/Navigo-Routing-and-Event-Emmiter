import { h, render } from "preact";
import Home from "./pages/Home";
import Navigo from "navigo";
import Navbar from "./components/Navbar";

import Trash from "./pages/Trash";

const router = new Navigo("/");

render(
  <div>
    <Navbar />
    <Home />
  </div>,
  document.getElementById("root")
);
render(
  <div>
    <h1>Hello from Second</h1>
    <Trash />
  </div>,
  document.getElementById("secondRoot")
);

router
  .on("", () => {
    document.getElementById("root").style.display = "";
    document.getElementById("secondRoot").style.display = "none";
  })
  .resolve();
router
  .on("/trash", () => {
    document.getElementById("root").style.display = "none";
    document.getElementById("secondRoot").style.display = "";
  })
  .resolve();

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (undefined /* [snowpack] import.meta.hot */) {
  undefined /* [snowpack] import.meta.hot */
    .accept();
}
