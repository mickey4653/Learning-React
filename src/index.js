// import React, { StrictMode } from "react";
import React, { useState, useEffect, useReducer } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// function Hello({library,message,number}){
//   // console.log(props);
//   // console.log(Object.keys(props));
// return (

// <div>

//   <h1>Welcome to {library}!</h1>
// <p>Are you ready to learn? </p>
// <p>{message}</p>
// {/* <p>{props.number}: Props Total</p> */}
//  <p>{number}: Props Total</p>

// </div>

// );

// }
// function Lake({name}){
//   return(
// <h1>{name}</h1>

//   );
// }
// const lakeList=["Echo Lake", "Shirley Lake", "Michigan Lake"];
// const lakeList=[
//   {id:1, name:"Michael", trailhead:"Alicia Jeikens"},
//   {id:1, name:"John", trailhead:"Tasha Cobbs"},
//   {id:1, name:"Billy", trailhead:"Alice Adams"}
// ];
// const list = [1,2,3,4,5];

// function App({items}){
//   return (
//     // <ul>
//     // {lakes.map(lake =>
//     // <li>{lake}</li>
//     // )}
//     // </ul>
// //     <div>
// //       {lakes.map(lake =>
// //         <div>
// // <h2>{lake.name}</h2>
// // <p>Accessed By: {lake.trailhead}</p>
// //         </div>
// //         )}
// //     </div>
// <ul>
// {items.map(item => <li key={item.toString}>{item}</li>)}
//      </ul>
//   );
// }

// function Lake({name}){
//   return (
// <div>
// <h1>Visit {name}! </h1>

// </div>
//   );
// }
// function Lake(){
//   return (

// <h1>Visit Lake! </h1>

//   );
// }
// function SkiResort({name}){
//   return (
//     <div>
//     <h1>Visit {name} Mountain Resort! </h1>

//     </div>
//       );

// }
// function SkiResort(){
//   return (
//     <div>
//     <h1>SkiResort</h1>

//     </div>
//       );

// }

// function App(props){
// if (props.season === "summer" ){
//   return <Lake name ="Jenny Lake"/>
// }else if(props.season ==="winter"){
//   return <SkiResort name="MKB" />
// }

// }
// function App(){
// return(
// /* <React.Fragment></React.Fragment> */
// //or
// <>
//   <Lake />
//   <SkiResort />
// </>
// );

// function App(){

//   const [status, setStatus] = useState("Open");
//   const [manager, setManager]= useState("James");
//   const [year, setYear]= useState(2023);
//   return(
//     <>
// <div>
//   <h1>{year}</h1>
//   <button onClick={()=>setYear(year + 1)}>Add Year</button>
// </div>
//     <div>
//       <h1>Manager: {manager}</h1>
//       <button onClick={()=>setManager("Michael")}>New Manager</button>
//     </div>
//     <div>
//     <h1>Status: {status}</h1>
//     <button onClick={()=> setStatus("Open")}>Open</button>
//     <button onClick={()=> setStatus("Back in 5 mins")}>Break</button>
//     <button onClick={()=> setStatus("Closed")}>Closed</button>
//   </div>
//   </>
//   );
// }

//   }

// function CheckBox(){

// const [checked,setCheck]=useState(false);
// useEffect(()=>{
//   alert(`checked:${checked.toString()}`)
// })
//   return(
//     <>
//   <input type="checkbox" value={checked} onChange={()=>setCheck(checked=>!checked)} />
//    {checked ? "checked" : "not checked"}

//   </>
//   );
// }

// function App(){
// const [val, setVal] = useState("");
// const [val2, setVal2] = useState("");

// useEffect(()=>{
//   console.log(`field 1: ${val}`)
// },[val])
// useEffect(()=>{
//   console.log(`field 2: ${val2}`)
// },[val, val2])
// return (
// <>
// <label>
//   Favourite Input:
//   <input value={val} onChange={e => setVal(e.target.value)}/>
// </label>
// <br />
// <label>
//   Second Favourite Input:
//   <input value={val2} onChange={e => setVal2(e.target.value)}/>
// </label>

// </>
// );

// }

// function GitHubUser({login}){
// const [data,setData]=useState(null);
// useEffect(()=>{
//   fetch(`https://api.github.com/users/${login}`)
//   .then(res=>res.json())
//   .then(setData)
//   .catch(console.error)
// },[])
//  if(data){
// return(

// <div>
//   <h1>{data.login}</h1>
//   <img src={data.avatar_url} width={100}/>
// </div>

// );
//  }
//  return null;
// }
// function App(){

//   return <GitHubUser login="defunkt"/>
//   }

function CheckBox() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  );
}
root.render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  //  <Hello library="Javascript" message="It's wonderful world" number={3}/>
  /* <App lakes={lakeList} /> */
  /* <App items={list} /> */

  /* <App season="summer"/> */
  /*<App season="summer"/>*/

  /* <App /> */
  /*<CheckBox />*/
  /* <App /> */

  /* <App /> */

  <CheckBox />
);

// const [first, sec, third] =["bread", "pineapple", "banana"];
// const [, , third] =["bread", "pineapple", "banana"];
// const snacks =["bread", "pineapple", "banana"];

// console.log(first);
// console.log(sec);
// console.log(third);

// console.log(third);

// console.log(snacks[0]);
// console.log(snacks[1]);
// console.log(snacks[2]);
