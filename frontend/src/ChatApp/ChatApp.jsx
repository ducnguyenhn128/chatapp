import React, { useState } from 'react';
import './ChatApp.css';

import io from 'socket.io-client'
const socket = io.connect("http://localhost:8000")

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') {
      return; // Don't send empty messages
    }

    const newMessages = [...messages, { text: newMessage, user: 'You' }];
    setMessages(newMessages);
    socket.emit("send_message" , {messages: 'hello'})
    setNewMessage('');
  };

  return (
    <div className="chat-app">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user === 'You' ? 'sent' : 'received'}`}>
            <span className="message-text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={handleNewMessageChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatApp;
