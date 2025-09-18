import { useState } from "react";
export default function Form() {
//   const [nameInput, setNameInput] = useState("");
//   const [emailInput,setEmailInput]= useState("")
const [formInputs , setFormInputs] =useState({name:"",email:""})

  return (
    <form onSubmit={(event)=>{
        event.preventDefault()
    }}>
      <label>name:</label>
      <input
        value={formInputs.name}
        onChange={(event) => {
          setFormInputs({name:event.target.value});
        }}
      />
      <hr></hr>

      <label>email:</label>
      <input  value={formInputs.email}
        onChange={(event) => {
          setFormInputs({email:event.target.value});
        }} />

      <hr></hr>
      <button type="submit">Submit</button>
    </form>
  );
}
