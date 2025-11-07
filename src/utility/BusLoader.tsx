import { useEffect, useState } from "react";
import { Bus } from "lucide-react"; // ✅ Using Lucide Bus Icon

const messages = [
  "Please wait...",
  "We are loading buses for you...",
  "Finding the best routes...",
  "Checking seat availability...",
  "Almost there..."
];

const BusLoader = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing animation logic
  useEffect(() => {
    const currentMessage = messages[messageIndex];

    if (charIndex < currentMessage.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + currentMessage[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setMessageIndex(prev => (prev + 1) % messages.length);
        setDisplayedText("");
        setCharIndex(0);
      }, 1200);
    }
  }, [charIndex, messageIndex]);

  return (
    <>
      {/* Inline animation styles */}
      <style>{`
        @keyframes busMove {
          0% { left: -80px; }
          100% { left: 100%; }
        }
        @keyframes roadSlide {
          0% { transform: translateX(0);}
          100% { transform: translateX(-50%);}
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>

      <div className="w-full h-screen flex flex-col justify-start items-center pt-40">


        {/* Bus Animation */}
        <div className="relative w-72 h-24 mb-10 overflow-hidden">

          {/* Bus Icon Moving */}
          <div
            className="absolute"
            style={{
              animation: "busMove 2.5s linear infinite",
            }}
          >
            <Bus className="w-16 h-16 text-blue-800 drop-shadow-lg" strokeWidth={2.5} />
          </div>

          {/* Road */}
          <div
            className="absolute top-1/2 w-[200%] h-1 bg-[repeating-linear-gradient(to_right,#000_0_20px,transparent_20px_40px)]"
            style={{
              animation: "roadSlide 0.8s linear infinite",
            }}
          ></div>
        </div>

        {/* Typing Text */}
        <h2 className="text-xl font-semibold text-gray-700 mt-4 tracking-wide">
          {displayedText}
          <span
            className="inline-block"
            style={{ animation: "blink 1s step-start infinite" }}
          >
            |
          </span>
        </h2>
      </div>
    </>
  );
};

export default BusLoader;
