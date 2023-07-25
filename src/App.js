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

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/about" component={FetchCRUD} />
        <Route path="/contact" component={Practice} />
      </Switch>
      {/* <MyForm />
      <Practice />
      <FetchCRUD /> */}
      <Navbar />
    </div>
  );
}

export default App;
