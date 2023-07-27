import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Main = styled.div`
  display: grid;
  grid-templates-rows: auto auto auto;
  grid-templates-columns: auto auto auto;
  grid-templates-areas:
    "head head head"
    "shop shop shop"
    "inp inp inp";
`;

const FormContainer = styled.div`
  display: flex;
  display-area: inp;
`;

const Content = styled.div`
  display-area: shop;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledForm = styled.form`
  width: 40%;
  display: grid;
  background-color: whitesmoke;
`;

const HTag = styled.h1`
  display-area: head;
  text-align: center;
`;

const StyledCard = styled.div`
  width: 30%;
  background-color: rgba(215, 239, 246, 0.25);
  height: 30%;
  display: grid;
  text-align: center;
  margin: 5px;
  margin-left: 20px;
  margin-bottom: 20px;
  border-radius: 7px;
  text-overlap: ecllipse;
`;
const UpdateButton = styled.button`
  width: 60%;
  background-color: rgba(0, 245, 255, 0.5);
  height: 35px;
  margin: 0 auto;
  border: none;
  border-radius: 10px;
  margin-top: 1%;
  color: white;
`;

const Image = styled.img`
  margin: 0 auto;
  margin-top: 10px;
`;

const Submit = styled.button`
  width: 40%;
  margin: "0 auto";
  margin-top: "10px";
`;

const DeleteButton = styled.button`
  width: 60%;
  height: 35px;
  background-color: rgb(255, 106, 106);
  margin: 0 auto;
  border: none;
  border-radius: 10px;
  margin-top: 3%;
  margin-bottom: 3%;
`;

const SpanC = styled.span`
  color: lightgreen;
`;

const InputStyle = styled.input`
  border: none;
  width: 40%;
  height: 40px;
  margin: 0 auto;
  margin-top: 2%;
  margin-bottom: 2%;
  border-radius: 8px;
`;

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

const FetchCRUD = () => {
  const [maindb, Setmaindb] = useState([]);
  const [data, setdata] = useState([]);
  const [inp, setInp] = useState("");
  const [mail, setMail] = useState("");
  const [ids, setIds] = useState(40);
  const [loop, setloop] = useState(0);

  const PostValue = (value) => {
    setInp(value);
  };

  const PostValue1 = (value) => {
    setMail(value);
  };

  const getSearch = (value) => {
    setInp(value);
    if (value === "") {
      setdata(maindb);
    }
  };

  const NameInput = () => (
    <InputStyle
      type="text"
      value={inp}
      placeholder="Enter Name"
      minLength={4}
      pattern="[A-Za-z]+"
      maxLength={15}
      onChange={(e) => PostValue(e.target.value)}
    ></InputStyle>
  );

  const DeleteVal = (ind) => {
    const val = data[ind]?.id;
    console.log(val);
    axios
      .delete("http://localhost:7000/data/" + val)
      .then((ele) => {
        if (ele.ok) {
          alert("Deleted Successfully");
        }
        let num = loop + 1;
        setloop(num);
      })
      .catch((err) => alert(err));
  };

  const UpdateVal = (ind) => {
    const val = data[ind]?.id;
    const namePrompt = prompt("Update your name");
    const mailPrompt = prompt("Update your mail");
    const obj = {
      id: val,
      name: namePrompt,
      username: "Dheepaganesh",
      email: mailPrompt,
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
    };

    if (
      namePrompt !== "" &&
      mailPrompt !== "" &&
      namePrompt !== null &&
      mailPrompt !== null
    ) {
      axios
        .put("http://localhost:7000/data/" + val, obj)
        .then((ele) => {
          if (ele.ok) {
            alert("Value Updated Successfully");
          }
          var num = loop + 1;
          setloop(num);
        })
        .catch((err) => console.log(err));
    }
  };

  // const SearchInput = styled.input`
  //   width: 400px;
  //   height: 35px;
  //   border-radius: 16px 0px 0px 16px;
  //   border: none;
  //   margin-top: 2%;
  //   outline: none;

  //   ::placeholder {
  //     padding-left: 65px;
  //     backgound-color: black;
  //     color: lightgray;
  //   }
  // `;

  // const SearchButton = styled.button`
  //   width: 80px;
  //   height: 35px;
  //   border-radius: 0px 10px 10px 0px;
  //   border: none;
  //   margin-top: 2%;
  // `;

  // const Head = styled.div`
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: space-between;
  //   flex-wrap: wrap;
  // `;

  // const Bars = styled.div`
  //   margin: 12px;
  // `;

  const PostElement = (e) => {
    e.preventDefault();
    var lastElement = data[data.length - 1];
    var newIds = lastElement?.id + 1;
    console.log(newIds);
    setIds(newIds);
    const obj = {
      id: newIds,
      name: inp,
      username: "Moriah.Stanton",
      email: mail,
      address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Lebsackbury",
        zipcode: "31428-2261",
        geo: {
          lat: "-38.2386",
          lng: "57.2232",
        },
      },
      phone: "024-648-3804",
      website: "ambrose.net",
      company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models",
      },
    };

    setIds(newIds);
    console.log(ids);
    axios
      .post("http://localhost:7000/data/", obj)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          alert("Success");
          console.log(response.ok);
          setInp("");
          setMail("");
        }
        var num = loop + 1;
        setloop(num);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:7000/data")
      .then((ele) => {
        Setmaindb(ele.data);
        setdata(ele.data);
      })
      .catch((error) => console.log(error));
  }, [loop]);

  return (
    <div>
      <Main>
        <HTag>
          <h1>Customer Details</h1>
        </HTag>
        <Content>
          {data.map((ele, index) => {
            return (
              <StyledCard key={index}>
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/2593/2593468.png"
                  width={120}
                  height={120}
                  alt="img"
                ></Image>
                <h5>
                  Name: <SpanC>{ele?.name}</SpanC>
                </h5>
                <h4>
                  Mail: <SpanC>{ele?.email}</SpanC>
                </h4>
                <UpdateButton onClick={() => UpdateVal(index)}>
                  Update
                </UpdateButton>
                <DeleteButton onClick={() => DeleteVal(index)}>
                  Delete
                </DeleteButton>
              </StyledCard>
            );
          })}
        </Content>
        <FormContainer>
          {/* <StyledInput
            type="text"
            name="Name"
            value={inp}
            onChange={(e) => {
              PostValue(e.target.value);
            }}
            placeholder="First Name"
            required
          /> */}
          <StyledForm onSubmit={(e) => PostElement(e)}>
            {NameInput()}
            <InputStyle
              type="email"
              value={mail}
              placeholder="Enter Mail"
              onChange={(e) => PostValue1(e.target.value)}
            ></InputStyle>
            <Submit type="submit">Post</Submit>
          </StyledForm>
        </FormContainer>
      </Main>
    </div>
  );
};

export default FetchCRUD;
