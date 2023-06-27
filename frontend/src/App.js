import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css";
import Login from "./pages/Login";
import Inbox from "./pages/Inbox";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inbox" element={<Inbox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
