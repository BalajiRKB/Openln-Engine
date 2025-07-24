import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import quizQuestions from "../data/quizQuestions";

const OnboardingQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [completed, setCompleted] = useState<boolean>(false);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleAnswerSelect = (option: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: option,
    });

    if (currentQuestion < quizQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 800);
    } else {
      setTimeout(() => {
        setCompleted(true);
      }, 800);
    }
  };

  const handleSkip = () => {
    localStorage.setItem("quizCompleted", "skipped");
    navigate("/dashboard");
  };

  const handleFinish = () => {
    localStorage.setItem("quizAnswers", JSON.stringify(selectedAnswers));
    localStorage.setItem("quizCompleted", "true");
    navigate("/dashboard");
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen w-full bg-black flex justify-center items-center">
        <div className="bg-gradient-to-br from-[#1a0026] via-[#2d0036] to-[#3a005c] w-full max-w-4xl p-12 rounded-3xl">
          <h2 className="text-white text-4xl font-bold text-center mb-8">
            Quick Knowledge Check
          </h2>

          <p className="text-gray-300 text-center text-lg mb-12">
            Let's assess your current knowledge level with a quick 5-question quiz.
            This helps us personalize your learning path.
          </p>

          <div className="flex flex-col gap-6 items-center">
            <button
              onClick={startQuiz}
              className="bg-purple-600 hover:bg-purple-700 transition-colors w-64 py-4 rounded-2xl text-white text-lg font-medium"
            >
              Start Quiz
            </button>

            <button
              onClick={handleSkip}
              className="text-purple-400 hover:text-purple-300 text-lg"
            >
              Skip Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (completed) {
    return (
      <div className="min-h-screen w-full bg-black flex justify-center items-center">
        <div className="bg-gradient-to-br from-[#1a0026] via-[#2d0036] to-[#3a005c] w-full max-w-4xl p-12 rounded-3xl">
          <h2 className="text-white text-4xl font-bold text-center mb-8">
            Quiz Completed!
          </h2>

          <p className="text-gray-300 text-center text-lg mb-12">
            Thanks for completing the quiz. We'll use your answers to customize your learning experience.
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleFinish}
              className="bg-purple-600 hover:bg-purple-700 transition-colors w-64 py-4 rounded-2xl text-white text-lg font-medium"
            >
              Continue to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen w-full bg-black flex justify-center items-center">
      <div className="bg-gradient-to-br from-[#1a0026] via-[#2d0036] to-[#3a005c] w-full max-w-4xl p-12 rounded-3xl">
        <div className="flex justify-between mb-8">
          <h2 className="text-white text-3xl font-bold">
            {question.question}
          </h2>
          <div className="text-white text-3xl font-bold">
            {currentQuestion + 1}/{quizQuestions.length}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {question.options.map((option: string, index: number) => (
            <button
              key={index}
              className={`py-4 px-6 text-xl text-white text-center rounded-2xl transition-colors duration-300 ${
                selectedAnswers[currentQuestion] === option
                  ? "bg-purple-700"
                  : "bg-[#4a295a] bg-opacity-60 hover:bg-purple-700"
              }`}
              onClick={() => handleAnswerSelect(option)}
              disabled={!!selectedAnswers[currentQuestion]}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnboardingQuiz;
