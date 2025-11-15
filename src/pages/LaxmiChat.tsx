import React, { useState, useEffect, useRef } from "react";
import { X, Send } from "lucide-react";
import femaleIcon from "@/assets/female.png";

type Message = {
  sender: "bot" | "user";
  text: string;
};

export default function LaxmiChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [userName, setUserName] = useState("");
  const [stage, setStage] = useState<"greet" | "askName" | "chat">("greet");
  const [typing, setTyping] = useState(false);

  const messagesRef = useRef<HTMLDivElement | null>(null);

  const packagesList = [
    "Tirupati 1 Day 1 Night Dharma Darshan Package",
    "Tirupati & Srikalahasti 2 Days 2 Nights Package"
  ];

  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);

  // INTRO GREETING
  useEffect(() => {
    if (open && messages.length === 0) {
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages([{ sender: "bot", text: "Hi! 👋 I'm Laxmi." }]);

        setTimeout(() => {
          setTyping(true);
          setTimeout(() => {
            setTyping(false);
            setMessages((m) => [
              ...m,
              { sender: "bot", text: "May I know your good name? 😊" }
            ]);
            setStage("askName");
          }, 800);
        }, 500);
      }, 1000);
    }
  }, [open]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages((m) => [...m, { sender: "user", text: userText }]);
    setInput("");

    // NAME STAGE
    if (stage === "askName") {
      const name = userText.split(" ")[0];
      setUserName(name);
      setStage("chat");

      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages((m) => [
          ...m,
          {
            sender: "bot",
            text: `Nice to meet you, ${name}! 🙌 How can I help you today?`
          }
        ]);
      }, 800);

      return;
    }

    // NORMAL CHAT
    setTyping(true);
    setTimeout(() => {
      setTyping(false);

      setMessages((m) => [
        ...m,
        {
          sender: "bot",
          text: getBotReply(userText)
        }
      ]);
    }, 700);
  };

  // *************************************************************
  // ********************* BOT REPLY ENGINE **********************
  // *************************************************************

  const getBotReply = (text: string) => {
    const q = text.toLowerCase();

    // CONTACT DETAILS
    if (
      q.includes("contact") ||
      q.includes("call") ||
      q.includes("number") ||
      q.includes("phone") ||
      q.includes("mobile") ||
      q.includes("email") ||
      q.includes("mail") ||
      q.includes("whatsapp")
    ) {
      return (
        "You can reach us at:\n" +
        "📞 +91 8197882511\n" +
        "📞 +91 9731312275\n" +
        "📩 enquiry@tirupatipackagetours.com\n\n" +
        "Available Packages:\n- " +
        packagesList.join("\n- ")
      );
    }

    // VIP
    if (q.includes("vip") || q.includes("indians") || q.includes("indian") || q.includes("normal")) {
      return "For Indians 3 months before journey date depending upon availability VIP Darshan might be available.VIP Darshan is not available under tourist quota. Please book directly on TTD website. Free Darshan is available";
    }
    

    // COST / PRICE
    if (
      q.includes("price") ||
      q.includes("cost") ||
      q.includes("rate") ||
      q.includes("how much") ||
      q.includes("charges")
    ) {
      return (
        "Package Pricing:\n" +
        "• 1 Day Package → Starts from ₹2300\n" +
        "• 2 Day Package → Starts from ₹2600"
      );
    }

    // SAFETY FOR LADIES
    if (
      q.includes("lady") ||
      q.includes("girls") ||
      q.includes("women") ||
      q.includes("female") ||
      q.includes("safe") ||
      q.includes("secure")
    ) {
      return "Yes, it is completely safe for single lady travellers. 🙏 Our policies ensure secure travel.";
    }

    // CAB / CAR
    if (q.includes("car") || q.includes("cab") || q.includes("taxi")) {
      return "This is a bus package. However, we can arrange a cab on request.";
    }

    // TIMINGS / DARSHAN TIME
    if (
      q.includes("timing") ||
      q.includes("darshan") ||
      q.includes("when") ||
      q.includes("time") ||
      q.includes("journey")
    ) {
      return (
        "Darshan & journey timings depend on TTD crowd conditions.\n" +
        "Generally darshan takes 1–5 hours depending on temple rush."
      );
    }

    // ACCOMMODATION
    if (
      q.includes("room") ||
      q.includes("stay") ||
      q.includes("accommodation") ||
      q.includes("hotel")
    ) {
      return "Accommodation is provided in 3-star deluxe rooms (subject to availability).";
    }

    // HOT WATER
    if (q.includes("hot water") || q.includes("geyser")) {
      return "Yes, 24/7 hot water facility is available.";
    }

    // FOOD
    if (
      q.includes("food") ||
      q.includes("veg") ||
      q.includes("breakfast") ||
      q.includes("lunch")
    ) {
      return "We serve pure vegetarian South Indian food (1 breakfast + 1 lunch).";
    }

    // UPHILL ROOMS
    if (
      q.includes("uphill") ||
      q.includes("tirumala room") ||
      q.includes("hill")
    ) {
      return "Rooms are not permitted at Tirumala hill as per TTD guidelines.";
    }

    // MUNDAN
    if (q.includes("mundan")) {
      return (
        "After Mundan, we do not provide rooms at Tirumala.\n" +
        "Public restrooms are available and our guide will assist you."
      );
    }

    // FRESHEN UP ROOM
    if (q.includes("freshen") || q.includes("single room")) {
      return "Yes, a room for freshen-up is provided before darshan (subject to availability).";
    }

    // SENIOR CITIZEN
    if (
      q.includes("senior") ||
      q.includes("old") ||
      q.includes("citizen")
    ) {
      return "Senior citizen priority is not available under this package.";
    }

    // CHILDREN
    if (
      q.includes("child") ||
      q.includes("children") ||
      q.includes("kids")
    ) {
      return (
        "Children under 1 year → Free darshan with parents.\n" +
        "Children under 5 years → Entry free."
      );
    }

    // DIRECT DARSHAN PASS
    if (
      q.includes("direct darshan") ||
      q.includes("special darshan") ||
      q.includes("direct pass")
    ) {
      return "Direct darshan passes are not available via agents. Only via the official TTD portal.";
    }

    // SEATER / SLEEPER
    if (
      q.includes("seater") ||
      q.includes("sleeper") ||
      q.includes("bus type")
    ) {
      return "Yes, we have both seater and sleeper bus options.";
    }

    // CUSTOM PACKAGE
    if (q.includes("custom")) {
      return (
        "Yes, we can customize your package.\n" +
        "📞 +91 8197882511\n📩 enquiry@tirupatipackagetours.com"
      );
    }

    // GREETINGS
    if (q.includes("hi") || q.includes("hello")) {
      return `Hello ${userName}! 😊 How can I help you today?`;
    }

    if (q.includes("thank")) {
      return `You're welcome ${userName}! 😄`;
    }

    // DEFAULT REPLY
    return "I'm here to help you with timings, packages or bookings. Please ask anything!";
  };

  return (
    <div className="fixed bottom-24 right-6 z-[9999]">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="w-14 h-14 rounded-full bg-pink-600 flex items-center justify-center shadow-xl hover:scale-110 transition"
        >
          <img
            src={femaleIcon}
            alt="Laxmi"
            className="w-12 h-12 rounded-full object-cover"
          />
        </button>
      )}

      {open && (
        <div className="w-80 h-[480px] bg-white shadow-2xl rounded-xl flex flex-col border border-gray-200">
          <div className="px-4 py-3 bg-pink-600 text-white rounded-t-xl flex justify-between items-center">
            <div className="flex items-center gap-2 font-semibold">
              <img src={femaleIcon} alt="Laxmi" className="w-6 h-6 rounded-full" />
              Laxmi – Assistant
            </div>
            <X className="cursor-pointer" onClick={() => setOpen(false)} />
          </div>

          <div
            ref={messagesRef}
            className="flex-1 overflow-y-auto p-3 space-y-2 text-sm"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-xl max-w-[85%] ${
                  msg.sender === "user"
                    ? "bg-pink-100 ml-auto"
                    : "bg-gray-100"
                }`}
              >
                {msg.text.split("\n").map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            ))}

            {typing && (
              <div className="flex items-start">
                <div className="bg-gray-200 px-3 py-2 rounded-lg text-xs animate-pulse">
                  Laxmi is typing…
                </div>
              </div>
            )}
          </div>

          <div className="p-2 border-t flex gap-2">
            <input
              className="flex-1 border rounded-lg px-3 py-2 text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
            />

            <button
              className="bg-pink-600 text-white p-2 rounded-lg"
              onClick={handleSend}
            >
              <Send size={18} />
            </button>
          </div>

          <div className="text-center text-xs text-gray-400 py-1">
            Powered by Sanchar6t
          </div>
        </div>
      )}
    </div>
  );
}

