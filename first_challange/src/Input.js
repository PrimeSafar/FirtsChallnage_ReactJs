import { useState } from "react";

export default function GreetingInput() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }
  function ClearInput(){
    setName("")
  }

  return (
    <div>
      <label>Enter your name: </label>
      <input value={name} onChange={handleChange} />

      <h2>
        {name ? `Hello, ${name}!` : "Hello, stranger!"}
      </h2>
      <h3>
        {`you type ${name.length} characters !`}
      </h3>
      <button onClick={ClearInput}>click to clear </button>
    </div>
  );
}
