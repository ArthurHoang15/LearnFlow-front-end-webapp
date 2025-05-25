import React, { useState, useRef, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SendIcon from '@mui/icons-material/Send';
import './ChatPage.css';

interface User {
  id: string;
  name: string;
  avatar?: string;
}

interface Message {
  id: string;
  content: string;
  user: User;
  timestamp: Date;
  type: 'text' | 'file';
  fileName?: string;
  fileSize?: number;
  fileType?: string;
  isDelivered?: boolean;
  isRead?: boolean;
}

interface ChatSession {
  id: string;
  name: string;
  lastMessage?: string;
  timestamp?: Date;
  isOnline?: boolean;
}

const ChatPage: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>('user1');
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentUser: User = {
    id: 'current-user',
    name: 'You'
  };

  // Mock data - TODO: Replace with API calls
  const chatSessions: ChatSession[] = [
    { id: 'user1', name: 'user 1', lastMessage: 'huh huh', timestamp: new Date(), isOnline: true },
    { id: 'user2', name: 'user', lastMessage: 'Last message preview...', timestamp: new Date(), isOnline: false },
    { id: 'user3', name: 'user', lastMessage: 'Another message...', timestamp: new Date(), isOnline: true },
    { id: 'user4', name: 'user', lastMessage: 'Some text here...', timestamp: new Date(), isOnline: false },
    { id: 'user5', name: 'user', lastMessage: 'Final message...', timestamp: new Date(), isOnline: true },
  ];

  // Initialize messages for selected chat
  useEffect(() => {
    if (selectedChat) {
      // Mock initial messages - TODO: Replace with API calls
      const initialMessages: Message[] = [
        {
          id: '1',
          content: 'Sub',
          user: { id: 'user1', name: 'user 1' },
          timestamp: new Date(Date.now() - 300000),
          type: 'text',
          isDelivered: true,
          isRead: true
        },
        {
          id: '2',
          content: 'nah',
          user: currentUser,
          timestamp: new Date(Date.now() - 240000),
          type: 'text',
          isDelivered: true,
          isRead: true
        },
        {
          id: '3',
          content: 'huh huh',
          user: currentUser,
          timestamp: new Date(Date.now() - 180000),
          type: 'text',
          isDelivered: true,
          isRead: true
        },
        {
          id: '4',
          content: 'huh huh',
          user: { id: 'user1', name: 'user 1' },
          timestamp: new Date(Date.now() - 120000),
          type: 'text',
          isDelivered: true,
          isRead: true
        }
      ];
      setMessages(initialMessages);
    }
  }, [selectedChat]);

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateMessageId = () => {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  };

  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      // Simulate auto reply after 2-3 seconds
      setTimeout(() => {
        const autoReplies = [
          "I see 👀",
          "Interesting!",
          "Got it!",
          "Thanks for sharing",
          "Okay",
          "Sure thing",
          "Understood",
          "Nice!"
        ];
        const randomReply = autoReplies[Math.floor(Math.random() * autoReplies.length)];
        
        const newMessage: Message = {
          id: generateMessageId(),
          content: randomReply,
          user: { id: selectedChat!, name: chatSessions.find(c => c.id === selectedChat)?.name || 'user' },
          timestamp: new Date(),
          type: 'text',
          isDelivered: true,
          isRead: false
        };
        
        setMessages(prev => [...prev, newMessage]);
      }, Math.random() * 2000 + 1000); // Random delay 1-3 seconds
    }, Math.random() * 1500 + 500); // Typing indicator 0.5-2 seconds
  };

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const newMessage: Message = {
        id: generateMessageId(),
        content: messageInput,
        user: currentUser,
        timestamp: new Date(),
        type: 'text',
        isDelivered: false,
        isRead: false
      };

      // Add message immediately (optimistic update)
      setMessages(prev => [...prev, newMessage]);
      setMessageInput('');

      // Simulate message delivery
      setTimeout(() => {
        setMessages(prev => 
          prev.map(msg => 
            msg.id === newMessage.id 
              ? { ...msg, isDelivered: true }
              : msg
          )
        );
      }, 1000);

      // Simulate read receipt
      setTimeout(() => {
        setMessages(prev => 
          prev.map(msg => 
            msg.id === newMessage.id 
              ? { ...msg, isRead: true }
              : msg
          )
        );
      }, 3000);

      // Simulate other user typing and replying
      simulateTyping();

      // TODO: Add API call to send message
      console.log('Sending message:', messageInput);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newMessage: Message = {
        id: generateMessageId(),
        content: `Sent a file: ${file.name}`,
        user: currentUser,
        timestamp: new Date(),
        type: 'file',
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
        isDelivered: false,
        isRead: false
      };

      // Add file message immediately
      setMessages(prev => [...prev, newMessage]);

      // Simulate file upload progress and delivery
      setTimeout(() => {
        setMessages(prev => 
          prev.map(msg => 
            msg.id === newMessage.id 
              ? { ...msg, isDelivered: true }
              : msg
          )
        );
      }, 2000);

      // Simulate read receipt
      setTimeout(() => {
        setMessages(prev => 
          prev.map(msg => 
            msg.id === newMessage.id 
              ? { ...msg, isRead: true }
              : msg
          )
        );
      }, 4000);

      // Simulate other user response to file
      setTimeout(() => {
        const fileResponses = [
          "Thanks for the file!",
          "Got it, downloading now",
          "Nice file!",
          "Received 👍"
        ];
        const randomResponse = fileResponses[Math.floor(Math.random() * fileResponses.length)];
        
        const responseMessage: Message = {
          id: generateMessageId(),
          content: randomResponse,
          user: { id: selectedChat!, name: chatSessions.find(c => c.id === selectedChat)?.name || 'user' },
          timestamp: new Date(),
          type: 'text',
          isDelivered: true,
          isRead: false
        };
        
        setMessages(prev => [...prev, responseMessage]);
      }, 5000);

      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

      // TODO: Add API call to upload file
      console.log('Uploading file:', file);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('vi-VN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const filteredChats = chatSessions.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="chat-page">
      {/* Sidebar */}
      <div className="chat-sidebar">
        <div className="chat-header">
          <h2>CHAT</h2>
        </div>
        
        {/* Search */}
        <div className="search-container">
          <div className="search-input-wrapper">
            <SearchIcon className="search-icon" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button className="search-clear" onClick={() => setSearchQuery('')}>
                <ClearIcon />
              </button>
            )}
          </div>
        </div>

        {/* Chat List */}
        <div className="chat-list">
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              className={`chat-item ${selectedChat === chat.id ? 'active' : ''}`}
              onClick={() => setSelectedChat(chat.id)}
            >
              <div className="chat-avatar">
                <div className="avatar-circle">
                  <PersonIcon className="avatar-icon" />
                  {chat.isOnline && <div className="online-indicator"></div>}
                </div>
              </div>
              <div className="chat-info">
                <div className="chat-name">{chat.name}</div>
                <div className="chat-last-message">{chat.lastMessage}</div>
              </div>
              <div className="chat-time">
                {formatTime(chat.timestamp || new Date())}
              </div>
            </div>
          ))}
        </div>

        {/* Feedback Section */}
        <div className="feedback-section">
          <div className="feedback-item">
            <FeedbackIcon className="feedback-icon" />
            <span className="feedback-text">Feedback to Admin</span>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="chat-main">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="chat-main-header">
              <div className="chat-user-info">
                <div className="chat-avatar">
                  <div className="avatar-circle">
                    <PersonIcon className="avatar-icon" />
                    {chatSessions.find(c => c.id === selectedChat)?.isOnline && 
                      <div className="online-indicator"></div>
                    }
                  </div>
                </div>
                <div className="user-details">
                  <span className="chat-user-name">
                    {chatSessions.find(c => c.id === selectedChat)?.name}
                  </span>
                  <span className="user-status">
                    {chatSessions.find(c => c.id === selectedChat)?.isOnline ? 'Online' : 'Offline'}
                  </span>
                </div>
              </div>
              <div className="chat-actions">
                <button className="action-button">
                  <InfoIcon />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="messages-container">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`message ${message.user.id === currentUser.id ? 'own-message' : 'other-message'}`}
                >
                  {message.user.id !== currentUser.id && (
                    <div className="message-avatar">
                      <div className="avatar-circle small">
                        <PersonIcon className="avatar-icon" />
                      </div>
                    </div>
                  )}
                  <div className="message-content">
                    <div className="message-bubble">
                      {message.type === 'file' ? (
                        <div className="file-message">
                          <AttachFileIcon className="file-icon" />
                          <div className="file-info">
                            <div className="file-name">{message.fileName}</div>
                            <div className="file-size">{formatFileSize(message.fileSize || 0)}</div>
                          </div>
                        </div>
                      ) : (
                        message.content
                      )}
                    </div>
                    <div className="message-meta">
                      <span className="message-time">{formatTime(message.timestamp)}</span>
                      {message.user.id === currentUser.id && (
                        <div className="message-status">
                          {message.isRead ? '✓✓' : message.isDelivered ? '✓' : '⏳'}
                        </div>
                      )}
                    </div>
                  </div>
                  {message.user.id === currentUser.id && (
                    <div className="message-actions">
                    </div>
                  )}
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="message other-message">
                  <div className="message-avatar">
                    <div className="avatar-circle small">
                      <PersonIcon className="avatar-icon" />
                    </div>
                  </div>
                  <div className="message-content">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="message-input-container">
              <div className="message-input-wrapper">
                <input
                  type="text"
                  placeholder="Aa"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="message-input"
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                  multiple={false}
                />
                <button 
                  className="attachment-button"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <AttachFileIcon />
                </button>
                {messageInput.trim() && (
                  <button className="send-button" onClick={handleSendMessage}>
                    <SendIcon />
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="no-chat-selected">
            <p>Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
