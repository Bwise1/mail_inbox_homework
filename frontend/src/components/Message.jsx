import React from "react";
import { Link } from "react-router-dom";

export default function Message(props) {
  const { id, subject, content, isRead } = props;

  const truncatedContent =
    content.length > 10 ? content.substring(0, 10) + "..." : content;

  return (
    <Link to={`/inbox/${id}`}>
      <div>
        <div className="font-bold tex-md">{subject}</div>
        <div>{isRead ? content : truncatedContent}</div>
      </div>
    </Link>
  );
}
