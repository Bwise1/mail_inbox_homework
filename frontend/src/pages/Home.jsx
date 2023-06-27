import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const userData = JSON.parse(localStorage.getItem("data"));

  const navigate = useNavigate();

  if (!userData) {
    navigate("/login");
    return null;
  }

  return (
    <div className="wrapper text-xl flex flex-col items-center justify-center gap-10">
      <div>Hello {userData.username}</div>
      <div>
        you have {userData.totalUnreadMessages} unread messages out of{" "}
        {userData.totalMessages} total
      </div>

      <Link
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        to="/inbox"
      >
        View messages
      </Link>
    </div>
  );
}
