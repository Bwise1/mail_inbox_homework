import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const userData = JSON.parse(localStorage.getItem("data"));

  return (
    <div className="wrapper">
      <div>Hello {userData.username}</div>
      <div>
        you have {userData.totalUnreadMessages} unread messages out of{" "}
        {userData.totalMessages} total
      </div>

      <Link to="/inbox"> View messages</Link>
    </div>
  );
}
