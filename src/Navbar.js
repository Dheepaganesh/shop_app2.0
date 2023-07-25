import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import Contact from "./pages/contact";
import Practice from "./practice";
import FetchCRUD from "./newfetch";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/about">App</Link>
      <Link to="/contact">App1</Link>
    </div>
  );
};

export default Navbar;
