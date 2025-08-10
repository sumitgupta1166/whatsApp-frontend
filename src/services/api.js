import axios from "axios";
const API_BASE = import.meta.env.VITE_API_BASE;
export const getChats = () => axios.get(`${API_BASE}/chats`);
export const getMessages = (waId) => axios.get(`${API_BASE}/messages/${waId}`);
export const sendMessage = (waId, text) =>
  axios.post(`${API_BASE}/messages`, { to: waId, text });
