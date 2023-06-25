import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div className="App">
      <div>Welcome to home page</div>
      <p>Enter your name</p>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
}

export default App;
