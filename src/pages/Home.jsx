import { useEffect, useState } from "react";
import ChatList from "../components/ChatList.jsx";
import ChatWindow from "../components/ChatWindow.jsx";
import MessageInput from "../components/MessageInput.jsx";
import { getChats, getMessages, sendMessage } from "../services/api.js";
import { socket } from "../services/socket.js";

export default function Home() {
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getChats().then(res => setChats(res.data));

    socket.on("newMessage", (msg) => {
      if (msg.wa_id === selected) {
        setMessages(prev => [...prev, msg]);
      }
    });

    return () => socket.off("newMessage");
  }, [selected]);

  useEffect(() => {
    if (selected) {
      getMessages(selected).then(res => setMessages(res.data));
    }
  }, [selected]);

  const handleSend = async (text) => {
    await sendMessage(selected, text);
    setMessages(prev => [
      ...prev,
      { wa_id: selected, text, status: "sent", fromMe: true } // ✅ fromMe flag added
    ]);
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <ChatList chats={chats} onSelect={setSelected} selectedId={selected} />
      <div className="flex flex-col flex-1">
        {selected ? (
          <>
            <ChatWindow messages={messages} />
            <MessageInput onSend={handleSend} />
          </>
        ) : (
          <div className="flex items-center justify-center flex-1 text-gray-500">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
}
