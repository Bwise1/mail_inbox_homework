import React, { useState } from "react";

export default function Login() {
  //   console.log(process.env.REACT_APP_API_BASE_URL);
  const [username, setUserName] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    fetch(`${process.env.REACT_APP_API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        localStorage.setItem("data", JSON.stringify(data.data));
      })
      .catch((error) => {
        // console.error("Error");
        setError(true);
      });
  };
  return (
    <div className="wrapper">
      <form className="flex flex-col gap-5" onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="enter your name"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
