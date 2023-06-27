import React, { useState, useEffect } from "react";
import Message from "../components/Message";

export default function Inbox() {
  const userData = JSON.parse(localStorage.getItem("data"));
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages(userData.id);
  }, [userData.id]);

  const fetchMessages = (userId) => {
    // Make API call to fetch messages for the given user ID
    fetch(`${process.env.REACT_APP_API_BASE_URL}/messages/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((error) => {
        console.error("Failed to fetch messages:", error);
      });
  };
  return (
    <div className="bg-slate-50  ">
      <div>Messages</div>
      {messages.map((message) => (
        <Message
          key={message.id}
          subject={message.subject}
          content={message.content}
          isRead={message.isRead}
        />
      ))}
    </div>
  );
}
