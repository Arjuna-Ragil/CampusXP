"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatbotFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi there! I am the CampusXP AI Assistant. How can I help you map your skills and achievements today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: inputValue.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      if (data.reply) {
        setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
      } else {
        throw new Error(data.error || 'Unknown error');
      }
    } catch (error) {
      setMessages([...newMessages, { role: 'assistant', content: "Sorry, I am having trouble connecting right now. Please make sure GEMINI_API_KEY is set." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-margin right-margin z-100 flex flex-col items-end">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] max-h-[70vh] bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="bg-primary p-md flex items-center justify-between text-on-primary">
            <div className="flex items-center gap-xs">
              <Bot className="w-6 h-6" />
              <h3 className="font-bold text-label-lg">CampusXP Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-md flex flex-col gap-sm bg-surface-container-low/30">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-sm ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  msg.role === 'user' ? 'bg-secondary text-on-secondary' : 'bg-tertiary text-on-tertiary'
                }`}>
                  {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`p-sm rounded-xl max-w-[80%] text-body-md shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-secondary-container text-on-secondary-container rounded-tr-none' 
                    : 'bg-surface-container-lowest text-on-surface rounded-tl-none border border-outline-variant'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-sm flex-row">
                <div className="w-8 h-8 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-sm rounded-xl bg-surface-container-lowest text-on-surface rounded-tl-none border border-outline-variant shadow-sm flex items-center">
                  <Loader2 className="w-5 h-5 animate-spin text-tertiary" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-sm bg-surface-container-lowest border-t border-outline-variant flex gap-sm">
            <input 
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything..."
              className="flex-1 bg-surface-container px-md py-sm rounded-full border-none focus:ring-2 focus:ring-primary text-body-md"
              disabled={isLoading}
            />
            <button 
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
            >
              <Send className="w-4 h-4 ml-1" />
            </button>
          </form>
        </div>
      )}

      {/* FAB Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-primary text-on-primary rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform group relative"
        >
          <MessageSquare className="w-7 h-7" />
          <span className="absolute right-full mr-md py-xs px-sm bg-inverse-surface text-inverse-on-surface text-label-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Ask AI Assistant
          </span>
        </button>
      )}
    </div>
  );
}
