import { useState } from "react";
export default function Input() {
  const [inputValue, setInputValue] = useState("");
  function handleInput(event) {
    setInputValue(event.target.value)
  }
  return (
    <div>
      <label>your name</label>
      <input value={inputValue} onChange={handleInput} />
    </div>
  );
}
