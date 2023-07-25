import React,{useState} from "react";
import styled from "styled-components";

const Star = styled.svg`
  width:100px;
  height:50px;
  margin-top:20%;
  color: ${pre=>pre.bg};
`


const StarIcon = (props) => {

    return (
  
      // <Star 
      // stroke="currentColor" 
      // fill="currentColor" 
      // stroke-width="0" 
      // viewBox="0 0 1024 1024" 
      // height="1em" 
      // width="1em" 
      // xmlns="http://www.w3.org/2000/svg"
      //  onClick={props.click} 
      //  id={props.id} 
      //  bg={props.strcolor}><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
      //  </Star>
  
  
      <Star
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={props.click}
        id={props.id}
        bg={props.strcolor}
      >
        <polygon points="12 2 15.09 8.36 22 9.27 17 14.14 18.18 21.01 12 17.77 5.82 21.01 7 14.14 2 9.27 8.91 8.36 12 2" />
      </Star>
    );
  };

  const num =[1,2,3,4,5];


  


  function SampleStar(props){

    const [clr, setColor] = useState(null);
  // const [id, setID] = useState();

    const handleClick = (e) => {
        const obj = {
        '1': '#CF0812',
        '2': '#CF0812',
        '3': '#FAAD14',
        '4': '#85BA6A',
        '5': '#1F5404'
        };

        const val = e.target;
        console.log(val)
        const selectedColor = obj[val.id];


        // if(val.id==='3'){
        //   console.log('Working')
        //   setColor('#CF0812')
        // }


        // val.style.color = selectedColor;
        console.log(val.id)
        setColor(selectedColor);
    };

    const Nstar = () => {
      const valu = num.map(ele => {
        return <StarIcon id={ele} click={handleClick} strcolor={clr} key={ele}/>;
      });
    
      return valu;
    };








    return(
        <div>
            <Nstar/>
        </div>
    )
  }

  export {SampleStar}