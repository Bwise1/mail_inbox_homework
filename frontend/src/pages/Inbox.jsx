import React, { useState, useEffect } from "react";
import Message from "../components/Message";

export default function Inbox() {
  const userData = JSON.parse(localStorage.getItem("data"));
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages(userData.id);
  }, [userData.id]);

  const fetchMessages = (userId) => {
    // Make API call to fetch messages for the given user ID
    fetch(`${process.env.REACT_APP_API_BASE_URL}/messages/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch messages:", error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="msgWrapper overflow-hidden ">
      <div className="text-xl font-bold pb-4">Messages</div>
      <div className="">
        <div className=" msgInbox p-5 flex flex-col gap-4 overflow-auto ">
          {messages && messages.length === 0 ? (
            <p>You have 0 messages in your inbox</p>
          ) : (
            messages.map((message, index) => (
              <>
                <Message
                  key={message.id}
                  id={message.id}
                  subject={message.subject}
                  content={message.content}
                  isRead={message.isRead}
                />
                {index !== messages.length - 1 && <hr />}
              </>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
