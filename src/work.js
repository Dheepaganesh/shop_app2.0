import { styled } from "styled-components"

// function Home(){
//     return <div><h1>Hello Home</h1></div>
// }

const Bars = styled.a`
text-decoration:none;
color:white;
margin: 25px;
`
export const  Sidebar = styled.aside`
grid-area: side;
background-color: rgba(34, 209, 200,0.1);
width: 200px;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
`

export const Sidediv = styled.div`
margin: 22px;
`

export const Main = styled.main`
grid-area: main;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-template-areas: 'heading heading'
                        'image para';
  background-color: rgba(232, 238, 244,0.16);
`
export default Bars