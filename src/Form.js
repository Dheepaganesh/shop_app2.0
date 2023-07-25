import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardVal from "./GetCard";

const StyledInput = styled.input`
  padding: 8px;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 30%;
  height: 25px;
  border: none;
  outline-color: rgb(87, 191, 137);
`;

const StyledSelect = styled.select`
  padding: 8px;
  margin-bottom: 16px;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 30%;
  height: 45px;
  border: none;
  outline-color: rgb(87, 191, 137);
`;

const StyledText = styled.textarea`
  padding: 8px;
  margin-bottom: 16px;
  margin: 0 auto;
  margin-bottom: 40px;
  margin-top: 20px;
  width: 30%;
  height: 45px;
  border: none;
  outline-color: rgb(87, 191, 137);
`;
const StyledSubmit = styled.button`
  width: 30%;
  margin: 0 auto;
  margin-top: 1%;
  margin-bottom: 2%;
  height: 45px;
  background-color: rgb(84, 199, 247);
  color: white;
  border: none;
  outline: none;
  border-radius: 10px;
`;

const StyledForm = styled.form`
  width: 60%;
  margin: 0 auto;
  margin-top: 2%;
  margin-bottom: 2%;
  background-color: rgb(28, 61, 80);
  display: flex;
  flex-direction: column;
  border-radius: 22px;
`;

const StyledHead = styled.h1`
  text-align: center;
  color: whitesmoke;
  margin-top: 3%;
  margin-bottom: 3%;
`;

const Form = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [data, addData] = useState([]);
  const handleChangeName = (value) => {
    setName(value);
  };

  const valid = name !== "" && location !== "" && rating !== "";

  const handleChangeLoc = (value) => {
    setLocation(value);
  };
  const handleChangeRate = (value) => {
    setRating(value);
  };

  const handleChangeReview = (value) => {
    setReview(value);
  };

  useEffect(() => {
    console.log("Data Updated");
    console.log(data);
  }, [data]);

  const handleData = (e) => {
    e.preventDefault();
    const obj = {
      Name: name,
      location: location,
      rating: rating,
      review: review,
    };
    const database = [...data, obj];
    console.log(database);
    addData(database);
    setName("");
    setLocation("");
    setRating("");
    setReview("");
  };
  const loc = ["Chennai", "Bangalore", "Mumbai", "Pune"];
  const rate = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

  const handleDelete = (index) => {
    const updatedDataArray = data.filter((item, i) => i !== index);
    alert("Data deleted successfully");
    addData(updatedDataArray);
  };

  return (
    <div>
      <StyledForm onSubmit={(e) => handleData(e)}>
        <StyledHead>Consumer Register</StyledHead>
        <StyledInput
          type="text"
          name="Name"
          value={name}
          onChange={(e) => {
            handleChangeName(e.target.value);
          }}
          placeholder="First Name"
          required
        />
        <StyledSelect
          value={location}
          onChange={(e) => handleChangeLoc(e.target.value)}
        >
          <option value="">Select Location</option>
          {loc.map((ele, index) => (
            <option value={ele} key={index}>
              {ele}
            </option>
          ))}
        </StyledSelect>
        <StyledSelect
          value={rating}
          onChange={(e) => handleChangeRate(e.target.value)}
        >
          <option value="">Select Rating</option>
          {rate.map((ele, index) => (
            <option value={ele} key={index}>
              {ele}
            </option>
          ))}
        </StyledSelect>
        <StyledText
          name="review"
          value={review}
          style={{
            width: "38%",
            height: "40px",
            margin: "0 auto",
            marginTop: "10px",
            marginBottom: "10px",
          }}
          onChange={(e) => handleChangeReview(e.target.value)}
        />

        {valid && (
          <StyledSubmit type="submit" id="submitbutton">
            Submit
          </StyledSubmit>
        )}
      </StyledForm>
      <CardVal formData={data} onDelete={handleDelete} />
    </div>
  );
};

export default Form;
