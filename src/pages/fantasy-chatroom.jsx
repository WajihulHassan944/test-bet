import React, { useEffect, useState, useRef } from 'react';
import { FiSend, FiMessageCircle } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import Pusher from 'pusher-js';
import moment from 'moment';

const ChatRoom = () => {
  const affiliate = useSelector((state) => state.affiliateAuth.userAffiliate);
   const { isAuthenticated, loading, user } = useSelector((state) => state.auth);
  
  const activeUser = user?._id ? user : affiliate;

  const [input, setInput] = useState('');
  const [groupedMessages, setGroupedMessages] = useState({});
  const chatMessagesRef = useRef(null);

  const scrollToBottom = () => {
    const container = chatMessagesRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  const fetchMessages = async () => {
    if (!activeUser?._id) return;

    try {
      const res = await fetch('https://fantasymmadness-game-server-three.vercel.app/api/messages/get');
      const data = await res.json();
      const formatted = {};

      for (const date in data) {
        formatted[date] = data[date].map((msg) => ({
          ...msg,
          isMe: msg.senderId === activeUser._id,
        }));
      }

      setGroupedMessages(formatted);
      scrollToBottom();
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || !activeUser?._id) return;

    const date = moment().format('YYYY-MM-DD');
    const time = moment().format('hh:mm A');

    const payload = {
      senderId: activeUser._id,
      senderName: activeUser.firstName,
      text,
      profileUrl: activeUser.profileUrl,
      time,
      date,
    };

    setInput('');
    scrollToBottom();

    try {
      const response = await fetch('https://fantasymmadness-game-server-three.vercel.app/api/messages/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      const msg = result.message;

      setGroupedMessages((prev) => {
        const updated = { ...prev };
        const existing = updated[date] || [];

        if (existing.some((m) => m._id === msg._id)) return prev;

        updated[date] = [...existing, {
          ...msg,
          isMe: msg.senderId === activeUser._id,
        }];
        return updated;
      });

    } catch (err) {
      console.error('Send failed:', err);
    }
  };

  useEffect(() => {
    if (activeUser?._id) {
      fetchMessages();
    }

    const pusher = new Pusher('3dda01a544e0847a046c', {
      cluster: 'us2',
    });

    const channel = pusher.subscribe('Fantasy-mmadness');
    channel.bind('new-message', (data) => {
      const msg = data.message;
      const date = msg.date;

      setGroupedMessages((prev) => {
        const updated = { ...prev };
        const existing = updated[date] || [];

        if (existing.some((m) => m._id === msg._id)) return prev;

        updated[date] = [...existing, {
          ...msg,
          isMe: msg.senderId === activeUser._id,
        }];
        return updated;
      });

      scrollToBottom();
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
      pusher.disconnect(); 
    };
  }, [activeUser?._id]);

  return (
    <div className="fantasy-chatroom">
      {/* Top Bar */}
      <div className="chat-topbar">
        <div className="chat-user-info">
          <img src={activeUser?.profileUrl} alt="User" className="chat-user-img" />
          <div className="chat-user-name">
            <span>{activeUser?.firstName}</span>
            <small>{user?._id ? 'User' : 'Affiliate'}</small>
          </div>
        </div>
        <FiMessageCircle className="chat-icon" />
      </div>

      {/* Message Area */}
      <div className="chat-messages" ref={chatMessagesRef}>
        {Object.entries(groupedMessages).map(([date, msgs]) => (
          <div key={date} className="oneDateMessages">
            <div className="chat-date">{moment(date).format('MMMM D, YYYY')}</div>
            {msgs.map((msg) => (
              <div key={msg._id} className={`chat-message ${msg.isMe ? 'right' : 'left'}`}>
                {!msg.isMe && (
                  <img src={msg.profileUrl} alt="User" className="message-user-img" />
                )}
                <div className={`message-content ${msg.isMe ? 'my-message' : ''}`}>
                  <div className="text">{msg.text}</div>
                  <div className="time">{msg.time}</div>
                </div>
                {msg.isMe && (
                  <img src={msg.profileUrl} alt="Me" className="message-user-img" />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              sendMessage();
            }
          }}
        />
        <FiSend className="send-icon" onClick={sendMessage} />
      </div>
    </div>
  );
};

export default ChatRoom;
