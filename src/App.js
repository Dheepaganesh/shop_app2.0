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
import BlogList from "./practice_blogs";
import Lifecycle from "./lifecycle";
import Mount from "./mount";

function App(props) {
  return (
    <div className="App">
      {/* <Mount /> */}
      {/* <Lifecycle /> */}
      <Navbar />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/shopping" component={Practice} />
        <Route path="/customers" component={FetchCRUD} />
      </Switch>
      {/* <MyForm /> */}
      {/* <Practice /> */}
      {/* <FetchCRUD /> */}
    </div>
  );
}

export default App;
