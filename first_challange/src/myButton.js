import "./myButton.css";
import { useState } from "react";
export default function MyButton1() {
  const [name , setName] = useState("safar", {});
//   const value = state[0]; //Safar
//   const setValue = state[1]; // function

  function buttonclicked() {
    if(name==="safar"){
   setName("vanilla")
    }
    else{
        setName("safar")
    }
  }

  return (
    <div className={"DivBut"}>
      <button onClick={buttonclicked}>click me</button>
      <h1>{name}</h1>
    </div>
  );
}
