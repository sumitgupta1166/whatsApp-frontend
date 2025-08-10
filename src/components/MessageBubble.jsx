export default function MessageBubble({ message, isOwn }) {
  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xs p-3 m-1 rounded-lg ${
          isOwn ? "bg-green-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        <div>{message.text}</div>
        <div className="text-xs text-gray-700 mt-1">{message.status}</div>
      </div>
    </div>
  );
}
