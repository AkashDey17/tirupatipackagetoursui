import { useEffect, useState } from "react";
import { Send, Loader2 } from "lucide-react"; // Only Lucide icons allowed

interface Message {
  sender: "user" | "bot";
  text: string;
  loading?: boolean;
}

const PilgrimChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [greeted, setGreeted] = useState(false);

  // Local bot response logic
  const getBotReply = (text: string) => {
    const msg = text.toLowerCase();

    if (msg.includes("package"))
      return "For complete package details, please contact us at 📞 9964060505.";
    if (msg.includes("darshan"))
      return "Darshan timings are from 6 AM to 9 PM daily.";
    if (msg.includes("hotel"))
      return "Nearby hotels include Tirupati Residency, Green Park, and Grand Stay.";
    if (msg.includes("transport"))
      return "Shuttle buses operate every 30 minutes from Tirupati station.";
    if (msg.includes("prasadam"))
      return "You can pre-book Tirupati Laddu from our Packages section.";
    if (msg.includes("emergency"))
      return "Emergency support number: 108 (Tirupati Medical Services).";
    if (msg.includes("hi") || msg.includes("hello"))
      return "Hello! How can I assist you today with your Tirupati trip?";

    return "I can help with Darshan timings, Hotels, Transport, Prasadam info, Emergency help, and Travel packages.";
  };

  // Show greeting when chat is opened for the first time
  useEffect(() => {
    if (open && !greeted) {
      setMessages([{ sender: "bot", text: "", loading: true }]);

      setTimeout(() => {
        setMessages([
          {
            sender: "bot",
            text:
              "Hi! I am Raghav, your travel assistant for your upcoming Tirupati trip. How can I help you?",
          },
        ]);
        setGreeted(true);
      }, 1200);
    }
  }, [open, greeted]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    const userInputCopy = input;
    setInput("");

    setMessages((prev) => [...prev, { sender: "bot", text: "", loading: true }]);

    setTimeout(() => {
      const botMsg: Message = {
        sender: "bot",
        text: getBotReply(userInputCopy),
        loading: false,
      };
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = botMsg;
        return updated;
      });
    }, 1200);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-28 right-6 z-[10000]">
        <button
          onClick={() => setOpen(!open)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl text-xl font-bold"
        >
          💬
        </button>
      </div>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 sm:w-96 h-[500px] bg-white shadow-2xl rounded-xl flex flex-col overflow-hidden z-[10000]">
          {/* Header */}
          <div className="bg-yellow-500 text-white p-4 font-bold flex justify-between">
            Pilgrim Assistant (Raghav)
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-[70%] ${
                    msg.sender === "user"
                      ? "bg-yellow-100 text-gray-900"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.loading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" /> Typing...
                    </div>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-2 border-t flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 px-3 py-2 border rounded-l-lg focus:outline-none"
              placeholder="Ask me about Tirupati..."
            />
            <button
              onClick={sendMessage}
              className="bg-yellow-500 px-4 rounded-r-lg hover:bg-yellow-600 flex items-center justify-center"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PilgrimChatbot;
