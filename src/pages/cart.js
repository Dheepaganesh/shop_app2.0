// import { useEffect } from "react";
import styled from "styled-components";
// import axios from "axios";
import { AiTwotoneDelete, AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect, useState } from "react";

const Table = styled.table`
  width: 80%;
  margin: 0 auto;
  background-color: white;
  border: 0.5px solid whitesmoke;
  border-collapse: collapse;
  background-color: white;
  color: black;
`;

const Head = styled.h1`
  margin: 0 auto;
`;

const HeadRow = styled.tr`
  height: 40px;
  border: 0.5px solid whitesmoke;
  text-align: center;
`;

const HeadColumn = styled.td`
  height: 40px;
  border: 0.2px solid black;
`;

const Row = styled.tr`
  height: 250px;
  border: 0.5px solid whitesmoke;
  text-align: center;
`;
const Row1 = styled.tr`
  text-align: center;
  height: 250px;
  border: 0.5px solid black;
`;
const Column = styled.td`
  height: 250px;
  border: 0.2px solid black;
`;

const Column1 = styled.td`
  height: 250px;
  border: 0.2px solid black;
`;

const Image = styled.img`
  border-radius: 12px;
`;
const IconContainer = styled.div`
  text-align: center;

  svg {
    color: red;
    font-size: 26px;
  }
`;

const NoResultContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 15%;
  flex-direction: column;
  text-align: center;
  font-size: 45px;

  svg {
    color: rgb(255, 0, 0);
    font-size: 58px;
  }
`;

const NoResult = styled.h1`
  text-align: center;
  margin-top: 20%;
  font-size: 45px;
  color: whitesmoke;

  svg {
    f
    color: black;
    padding-top: 20px;
  }
`;

// const DeleteIcon

const Cart = ({ data, setCart, count, addcount }) => {
  const [cartList, setcartList] = useState([]);

  function removeDuplicatesAndCount(data) {
    const countMap = {};
    data.forEach((item) => {
      const key = JSON.stringify(item);
      countMap[key] = (countMap[key] || 0) + 1;
    });

    return Object.entries(countMap).map(([key, value]) => ({
      item: JSON.parse(key),
      count: value,
    }));
  }

  const countedData = removeDuplicatesAndCount(data);

  useEffect(() => {
    setcartList(countedData);
  }, []);

  const DeleteItem = (index) => {
    let newData = data?.filter((element, i) => i !== index);
    setCart(newData);
    let countDecrement = count - 1;
    addcount(countDecrement);
  };

  const DeleteItem1 = (id) => {
    console.log(cartList[0]?.item);
    const newList = cartList?.filter((item, i) => cartList[i]?.item?.id !== id);
    let newData = data?.filter((element, i) => element?.id !== id);
    setCart(newData);
    console.log(newData);
    //filter((element, i) => i !== index
    setcartList(newList);
    addcount(newData?.length);
  };

  return (
    <div>
      {cartList?.length === 0 ? (
        <NoResultContainer>
          <div>
            <AiOutlineShoppingCart />
          </div>
          <div>Cart Empty</div>
        </NoResultContainer>
      ) : null}
      <Table>
        {cartList?.length > 0 ? (
          <HeadRow>
            <HeadColumn colSpan={5}>
              <Head>Cart</Head>
            </HeadColumn>
          </HeadRow>
        ) : null}
        {cartList?.map(({ item, count, index }) => (
          <Row>
            <Column>
              <Image
                src={item?.image}
                alt="img"
                width={140}
                height={140}
              ></Image>
            </Column>
            <Column>
              <h5>Title : {item?.title}</h5>
              <p>Category : {item?.category}</p>
            </Column>
            <Column>
              <h3>Rs.{item?.price}</h3>
            </Column>
            <Column>
              <h4>{count}</h4>
            </Column>
            <Column>
              <IconContainer>
                <AiTwotoneDelete onClick={() => DeleteItem1(item?.id)} />
              </IconContainer>
            </Column>
          </Row>
        ))}

        {cartList?.length > 0 ? (
          <Row1>
            <Column1 colSpan={3}>
              <h1>Total Price:</h1>
            </Column1>
            <Column1 colSpan={2}>
              <h3>
                Rs.
                {parseInt(
                  data?.reduce((total, item) => total + item?.price, 0)
                )}
              </h3>
            </Column1>
          </Row1>
        ) : null}
      </Table>
    </div>
  );
};

export default Cart;

//

// {data?.map((element, index) => {
//     return (
//       <Row>
//         <Column>
//           <Image
//             src={element?.image}
//             alt="img"
//             width={140}
//             height={140}
//           ></Image>
//         </Column>
//         <Column>
//           <h5>Title : {element?.title}</h5>
//           <p>Category : {element?.category}</p>
//         </Column>
//         <Column>
//           <h3>Rs.{element?.price}</h3>
//         </Column>
//         <Column>
//           <IconContainer>
//             <AiTwotoneDelete onClick={() => DeleteItem(index)} />
//           </IconContainer>
//         </Column>
//       </Row>
//     );
//   })}
