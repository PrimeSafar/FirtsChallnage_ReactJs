import { useState } from "react";
export default function Form() {
  //   const [nameInput, setNameInput] = useState("");
  //   const [emailInput,setEmailInput]= useState("")
  const [formInputs, setFormInputs] = useState({ name: "", email: "" });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label>name:</label>
      <input
        value={formInputs.name}
        onChange={(event) => {
          //?   const newNameInput = { ...formInputs };
          //*   newNameInput.name = event.target.value;
          //!   setFormInputs({ newNameInput });
          setFormInputs({ ...formInputs, name: event.target.value });
        }}
      />
      <hr></hr>

      <label>email:</label>
      <input
        value={formInputs.email}
        onChange={(event) => {
          //?   const newEmailFormInput = { ...formInputs };
          //!!   newEmailFormInput.email = event.target.value;
          //?   setFormInputs({ newEmailFormInput });
          setFormInputs({ ...formInputs, email: event.target.value });
        }}
      />

      <hr></hr>
      <button type="submit">Submit</button>
    </form>
  );
}

//the object in js in pass by references so is like a pointer
