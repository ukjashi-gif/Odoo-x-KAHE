import { useState } from "react";
import { askCopilot } from "../services/api.js";

export default function Copilot({ trip }) {
  const [messages, setMessages] = useState([{ role: "assistant", content: "Ask me for travel tips." }]);
  const [text, setText] = useState("");

  async function send() {
    if (!text.trim()) return;
    const userMessage = { role: "user", content: text };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setText("");

    try {
      const data = await askCopilot(userMessage.content, trip);
      setMessages([...nextMessages, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([...nextMessages, { role: "assistant", content: "Copilot is unavailable right now." }]);
    }
  }

  return (
    <aside className="copilot">
      <h2>Copilot</h2>
      <div className="chat-log">
        {messages.map((message, index) => <p className={message.role} key={index}>{message.content}</p>)}
      </div>
      <div className="chat-box">
        <input value={text} onChange={(event) => setText(event.target.value)} placeholder="Ask about your trip" />
        <button onClick={send}>Send</button>
      </div>
    </aside>
  );
}
