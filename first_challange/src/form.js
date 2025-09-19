import { useState } from "react";

export default function Form() {
  
  const [formInputs, setFormInputs] = useState({ name: "", email: "" , GeneralInfo: "" , isStudent: true });

  const formStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  };
  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };
  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    width: "150px",
    backgroundColor: "#4CAF50",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <>
      <form
        style={formStyle}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label style={labelStyle}>Name:</label>
        <input
          style={inputStyle}
          value={formInputs.name}
          onChange={(event) =>
            //?   const newNameInput = { ...formInputs };
            //*   newNameInput.name = event.target.value;
            //!   setFormInputs({ newNameInput });
            setFormInputs({ ...formInputs, name: event.target.value })
          }
        />

        <label style={labelStyle}>Email:</label>
        <input
          style={inputStyle}
          value={formInputs.email}
          onChange={(event) =>
            //?   const newEmailFormInput = { ...formInputs };
            //!!   newEmailFormInput.email = event.target.value;
            //?   setFormInputs({ newEmailFormInput });
            setFormInputs({ ...formInputs, email: event.target.value })
          }
        />
        <label>General Info</label>
        <textarea
        value={formInputs.GeneralInfo}
         onChange={(event)=>{
          setFormInputs({...formInputs,GeneralInfo:event.target.value})
        }} />

        <label>are you student</label>
        <input checked={formInputs.isStudent} onChange={(event)=>{
          //isStudent:event.target.value BOOLEAN VALUE 
          setFormInputs({...formInputs , isStudent:event.target.value})
        }} type="checkbox"></input>
          
       


        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    
    
      <div
        style={{
          maxWidth: "400px",
          margin: "30px auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          backgroundColor: "#f0f8ff",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#333", marginBottom: "10px" }}>
          {`Name of user: ${formInputs.name} !`}
        </h2>
        <h2 style={{ color: "#333", marginBottom: "10px" }}>
          {`Email of user: ${formInputs.email} `}
        </h2>
        <h4 style={{ color: "#555", marginBottom: "5px" }}>
          {`Chars in name: ${formInputs.name.length} !`}
        </h4>
        <h4 style={{ color: "#555", marginBottom: "15px" }}>
          {`Chars in email: ${formInputs.email.length} !`}
        </h4>
        <button
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#ff4d4f",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#ff7875")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#ff4d4f")}
          onClick={() => {
            setFormInputs({ name: "", email: "" });
          }}
        >
          Reset
        </button>
        
      </div>
    </>
  );
}
