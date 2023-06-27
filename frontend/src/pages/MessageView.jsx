import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MessageView() {
  const { id } = useParams();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetchMessage(id);
  }, [id]);

  const fetchMessage = (messageId) => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/messages/inbox/${messageId}`)
      .then((response) => response.json())
      .then((data) => {
        setMessage(data);
      })
      .catch((error) => {
        console.error("Failed to fetch message:", error);
      });
  };
  if (!message) {
    return <div>Loading...</div>;
  }

  return (
    <div className="msgWrapper">
      <div className="text-xl font-bold pb-4">{message.subject}</div>
      <div className="msgInbox p-5 flex flex-col gap-4 overflow-auto">
        {message.content}
      </div>
    </div>
  );
}
