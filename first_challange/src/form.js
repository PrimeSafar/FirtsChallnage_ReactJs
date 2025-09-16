import { useState } from "react";
export default function Form() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput,setEmailInput]= useState("")

  return (
    <form onSubmit={(event)=>{
        event.preventDefault()
        console.log(emailInput , nameInput)
    }}>
      <label>name:</label>
      <input
        value={nameInput}
        onChange={(event) => {
          setNameInput(event.target.value);
        }}
      />
      <hr></hr>

      <label>email:</label>
      <input  value={emailInput}
        onChange={(event) => {
          setEmailInput(event.target.value);
        }} />

      <hr></hr>
      <button type="submit">Submit</button>
    </form>
  );
}
