import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Inbox from "./pages/Inbox";
import MessageView from "./pages/MessageView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/inbox/:id" element={<MessageView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
