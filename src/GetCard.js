import React, { useState } from "react";
import Star from "./StarComp";
import styled from "styled-components";

const CardVal = ({ formData, onDelete }) => {
  const [Image, SetImage] = useState();

  const image = "https://cdn-icons-png.flaticon.com/512/2593/2593468.png";

  const Delete = styled.button`
    margin-top: 10px;
    width: 87%;
    height: 38px;
    outline: red;
    background-color: rgb(255, 0, 0);
    border: none;
    border-radius: 17px;
    color: rgb(241, 241, 241);
  `;

  const Card = styled.div`
    margin: 0 auto;
    padding: 5px;
  `;

  const CardBar = styled.div`
    background-color: rgb(241, 240, 255);
    width: 25%;
    height: auto;
    border-radius: 17px;
    margin: 0 auto;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px;
    box-shadow: 3px 3px 3px 3px grey;
  `;

  return (
    <div>
      {formData.map((data, index) => (
        <CardBar className="" key={index}>
          <Card>
            <img src={image} width={"100px"} height={"100px"}></img>
          </Card>
          <Card>
            <p>Name: {data.Name}</p>
            <p>Location: {data.location}</p>
            <p>
              Rating:
              <Star rate={data.rating} />
            </p>
            <p>Review: {data.review}</p>
            <Delete onClick={() => onDelete(index)}>Delete</Delete>
          </Card>
        </CardBar>
      ))}
    </div>
  );
};

export default CardVal;

// import React from 'react';

// const image="https://cdn-icons-png.flaticon.com/512/2593/2593468.png"

// const CardVal = ({ formData, onDelete }) => {
//   return (
//     <div>
//       {formData.map((data, index) => (
//         <div key={index}>
//            <img src={image} width={'100px'} height={'100px'}></img>
//           <p>Name: {data.Name}</p>
//           <p>Location: {data.location}</p>
//           <p>Rating: {data.rating}</p>
//           <p>Review: {data.review}</p>
//           <button onClick={() => onDelete(index)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardVal;
