// import React, { useEffect, useState } from "react";
// import { Smile, Meh, Frown, Users, Loader2 } from "lucide-react";
// import { motion } from "framer-motion";

// const moodDataList = [
//   { mood: "happy", crowdLevel: "low", travelerCount: 12 },
//   { mood: "neutral", crowdLevel: "medium", travelerCount: 45 },
//   { mood: "sad", crowdLevel: "high", travelerCount: 98 },
// ];

// const moodColors = {
//   happy: "#22c55e",
//   neutral: "#facc15",
//   sad: "#ef4444",
// };

// const crowdColors = {
//   low: "#22c55e",
//   medium: "#facc15",
//   high: "#ef4444",
// };

// export default function LiveMoodIndicator() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = () => {
//       const randomIndex = Math.floor(Math.random() * moodDataList.length);
//       setData(moodDataList[randomIndex]);
//     };
//     fetchData();
//     const interval = setInterval(fetchData, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   if (!data) {
//     return (
//       <div className="flex justify-center items-center text-white mt-3">
//         <Loader2 className="animate-spin mr-2" />
//         <span>Loading live travel mood...</span>
//       </div>
//     );
//   }

//   const MoodIcon =
//     data.mood === "happy" ? Smile : data.mood === "neutral" ? Meh : Frown;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full shadow-md mt-3 backdrop-blur-md"
//     >
//       <MoodIcon size={20} color={moodColors[data.mood]} className="animate-bounce" />
//       <span className="text-white font-medium capitalize">{data.mood} mood</span>
//       <Users size={18} color={crowdColors[data.crowdLevel]} className="animate-pulse" />
//       <span className="text-white/90 capitalize">
//         {data.crowdLevel} crowd
//       </span>
//       <span className="text-xs text-white/70 ml-2">
//         ({data.travelerCount} travelers)
//       </span>
//     </motion.div>
//   );
// }


import React, { useEffect, useState } from "react";
import { Smile, Meh, Frown, Users, SunMedium, RefreshCw, Clock } from "lucide-react";
import { motion } from "framer-motion";

const moods = [
  { mood: "happy", crowd: "low", color: "#22c55e" }, // green
  { mood: "neutral", crowd: "medium", color: "#facc15" }, // yellow
  { mood: "sad", crowd: "high", color: "#ef4444" }, // red
];

export default function LiveMoodIndicator() {
  const [data, setData] = useState(moods[0]);
  const [currentTime, setCurrentTime] = useState(new Date());

  // 🕒 Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 🔁 Refresh mood every 1 hour
  useEffect(() => {
    const interval = setInterval(() => {
      const random = moods[Math.floor(Math.random() * moods.length)];
      setData(random);
    }, 3600000);
    return () => clearInterval(interval);
  }, []);

  const MoodIcon =
    data.mood === "happy" ? Smile : data.mood === "neutral" ? Meh : Frown;

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-1/3 left-4 z-[9999] bg-white/90 backdrop-blur-lg border border-gray-200 shadow-2xl rounded-2xl p-4 w-[260px] hover:scale-[1.03] transition-transform duration-300"
    >
      <div className="flex flex-col items-center text-center">
        {/* Heading */}
        <div className="flex items-center gap-2 mb-2">
          <SunMedium size={20} className="text-[#0b3c2b]" />
          <h2 className="text-lg font-bold text-[#0b3c2b]">
            Tirupati Vibe Meter
          </h2>
        </div>

        {/* Icon + Mood */}
        <div className="flex flex-col items-center mb-2">
          <div
            className="p-3 rounded-full shadow-lg animate-pulse"
            style={{
              backgroundColor: data.color + "33",
              border: `2px solid ${data.color}`,
            }}
          >
            <MoodIcon size={36} color={data.color} className="animate-bounce" />
          </div>
          <p
            className="mt-2 text-base font-semibold capitalize"
            style={{ color: data.color }}
          >
            {data.mood === "happy"
              ? "Joyful Travelers"
              : data.mood === "neutral"
              ? "Calm & Balanced"
              : "Crowded & Tiring"}
          </p>
        </div>

        {/* Crowd Info */}
        <div className="flex items-center justify-center mt-1 gap-2 text-gray-700 text-sm">
          <Users size={18} color={data.color} />
          <span className="capitalize font-medium">
            {data.crowd} crowd level
          </span>
        </div>

        {/* Animated bar indicator */}
        <div className="w-full mt-3 h-2 rounded-full bg-gray-200 overflow-hidden">
          <motion.div
            key={data.crowd}
            initial={{ width: "0%" }}
            animate={{
              width:
                data.crowd === "low"
                  ? "25%"
                  : data.crowd === "medium"
                  ? "60%"
                  : "90%",
              backgroundColor: data.color,
            }}
            transition={{ duration: 0.8 }}
            className="h-full rounded-full"
          />
        </div>

        {/* Real-time Clock */}
        <p className="text-xs text-gray-500 italic flex items-center gap-1 mt-2">
          <Clock size={12} className="text-gray-500" />
          {currentTime.toLocaleTimeString()}
        </p>

        {/* Auto-refresh Info */}
        <p className="text-xs text-gray-500 mt-2 italic flex items-center gap-1">
          Auto-refreshes every 1 hr <RefreshCw size={12} className="text-gray-500" />
        </p>
      </div>
    </motion.div>
  );
}
