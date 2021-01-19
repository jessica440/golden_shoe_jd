// import basket from "./images/basketicon";
import "./App.css";
import HomePage from "./pages/homePage";
import { Products } from "./pages/productPage";
import Contact from "./pages/contactPage";
// import About from "./pages/returnsDeliveryPage";
import {
  BrowserRouter,
  Switch,
  Route,
  // Link,
  // useHistory,
} from "react-router-dom";
import NotFoundPage from "./pages/pageNotFound";

function App() {
  // const history = useHistory();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/about" exact>
          {/* <About /> */}
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
