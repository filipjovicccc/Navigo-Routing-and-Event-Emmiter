import { h, render } from "preact";
import Home from "./pages/Home";
import Navigo from "navigo";
import Navbar from "./components/Navbar";
import {Suspense, lazy} from "preact/compat";


const router = new Navigo("/");


const Trash = lazy(() => import("./pages/Trash"));

render(
  <div>
    
    <Navbar />
  
  </div>,
  document.getElementById("navbar")
);
render(
  <div>
  
 <Home />
  </div>,
  document.getElementById("home")
);


router
  .on("", () => {
    document.getElementById("home").style.display = "";
    document.getElementById("trash").style.display = "none";
  })
  .resolve();
router
  .on("/trash", () => {
   
    document.getElementById("home").style.display = "none";
    document.getElementById("trash").style.display = "";
    render(
    <Suspense  fallback={<p>Loading...</p>}>
    
    <Trash />
   </Suspense>, document.getElementById("trash"))
   
  })
  .resolve();

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (undefined /* [snowpack] import.meta.hot */) {
  undefined /* [snowpack] import.meta.hot */
    .accept();
}
