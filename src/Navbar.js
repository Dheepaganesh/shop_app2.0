import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import Contact from "./pages/contact";
import Practice from "./practice";
import FetchCRUD from "./newfetch";
import Cart from "./pages/cart";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { styled } from "styled-components";
import { useState } from "react";

const Head = styled.div`
  grid-area: head;
  display: flex;
  flex-direction: columns;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  width: 400px;
  height: 35px;
  border-radius: 16px 0px 0px 16px;
  border: none;
  margin-top: 2%;
  outline: none;

  ::placeholder {
    padding-left: 65px;
    backgound-color: black;
    color: lightgray;
  }
`;

const SearchButton = styled.button`
  width: 80px;
  height: 35px;
  border-radius: 0px 10px 10px 0px;
  border: none;
  margin-top: 2%;
`;

const BarsMenu = styled.div`
  display: flex;
  flex-direction: rows;
`;

const Bars = styled(Link)`
  margin: 10px;
  color: black;
  text-decoration: none;
`;

const SpanColor = styled.span`
  color: red;
`;

const Navbar = ({ count }) => {
  const condition = count > 0;
  return (
    // <div>
    //   <Link to="/home">Home</Link>
    //   <Link to="/about">App</Link>
    //   <Link to="/contact">App1</Link>
    // </div>
    <div>
      <Head>
        <div className="bar">
          <img
            src="https://p7.hiclipart.com/preview/676/172/890/computer-icons-icon-design-cafe-shopping-store-icon.jpg"
            width={60}
            height={50}
            alt=""
          ></img>
        </div>
        <BarsMenu className="bar">
          <Bars to="/home">Home</Bars>
          <Bars to="/shopping">Shopping</Bars>
          <Bars to="/customers">Customers</Bars>
          <Bars to="/mycart">
            Cart {count > 0 ? <SpanColor>{count}</SpanColor> : null}
          </Bars>
        </BarsMenu>
      </Head>
    </div>
  );
};

export default Navbar;
