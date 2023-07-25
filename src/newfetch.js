import { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";

const FetchCRUD = () => {
  const [maindb, Setmaindb] = useState([]);
  const [data, setdata] = useState([]);
  const [inp, setInp] = useState("");
  const [ids, setIds] = useState(40);
  const [loop, setloop] = useState(0);

  const PostVal = (value) => {
    setInp(value);
  };

  const getSearch = (value) => {
    setInp(value);
    if (value === "") {
      setdata(maindb);
    }
  };

  const DeleteVal = (ind) => {
    const val = data[ind]?.id;
    console.log(val);
    axios
      .delete("http://localhost:7000/data/" + val)
      .then((ele) => {
        if (ele.status === 200) {
          alert("Deleted Successfully");
        }
        var num = loop + 1;
        setloop(num);
      })
      .catch((err) => alert(err));
  };

  const UpdateVal = (ind) => {
    const val = data[ind]?.id;
    const name_ = prompt("Update your name");
    const mail = prompt("Update your mail");
    const obj = {
      id: val,
      name: name_,
      username: "Dheepaganesh",
      email: mail,
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
    console.log(name_, mail);
    if (name_ !== "" && mail !== "" && name_ !== null && mail !== null) {
      axios
        .put("http://localhost:7000/data/" + val, obj)
        .then((ele) => {
          if (ele.status === 200) {
            alert("Value Updated Successfully");
          }
          var num = loop + 1;
          setloop(num);
        })
        .catch((err) => alert(err));
    }
  };

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
    grid-templates-rows: auto auto auto auto;
    grid-templates-columns: auto auto auto;
    grid-templates-areas:
      "head head head"
      "htag htag htag"
      "shop shop shop"
      "shop shop shop";
  `;

  const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  `;

  const Bars = styled.div`
    margin: 12px;
  `;

  const Content = styled.div`
    display-area: shop;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;

  const HTag = styled.h1`
    display-area: htag;
    margin: 0 auto;
  `;

  const StyledCard = styled.div`
    width: 30%;
    background-color: rgb(242, 245, 247);
    display: grid;
    text-align: center;
    margin: 5px;
    margin-left: 20px;
    margin-bottom: 20px;
    border-radius: 7px;
  `;
  const UpdateButton = styled.button`
    width: 40%;
    background-color: rgb(35, 207, 249);
    margin: 0 auto;
    border: none;
    border-radius: 10px;
    margin-top: 3%;
    margin-bottom: 3%;
  `;

  const DeleteButton = styled.button`
    width: 40%;
    background-color: red;
    margin: 0 auto;
    border: none;
    border-radius: 10px;
    margin-bottom: 3%;
  `;

  const SpanC = styled.span`
    color: lightgreen;
  `;

  const PostElement = () => {
    var newids = ids + 1;
    setIds(newids);
    const obj = {
      id: newids,
      name: inp,
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
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

    setIds(newids);
    console.log(ids);
    axios
      .post("http://localhost:7000/data/", obj)
      .then((ele) => {
        if (ele.status === 201) {
          alert("Success");
        }
        var num = loop + 1;
        setloop(num);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    axios.get("http://localhost:7000/data").then((ele) => {
      Setmaindb(ele.data);
      setdata(ele.data);
    });
  }, [loop]);

  return (
    <div>
      <Main>
        <Head>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1tqgra1aJzIsjcsseDmfs3C5WWC5tYVBIf9z4ZjpJ48s5ltARckTYKLuVthKS_xCj50&usqp=CAU"
              width={60}
              height={60}
            ></img>
          </div>
          <div>
            <SearchInput
              type="text"
              placeholder="Search Products"
              value={inp}
              onChange={(e) => getSearch(e.target.value)}
            ></SearchInput>
            <SearchButton>Search</SearchButton>
          </div>
          <div style={{ display: "flex" }}>
            <Bars>Home</Bars>
            <Bars>Page</Bars>
            <Bars>About</Bars>
          </div>
        </Head>
        <HTag>Customer Details</HTag>
        <Content>
          {data.map((ele, index) => {
            return (
              <StyledCard key={index}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2593/2593468.png"
                  width={120}
                  height={120}
                  alt=""
                  style={{ margin: "0 auto", marginTop: "10px" }}
                ></img>
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
      </Main>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          value={inp}
          onChange={(e) => PostVal(e.target.value)}
        ></input>
        <button onClick={PostElement}>Add</button>
      </div>
    </div>
  );
};

export default FetchCRUD;
