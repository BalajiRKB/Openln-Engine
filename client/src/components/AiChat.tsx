import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini AI
// You should store this key in an environment variable in a real application
const API_KEY = import.meta.env.AI_API_KEY; 
const genAI = new GoogleGenerativeAI(API_KEY);

interface AiChatProps {
  onClose: () => void;
  onSelectGoal?: (goal: string) => void;
  taskType?: string | null;
  taskTitle?: string | null;
}

const AiChat: React.FC<AiChatProps> = ({ onClose, onSelectGoal, taskType = null, taskTitle = null }) => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{ sender: string; text: string; suggestions?: boolean }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<any>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    const initializeGemini = async () => {
      try {
        modelRef.current = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        chatRef.current = await modelRef.current.startChat({
          history: [],
          generationConfig: {
            maxOutputTokens: 500,
            temperature: 0.7,
            topP: 0.8,
            topK: 40,
          },
        });
      } catch (error) {
        console.error("Failed to initialize Gemini chat:", error);
      }
    };
    initializeGemini();
  }, []);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    const userMessage = { sender: "user", text: message };
    setChatHistory((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setMessage("");
    try {
      const response = await chatRef.current.sendMessage(message);
      const aiMessage = { sender: "ai", text: response.text };
      setChatHistory((prev) => [...prev, aiMessage]);
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error("Error sending message to Gemini:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectGoal = (goal: string) => {
    const goalMessage = { sender: "user", text: `I want to focus on: ${goal}` };
    setChatHistory((prev) => [...prev, goalMessage]);
    setIsLoading(true);
    setTimeout(() => {
      const aiResponse = {
        sender: "ai",
        text: `Great choice! Focusing on "${goal}" is a smart move. Here are some resources to get you started: [link1], [link2], [link3].`,
        suggestions: true,
      };
      setChatHistory((prev) => [...prev, aiResponse]);
      setIsLoading(false);
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  };

  return (
    <div className="bg-black/30 rounded-2xl p-6 text-white h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="text-purple-600 text-2xl font-bold">Cosa AI Chat</div>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {chatHistory.map((msg, index) => (
          <div key={index}>
            {msg.sender === "ai" ? (
              <div className="flex flex-col">
                <div className="self-start bg-[#4a295a] bg-opacity-60 text-white px-4 py-2 rounded-xl max-w-[80%] text-sm">
                  {msg.text}
                </div>
                {msg.suggestions && (
                  <div className="mt-4 grid grid-cols-1 gap-2">
                    {["Getting 12+ lpa job", "Starting an Startup", "Full stack Dev", "Crack GSOC"].map((goal) => (
                      <button
                        key={goal}
                        className="py-2 rounded-xl text-white text-sm font-medium bg-[#4a295a] bg-opacity-60 hover:bg-purple-700 transition-colors"
                        onClick={() => handleSelectGoal(goal)}
                      >
                        {goal}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex justify-end">
                <div className="self-end bg-purple-600 text-white px-4 py-2 rounded-xl max-w-[80%] text-sm">
                  {msg.text}
                </div>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />

        {isLoading && (
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: "150ms" }}></div>
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: "300ms" }}></div>
          </div>
        )}
      </div>

      <form onSubmit={handleSendMessage} className="mt-auto">
        <div className="relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-[#4a295a] bg-opacity-60 rounded-xl py-2 px-4 text-white placeholder-gray-300 focus:outline-none"
            placeholder={taskType ? "Ask for help with this task..." : "Ask Cosa AI about your goals..."}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!message.trim() || isLoading}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white px-3 py-1 rounded-lg transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default AiChat;
