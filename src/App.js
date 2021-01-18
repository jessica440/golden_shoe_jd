import basket from "./images/basketicon";
import "./App.css";
import NavBar from "./components/NavBar.js";
import HomePage from "./pages/homePage";
import { Products, Product } from "./pages/productPage";
import Contact from "./pages/contactPage";
import About from "./pages/returnsDeliveryPage";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  const history = useHistory();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <NavBar />
          <HomePage />
        </Route>
        <Route path="/products" exact>
          <NavBar />
          <Products />
        </Route>
        <Route path="/about" exact>
          <NavBar />
          <About />
        </Route>
        <Route path="/contact" exact>
          <NavBar />
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
