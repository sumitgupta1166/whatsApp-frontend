export default function ChatList({ chats, onSelect, selectedId }) {
  return (
    <div className="w-full sm:w-1/3 bg-gray-900 text-white overflow-y-auto">
      {chats.map(chat => (
        <div
          key={chat.wa_id}
          onClick={() => onSelect(chat.wa_id)}
          className={`p-4 cursor-pointer border-b border-gray-800 ${
            selectedId === chat.wa_id ? "bg-gray-800" : ""
          }`}
        >
          <div className="font-semibold">{chat.name || chat.wa_id}</div>
          <div className="text-sm text-gray-400 truncate">{chat.lastMessage}</div>
        </div>
      ))}
    </div>
  );
}
