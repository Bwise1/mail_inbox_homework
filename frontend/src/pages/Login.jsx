import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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
      .then((response) => {
        if (response.status === 401) {
          // Handle 401 Unauthorized error
          throw new Error("Unauthorized");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.data);
        localStorage.setItem("data", JSON.stringify(data.data));
        navigate("/");
      })
      .catch((error) => {
        if (error.message === "Unauthorized") {
          setErrorMsg("Unauthorized access");
        }
        setError(true);
      });
  };
  return (
    <div className="wrapper flex flex-col items-center justify-center gap-10">
      <p className="text-xl">Confirm your authorization</p>
      <div className="">
        <form className="flex flex-col gap-6" onSubmit={handleLogin}>
          <input
            type="text"
            value={username}
            onChange={handleChange}
            placeholder="enter your name"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          {error && <p className="text-red-500">{errorMsg}</p>}
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
