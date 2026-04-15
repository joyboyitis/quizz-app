import { useState } from "react";
import { ArrowRight, CheckCircle, XCircle } from "lucide-react";
import type { Question } from "../data/questions";

interface QuizScreenProps {
  questions: Question[];
  onFinish: (answers: (number | null)[]) => void;
}

const OPTION_LABELS = ["A", "B", "C", "D"] as const;

export function QuizScreen({ questions, onFinish }: QuizScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const isCorrect = confirmed && selectedOption === currentQuestion.correctAnswer;
  const isWrong = confirmed && selectedOption !== null && selectedOption !== currentQuestion.correctAnswer;

  function handleConfirm() {
    if (selectedOption === null) return;
    const newAnswers = [...answers];
    newAnswers[currentIndex] = selectedOption;
    setAnswers(newAnswers);
    setConfirmed(true);
  }

  function handleNext() {
    if (isLastQuestion) {
      onFinish(answers);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setConfirmed(false);
    }
  }

  const progressPercent = ((currentIndex) / questions.length) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: "#3B5BDB" }}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
              {currentQuestion.category}
            </span>
            <span className="text-sm text-gray-500 font-medium">
              {currentIndex + 1} / {questions.length}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${progressPercent}%`,
                backgroundColor: "#3B5BDB",
              }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="px-6 pb-4">
          <h2 className="text-base font-semibold text-gray-900 leading-relaxed">
            {currentQuestion.question}
          </h2>
        </div>

        {/* Options */}
        <div className="px-6 pb-4 space-y-2.5">
          {currentQuestion.options.map((option, idx) => {
            let optionStyle =
              "border-2 border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50";

            if (confirmed) {
              if (idx === currentQuestion.correctAnswer) {
                optionStyle = "border-2 border-green-500 bg-green-50 text-green-800";
              } else if (idx === selectedOption && idx !== currentQuestion.correctAnswer) {
                optionStyle = "border-2 border-red-400 bg-red-50 text-red-800";
              } else {
                optionStyle = "border-2 border-gray-100 bg-gray-50 text-gray-400";
              }
            } else if (selectedOption === idx) {
              optionStyle = "border-2 border-blue-500 bg-blue-50 text-blue-700";
            }

            return (
              <button
                key={idx}
                disabled={confirmed}
                onClick={() => setSelectedOption(idx)}
                className={`w-full flex items-start gap-3 p-3 rounded-xl transition-all text-left ${optionStyle} ${confirmed ? "cursor-default" : "cursor-pointer"}`}
              >
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 ${
                    confirmed && idx === currentQuestion.correctAnswer
                      ? "border-green-500 text-green-600 bg-white"
                      : confirmed && idx === selectedOption && idx !== currentQuestion.correctAnswer
                      ? "border-red-400 text-red-500 bg-white"
                      : selectedOption === idx && !confirmed
                      ? "border-blue-500 text-blue-600 bg-white"
                      : "border-gray-300 text-gray-400 bg-white"
                  }`}
                >
                  {OPTION_LABELS[idx]}
                </span>
                <span className="text-sm leading-relaxed pt-0.5">{option}</span>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {confirmed && (
          <div
            className={`mx-6 mb-4 p-4 rounded-xl flex items-start gap-3 ${
              isCorrect ? "bg-green-50 border border-green-200" : "bg-amber-50 border border-amber-200"
            }`}
          >
            {isCorrect ? (
              <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
            )}
            <div>
              <p className={`text-xs font-semibold mb-1 ${isCorrect ? "text-green-700" : "text-amber-700"}`}>
                {isCorrect ? "Correct!" : isWrong ? "Incorrect" : ""}
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                {currentQuestion.explanation}
              </p>
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="px-6 pb-6">
          {!confirmed ? (
            <button
              onClick={handleConfirm}
              disabled={selectedOption === null}
              className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                selectedOption === null
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "text-white hover:opacity-90 active:scale-[0.98]"
              }`}
              style={
                selectedOption !== null ? { backgroundColor: "#3B5BDB" } : undefined
              }
            >
              Confirm Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all"
              style={{ backgroundColor: "#3B5BDB" }}
            >
              {isLastQuestion ? "See Results" : "Next Question"}
              <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
