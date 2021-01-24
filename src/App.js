// import basket from "./images/basketicon";
import "./App.css";
import HomePage from "./pages/homePage";
import { Products } from "./pages/productPage";
import Contact from "./pages/contactPage";
import DeliveryReturns from "./pages/returnsDeliveryPage";
import ReturnsLabel from "./pages/returnsLabel";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFoundPage from "./pages/pageNotFound";
import Faqs from "./pages/faq";
import Basket from "./pages/basket";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/basket" exact>
          <Basket />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/deliveryreturns" exact>
          <DeliveryReturns />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/faqs" exact>
          <Faqs />
        </Route>
        <Route path="/label" exact>
          <ReturnsLabel />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
