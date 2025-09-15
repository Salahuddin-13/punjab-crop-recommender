import React, { useState, useRef } from 'react';
import { getPunjabMarketPrices } from '../services/punjabAgroService';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      message: 'Sat Sri Akal! 🙏 I am your Punjab Agriculture AI Expert.\n\nI can help you with:\n• Crop advice\n• Disease diagnosis\n• Market prices\n• Weather tips\n• Government schemes\n\nHow can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollOnSend = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addMessage = (sender, message) => {
    setMessages(prev => [
      ...prev,
      { id: Date.now(), sender, message, timestamp: new Date() }
    ]);
  };

  const getChatGPTResponse = async (message) => {
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, context: { domain: 'Punjab Agriculture' } })
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      return data.response;
    } catch {
      return getFallbackResponse(message);
    }
  };

  const getFallbackResponse = (message) => {
    const m = message.toLowerCase();
    if (m.includes('wheat')) {
      return '🌾 Punjab Wheat: PBW 725, HD 3086. Sowing: Oct–Nov. MSP: ₹2,275/qtl.';
    }
    if (m.includes('rice')) {
      return '🌾 Punjab Rice: PR 126, Pusa 44. Transplant: Jun–Jul. MSP: ₹2,183/qtl.';
    }
    if (m.includes('disease')) {
      return '🔬 Rice blast: Tricyclazole. Wheat rust: Propiconazole. PAU Helpline: 0161-2401960.';
    }
    if (m.includes('price')) {
      const p = getPunjabMarketPrices();
      return `💰 Wheat ₹${Math.round(p.wheat.market)}/qtl, Rice ₹${Math.round(p.rice.market)}/qtl.`;
    }
    return '🙏 Ask about crops, diseases, prices, weather, or schemes.';
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    addMessage('user', inputMessage);
    scrollOnSend();
    setIsTyping(true);

    const reply = await getChatGPTResponse(inputMessage);
    addMessage('bot', reply);
    setIsTyping(false);
    scrollOnSend();
    setInputMessage('');
  };

  const quickReplies = [
    'Best wheat variety',
    'Rice transplant time',
    'Cotton disease treatment',
    'Current market prices',
    'Weather tips',
    'Government schemes'
  ];

  const handleQuickReply = async (text) => {
    addMessage('user', text);
    scrollOnSend();
    setIsTyping(true);

    const reply = await getChatGPTResponse(text);
    addMessage('bot', reply);
    setIsTyping(false);
    scrollOnSend();
  };

  return (
    <div className="chatbot">
      <div className="header">
        <span className="avatar">🤖</span>
        <span>Punjab AI Agriculture Expert</span>
        <span className="status">🟢 Online</span>
      </div>
      <div className="messages">
        {messages.map(m => (
          <div key={m.id} className={`msg ${m.sender}`}>
            <div className="text">{m.message.split('\n').map((l,i)=>(<React.Fragment key={i}>{l}<br/></React.Fragment>))}</div>
            <div className="time">{m.timestamp.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</div>
          </div>
        ))}
        {isTyping && <div className="msg bot typing">AI is typing...</div>}
        <div ref={messagesEndRef} />
      </div>
      <div className="quick">
        {quickReplies.map((q,i)=>(
          <button key={i} onClick={()=>handleQuickReply(q)}>{q}</button>
        ))}
      </div>
      <form onSubmit={handleSend} className="input">
        <input
          value={inputMessage}
          onChange={e=>setInputMessage(e.target.value)}
          placeholder="Ask about Punjab farming..."
        />
        <button type="submit" disabled={!inputMessage.trim()||isTyping}>🚀</button>
      </form>
    </div>
  );
};

export default ChatBot;
