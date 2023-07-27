import { useState, useEffect } from "react";
import BlogList from "./practice_blogs";
import axios from "axios";
const Practice = ({ Cartdata, setCart, count, addcount }) => {
  const [maindb, setMain] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/data").then((ele) => {
      setData(ele.data);
      setMain(ele.data);
      console.log(ele);
      console.log(Cartdata);
    });
    console.log("UseEffect");
  }, []);

  return (
    <div>
      <BlogList
        blogs={data}
        changeblog={setData}
        maindata={maindb}
        addCart={setCart}
        cart={Cartdata}
        count={count}
        addcount={addcount}
      />
    </div>
  );
};

export default Practice;
