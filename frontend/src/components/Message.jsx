import React from "react";

export default function Message(props) {
  const { subject, content, isRead } = props;

  const truncatedContent =
    content.length > 10 ? content.substring(0, 10) + "..." : content;

  return (
    <div>
      <div>{subject}</div>
      <div>{isRead ? content : truncatedContent}</div>
    </div>
  );
}
