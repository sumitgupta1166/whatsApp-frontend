import { useState } from "react";

export default function MessageInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      onSend(text.trim());
      setText("");
    }
  };

  return (
    <div className="p-2 bg-white flex">
      <input
        className="flex-1 border border-gray-300 rounded px-3 py-2"
        placeholder="Type a message"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button
        className="ml-2 px-4 py-2 bg-green-500 text-white rounded"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
}
