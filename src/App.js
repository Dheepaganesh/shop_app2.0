// import Form from "./Form";
import Card from "./StarComp";
import MyForm from "./Form";
import Practice from "./practice";
import FetchCRUD from "./newfetch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import Contact from "./pages/contact";
import Navbar from "./Navbar";
import Cart from "./pages/cart";
import BlogList from "./practice_blogs";
import Lifecycle from "./lifecycle";
import Mount from "./mount";
import { useState } from "react";

function App(props) {
  const [cartData, setCart] = useState([]);
  const [Count, addCount] = useState(0);

  return (
    <div className="App">
      {/* <Mount /> */}
      {/* <Lifecycle /> */}
      <Navbar count={Count} />
      <Switch>
        <Route path="/home" component={HomePage} />
        {/* <Route path="/shopping" component={Practice} /> */}
        <Route
          path="/shopping"
          render={(routeProps) => (
            <Practice
              {...routeProps}
              Cartdata={cartData}
              setCart={setCart}
              count={Count}
              addcount={addCount}
            />
          )}
        />
        <Route path="/customers" component={FetchCRUD} />
        <Route
          path="/mycart"
          render={(routeProps) => (
            <Cart
              {...routeProps}
              data={cartData}
              setCart={setCart}
              count={Count}
              addcount={addCount}
            />
          )}
        />
      </Switch>
      {/* <MyForm /> */}
      {/* <Practice /> */}
      {/* <FetchCRUD /> */}
    </div>
  );
}

export default App;
