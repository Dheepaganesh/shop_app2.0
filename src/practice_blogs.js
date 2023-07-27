import styled from "styled-components";
// import { Rate } from "antd";
// import "antd/dist/antd.css";
import { useState } from "react";
import axios from "axios";
import Shopping from "./pages/shopping";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

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

const Main = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-column: auto auto auto;
  grid-template-areas:
    "head head head"
    "shop shop shop"
    "shop shop shop";
  background-color: whitesmoke;
`;

const Content = styled.div`
  grid-area: shop;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Head = styled.div`
  grid-area: head;
  display: flex;
  flex-direction: columns;
  justify-content: space-between;
`;

const BarsMenu = styled.div`
  display: flex;
  flex-direction: rows;
`;

const Bars = styled.link`
  margin: 10px;
`;
const Image = styled.img`
  margin: 0 auto;
`;

const Button = styled.button`
  width: 40%;
  height: 25px;
  margin: 0 auto;
  margin-bottom: 1%;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: 8184e7;

  &:hover {
    background-color: rgb(30, 220, 109);
  }
`;
const BlogList = ({
  blogs,
  changeblog,
  maindata,
  cart,
  addCart,
  count,
  addcount,
}) => {
  const [search, addSearch] = useState("");
  const [Cart, addtoCart] = useState([]);
  const [inp, setInp] = useState("");
  const [nresult, setnresult] = useState(false);

  const PostVal = (ind) => {
    // axios
    //   .post("https://fakestoreapi.com/products/", blogs[ind])
    //   .then((ele) => {
    //     if (ele.status === 200) {
    //       console.log(blogs[ind]);
    //       alert("Success : 200");
    //     }
    //   })
    //   .catch((err) => {
    //     alert("Error");
    //   });
  };

  const AddCart = (index) => {
    console.log(cart);
    let cartData = [...cart, maindata[index]];
    // axios
    //   .post(" http://localhost:9000/data", maindata[index])
    //   .then((ele) => {
    //     if (ele.status === 200) {
    //       console.log(ele);
    //       alert("Success : 200");
    //     }
    //   })
    //   .catch((err) => {
    //     alert("Error");
    //   });
    let countIncrement = count + 1;
    addcount(countIncrement);
    console.log(count);

    addCart(cartData);
    console.log(cartData);
  };

  const SearchData = () => {
    const reg = RegExp(inp, "i");
    const fil = blogs.filter((ele) => reg.test(ele?.title));
    if (fil.length === 0) {
      setnresult(true);
    }
    changeblog(fil);
    console.log(fil);
  };

  const getSearch = (value) => {
    setInp(value);
    if (value === "") {
      changeblog(maindata);
    }
  };
  const Card = styled.div`
    width: 25%;
    height: 400px;
    background-color: white;
    margin: 20px;
    padding-top: 70px;
    text-align: center;
    display: grid;
    border-radius: 10px;
    border: 0.1px solid rgba(0, 0, 0, 0.1);

    &:hover {
      box-shadow: 0 4px 3px -3px black;
      scale: 1.02;
    }
  `;

  const No = styled.h1`
    grid-area: shop;
    margin: 0 auto;
  `;

  const Search = styled.div`
    margin: 0 auto;
    grid-area: head;
  `;

  const condition = nresult === true;

  return (
    <Main>
      {/* <Head>
        <div className="bar">
          <img
            src="https://p7.hiclipart.com/preview/676/172/890/computer-icons-icon-design-cafe-shopping-store-icon.jpg"
            width={60}
            height={50}
            alt=""
          ></img>
        </div>
        
        <BarsMenu className="bar">
          <Link to="/">Home</Link>
          <Link>Shopping</Link>
          <Link>Help</Link>
        </BarsMenu>
      </Head> */}
      <div className="bar" style={{ gridArea: "head", margin: "0 auto" }}>
        <SearchInput
          type="text"
          placeholder="Search Products"
          value={inp}
          onChange={(e) => getSearch(e.target.value)}
        ></SearchInput>
        <SearchButton onClick={SearchData}>Search</SearchButton>
      </div>
      <Content>
        {blogs.map((ele, index) => (
          <Card key={index}>
            <Image src={ele?.image} width={130} height={130}></Image>
            <h3
              title={ele?.title}
              style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                width: "200px",
                margin: "0 auto",
                cursor: "pointer",
              }}
            >
              {ele?.title.slice(0, 32)}
            </h3>
            <p>Rs.{ele?.price}</p>
            {/* <Rate value={3} /> */}
            <Button onClick={() => AddCart(index)}>Add To Cart</Button>
            <Button onClick={() => PostVal(index)}>Buy Now</Button>
          </Card>
        ))}
      </Content>
      <div>{condition && <No>No Result Found</No>}</div>
    </Main>
  );
};

export default BlogList;
