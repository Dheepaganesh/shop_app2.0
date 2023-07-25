
// const SetBG=(element,color)=>{
  //      element.style.backgroundColor=color;}

  // const [color,setcolor] = useState('');

  // const Colorchange = (e)=>{
  //   setcolor(e.target.value);
  // };

  // const Btnclick = ()=>{
  //   SetBG(document.body,color)
  // };



//   function Newbutton(props) {
//     return (
//       <button style={{ backgroundColor: props.color, border: "none" }}>
//         {props.name}
//       </button>
//     );
//   }
  
//   const StyledNav = styled.nav`
//   color: red !important;
//   background: ${cl=>cl.bg};
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
//   grid-area: nav;
//   `
  
  
//   const StyledFoot = styled.div`
//   color: black;
//   background-color: lightgreen;
//   grid-area: foot;
//   `
  
//   const Navbar = (props) => {
//     return (
//       <StyledNav id="head" bg={props.navcolor}>
//         <Bars href="./" className="bars">
//           Home
//         </Bars>
//         <Bars href="./" className="bars">
//           About
//         </Bars>
//         <Bars href="./" className="bars">
//           Help
//         </Bars>
//       </StyledNav>
//     );
//   };
  
//   const Side = ()=>(
//     <HomeComponent.Sidebar id="sidebar">
//       <HomeComponent.Sidediv>Subscription</HomeComponent.Sidediv>
//       <HomeComponent.Sidediv>Payment</HomeComponent.Sidediv>
//       <HomeComponent.Sidediv>Trending</HomeComponent.Sidediv>
//     </HomeComponent.Sidebar>
//   );
  
//   const content = (
//     <div>
//       <h1 id="heading">This is My First App</h1>
//       <div id="img-content">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/240px-React-icon.svg.png"
//           id="image"
//         ></img>
//         <p id="para">
//           On February 16, 2019, React 16.8 was released to the public, introducing
//           React Hooks.[14] Hooks are functions that let developers "hook into"
//           React state and lifecycle features from function components.[15]
//           Notably, Hooks do not work inside classes — they let developers use more
//           features of React without classes.[16] React provides several built-in
//           Hooks such as useState,[17][13]: 37  useContext,[10]: 11 [18][13]: 12 
//           useReducer,[10]: 92 [18][13]: 65–66  useMemo[10]: 154 [18][13]: 162  and
//           useEffect.[19][13]: 93–95  Others are documented in the Hooks API
//           Reference.[20][10]: 62  useState and useEffect, which are the most
//           commonly used, are for controlling state[10]: 37  and side
//           effects[10]: 61  respectively.
//           <br />
//           <br />
//           Rules of hooks There are two rules of Hooks[21] which describe the
//           characteristic code patterns that Hooks rely on: "Only Call Hooks at the
//           Top Level" — Don't call hooks from inside loops, conditions, or nested
//           statements so that the hooks are called in the same order each render.
//           "Only Call Hooks from React Functions" — Don't call hooks from plain
//           JavaScript functions so that stateful logic stays with the component.
//           Although these rules can't be enforced at runtime, code analysis tools
//           such as linters can be configured to detect many mistakes during
//           development. The rules apply to both usage of Hooks and the
//           implementation of custom Hooks,[22] which may call other Hooks. To
//           support React's concept of unidirectional data flow (which might be
//           contrasted with AngularJS's bidirectional flow), the Flux architecture
//           was developed as an alternative to the popular model–view–controller
//           architecture. Flux features actions which are sent through a central
//           dispatcher to a store, and changes to the store are propagated back to
//           the view.[31] When used with React, this propagation is accomplished
//           through component properties. Since its conception, Flux has been
//           superseded by libraries such as Redux and MobX.[32] Flux can be
//           considered a variant of the observer pattern.[33]
//           <br />
//           <br />A React component under the Flux architecture should not directly
//           modify any props passed to it, but should be passed callback functions
//           that create actions which are sent by the dispatcher to modify the
//           store. The action is an object whose responsibility is to describe what
//           has taken place: for example, an action describing one user "following"
//           another might contain a user id, a target user id, and the type
//           USER_FOLLOWED_ANOTHER_USER.[34] The stores, which can be thought of as
//           models, can alter themselves in response to actions received from the
//           dispatcher. This pattern is sometimes expressed as "properties flow
//           down, actions flow up". Many implementations of Flux have been created
//           since its inception, perhaps the most well-known being Redux, which
//           features a single store, often called a single source of truth.[35] In
//           February 2019, useReducer was introduced as a React hook in the 16.8
//           release. It provides an API that is consistent with Redux, enabling
//           developers to create Redux-like stores that are local to component
//           states.
//         </p>
//       </div>
//     </div>
//   );
  
//   const Main =()=> <HomeComponent.Main id="main">{content}</HomeComponent.Main>;
  
//   const product = (
//     <div id="product-page">
//       <div className="prod">
//         <img src="https://cdn-icons-png.flaticon.com/512/1311/1311237.png"></img>
//         <p>DataBase Asurance</p>
//       </div>
//       <div className="prod">
//         <img src="https://cdn-icons-png.flaticon.com/512/4947/4947544.png"></img>
//         <p>Best In Refund Process</p>
//       </div>
//       <div className="prod">
//         <img src="https://cdn-icons-png.flaticon.com/512/161/161154.png"></img>
//         <p>24/7 Customer Support</p>
//       </div>
//     </div>
//   );
  
//   const mail = (
//     <form>
//       <input type="email"></input>
//       <input type="submit" value="Get Info"></input>
//       <Newbutton name="Good" color="green" />
//       <Newbutton name="OK" color="yellow" />
//       <Newbutton name="Bad" color="red" />
//     </form>
//   );
//   const details = (
//     <div id="info">
//       <h1>To Buy Products</h1>
//       {mail}
//     </div>
//   );
  
//   const Footer =()=>{
//     return(<StyledFoot id="foot">
//       <p>CopyRights</p>
//       <p>2019</p>
//     </StyledFoot>)}
  
  
  
  
  
  
  
  
  
  
  
  
  


// {/* <Navbar navcolor={color}/>
//       <input type="text" id="color" value={color} onChange={Colorchange} />
//       <button onClick={Btnclick}>Set Background</button> */}
//     {/* <Nstar/> */}
