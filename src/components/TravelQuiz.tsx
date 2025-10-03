import React, { useState } from "react";
import { CheckCircle, Star } from "lucide-react";

interface Question {
  question: string;
  options: { text: string; value: string }[];
}

// 5 engaging questions
const quizData: Question[] = [
  {
    question: "What type of traveler are you?",
    options: [
      { text: "Spiritual & Devotional", value: "spiritual" },
      { text: "Adventure & Exploration", value: "adventure" },
      { text: "Family Leisure", value: "family" },
    ],
  },
  {
    question: "Preferred trip duration?",
    options: [
      { text: "1 Day", value: "1day" },
      { text: "2-3 Days", value: "2-3days" },
      { text: "More than 3 Days", value: "3+days" },
    ],
  },
  {
    question: "Your budget range?",
    options: [
      { text: "Economical", value: "budget" },
      { text: "Comfortable", value: "comfortable" },
      { text: "Luxury", value: "luxury" },
    ],
  },
  {
    question: "Preferred accommodation type?",
    options: [
      { text: "Budget Hotels", value: "budgetHotel" },
      { text: "3-Star Hotels", value: "3star" },
      { text: "Luxury Resorts", value: "luxury" },
    ],
  },
  {
    question: "Do you want guided tours?",
    options: [
      { text: "Yes, guided tours", value: "guided" },
      { text: "No, self-exploration", value: "self" },
    ],
  },
];

// Simple recommendation mapping
const recommendations: Record<string, string> = {
  spiritual: "Tirupati Spiritual Package",
  adventure: "Tirupati Adventure & Exploration Package",
  family: "Tirupati Family Leisure Package",
  budget: "Tirupati Budget Package",
  comfortable: "Tirupati Comfortable Package",
  luxury: "Tirupati Luxury Package",
};

const TravelQuiz: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (value: string) => {
    setAnswers([...answers, value]);
    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const recommendedPackage = finished
    ? recommendations[answers[0] as keyof typeof recommendations] || "Tirupati Special Package"
    : "";

  const progress = ((current + (finished ? 1 : 0)) / quizData.length) * 100;

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-8">
          Which Tirupati Package Suits You Best?
        </h2>

        {/* Progress Bar */}
        <div className="w-full bg-orange-100 h-3 rounded-full mb-6 overflow-hidden">
          <div
            className="bg-orange-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {!finished ? (
          <div className="bg-orange-50 p-8 rounded-xl shadow-lg animate-fadeIn">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              {quizData[current].question}
            </h3>
            <div className="flex flex-col gap-4">
              {quizData[current].options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(opt.value)}
                  className="flex items-center justify-between p-4 rounded-lg border border-orange-200 hover:bg-orange-100 transition shadow-sm"
                >
                  <span>{opt.text}</span>
                  <CheckCircle className="text-orange-500" size={20} />
                </button>
              ))}
            </div>
            <p className="mt-4 text-gray-500">
              Question {current + 1} of {quizData.length}
            </p>
          </div>
        ) : (
          <div className="bg-green-50 p-8 rounded-xl shadow-lg flex flex-col items-center gap-4 animate-fadeIn">
            <Star className="text-green-500" size={48} />
            <h3 className="text-2xl md:text-3xl font-semibold">
              Your Recommended Package:
            </h3>
            <p className="text-xl md:text-2xl text-gray-700">{recommendedPackage}</p>
            <button
              onClick={() => {
                setCurrent(0);
                setAnswers([]);
                setFinished(false);
              }}
              className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              Check your Interest Again
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TravelQuiz;
