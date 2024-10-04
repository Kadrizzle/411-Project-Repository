import React from "react";
import "../App.css";

const ChatBubble = ({ text, color }) => {
  return (
    <div className="chat-bubble" style={{ backgroundColor: color }}>
      {text}
    </div>
  );
};

export default ChatBubble;
