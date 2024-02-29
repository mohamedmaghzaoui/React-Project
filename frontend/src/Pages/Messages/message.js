import React, { useState } from 'react';
import styles from './message.module.css'; // Utilisation de styles plutôt que de .css

function Message() {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className={styles.app}> {/* Utilisation de styles.app pour appliquer la classe CSS */}
      <header className={styles.header}> {/* Utilisation de styles.header */}
        <h1>Chat avec les clients</h1>
      </header>
      <div className={styles.messageContainer}> {/* Utilisation de styles.messageContainer */}
        <MessageList messages={messages} />
        <MessageForm onMessageSubmit={handleMessageSubmit} />
      </div>
    </div>
  );
}

function MessageList({ messages }) {
  return (
    <div className={styles.messageList}> {/* Utilisation de styles.messageList */}
      <h2>Messages:</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

function MessageForm({ onMessageSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onMessageSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.messageForm}> {/* Utilisation de styles.messageForm */}
      <input
        type="text"
        placeholder="Entrez votre message..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        
      />
      <span className={styles.or}>ou</span>
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default Message;
