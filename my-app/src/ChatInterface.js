import React, { useState, useRef, useEffect } from 'react';
import { Mic, Send, Smile, X } from 'lucide-react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Predefined bot responses for stress-related keywords
  const botResponses = {
    default: "I'm here to help you manage your stress. Would you like to try some breathing exercises?",
    stressed: "I understand you're feeling stressed. Let's take a deep breath together. Breathe in for 4 counts, hold for 4, and release for 4.",
    anxiety: "Anxiety can be overwhelming. Remember that you're safe and this feeling will pass. Would you like to try a grounding exercise?",
    overwhelmed: "It's okay to feel overwhelmed. Let's break things down into smaller, manageable steps. What's the main thing on your mind?",
    work: "Work stress is common. Remember to take regular breaks and practice self-care. Have you taken any breaks today?",
    sleep: "Good sleep is crucial for stress management. Try to maintain a consistent sleep schedule and avoid screens before bedtime."
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    for (const [key, response] of Object.entries(botResponses)) {
      if (input.includes(key)) {
        return response;
      }
    }
    return botResponses.default;
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputText.trim()) {
      // Add user message
      setMessages(prev => [...prev, { text: inputText, sender: 'user' }]);
      setInputText('');
      
      // Simulate bot typing
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, { 
          text: getBotResponse(inputText),
          sender: 'bot'
        }]);
      }, 1500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <Smile className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h2 className="text-white font-bold">Calm Companion</h2>
                  <p className="text-white text-sm opacity-75">Always here to listen</p>
                </div>
              </div>
              <X className="w-6 h-6 text-white cursor-pointer" />
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t p-4">
            <div className="flex items-center space-x-2">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Share what's on your mind..."
                className="flex-1 resize-none border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows="1"
              />
              <button
                onClick={() => handleSend()}
                className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
              >
                <Send className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                <Mic className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;