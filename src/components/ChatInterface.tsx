
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Bot, User, Loader2 } from 'lucide-react';

type Message = {
  id: string;
  type: 'user' | 'bot';
  text: string;
};

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: '¡Hola! I am your Hispanic Business Assistant. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: input
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses = [
        "Great question! I recommend focusing on your online presence first. Let's create a simple action plan for social media marketing.",
        "Based on your business stage, I'd suggest looking into local networking events. Would you like me to find some in your area?",
        "That's a common challenge for new entrepreneurs. I have some templates and resources that might help you with this specific issue.",
        "Have you considered applying for Hispanic business grants? There are several programs available that could provide funding for your venture."
      ];
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: botResponses[Math.floor(Math.random() * botResponses.length)]
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <section className="py-20 bg-white" id="chat">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <h2 className="text-burgundy mb-4">Ask Your Business Assistant</h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Our AI assistant is here to answer your questions, provide guidance, 
            and help you overcome challenges in your business journey.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto reveal">
          <div className="bg-offwhite rounded-lg shadow-lg overflow-hidden border">
            {/* Chat header */}
            <div className="bg-burgundy text-white p-4">
              <div className="flex items-center">
                <Bot size={24} className="mr-2" />
                <h3 className="text-xl font-medium">Business Chatbot</h3>
              </div>
            </div>
            
            {/* Chat messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] rounded-lg p-3 ${
                      msg.type === 'user' 
                        ? 'bg-terracotta text-white rounded-tr-none' 
                        : 'bg-gray-200 text-charcoal rounded-tl-none'
                    }`}
                  >
                    <div className="flex items-center mb-1">
                      {msg.type === 'bot' ? (
                        <>
                          <Bot size={16} className="mr-1" />
                          <span className="font-medium text-xs">AI Assistant</span>
                        </>
                      ) : (
                        <>
                          <User size={16} className="mr-1" />
                          <span className="font-medium text-xs">You</span>
                        </>
                      )}
                    </div>
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
              
              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 text-charcoal rounded-lg rounded-tl-none p-3 max-w-[75%]">
                    <div className="flex items-center">
                      <Loader2 size={16} className="mr-2 animate-spin" />
                      <span className="text-sm">Typing a response...</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Scroll anchor */}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Chat input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask a question about your business..."
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isLoading}
                  className="bg-burgundy hover:bg-terracotta"
                >
                  <Send size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatInterface;
