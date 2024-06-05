"use client";

import { Bot } from "lucide-react";
import { useState } from "react";
import AIChatBox from "./AIChatBox";

export default function AIChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  const toggleChatBox = () => {
    setChatBoxOpen(prevState => !prevState);
  };

  return (
    <>
      <button onClick={toggleChatBox}>
        <Bot size={24} />
      </button>
      <AIChatBox open={chatBoxOpen} onClose={toggleChatBox} />
    </>
  );
}
