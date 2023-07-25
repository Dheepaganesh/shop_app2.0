import { useState, useEffect } from "react";
import BlogList from "./practice_blogs";
import axios from "axios";
const Practice = () => {
  const [maindb, setMain] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/").then((ele) => {
      setData(ele.data);
      setMain(ele.data);
      console.log(ele);
    });
    console.log("UseEffect");
  }, []);

  return (
    <div>
      <BlogList blogs={data} changeblog={setData} maindata={maindb} />
    </div>
  );
};

export default Practice;
