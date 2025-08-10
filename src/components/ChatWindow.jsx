import MessageBubble from "./MessageBubble.jsx";

export default function ChatWindow({ messages }) {
  return (
    <div className="flex-1 bg-gray-100 flex flex-col overflow-y-auto p-2">
      {messages.map((msg, i) => (
        <MessageBubble
          key={i}
          message={msg}
          isOwn={msg.fromMe === true} // ✅ fixed for accurate ownership
        />
      ))}
    </div>
  );
}
