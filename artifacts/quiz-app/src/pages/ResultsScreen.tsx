import { RotateCcw, Home } from "lucide-react";
import type { Question } from "../data/questions";

interface ResultsScreenProps {
  questions: Question[];
  answers: (number | null)[];
  onRestart: () => void;
}

const OPTION_LABELS = ["A", "B", "C", "D"] as const;

function getGrade(percent: number): { label: string; color: string } {
  if (percent >= 90) return { label: "Excellent", color: "#16A34A" };
  if (percent >= 75) return { label: "Good", color: "#2563EB" };
  if (percent >= 60) return { label: "Passing", color: "#D97706" };
  return { label: "Needs Work", color: "#DC2626" };
}

interface CircleProgressProps {
  percent: number;
  color: string;
}

function CircleProgress({ percent, color }: CircleProgressProps) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width="140" height="140" style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="10"
        />
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1s ease" }}
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-3xl font-bold text-gray-900">{Math.round(percent)}%</div>
      </div>
    </div>
  );
}

export function ResultsScreen({ questions, answers, onRestart }: ResultsScreenProps) {
  const correctCount = questions.reduce((acc, q, i) => {
    return acc + (answers[i] === q.correctAnswer ? 1 : 0);
  }, 0);

  const percent = (correctCount / questions.length) * 100;
  const grade = getGrade(percent);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 pb-8" style={{ backgroundColor: "#3B5BDB" }}>
      {/* Score Card */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 mt-4 mb-4">
        <h1 className="text-xl font-bold text-gray-900 text-center mb-4">Quiz Results</h1>

        <div className="flex flex-col items-center mb-4">
          <CircleProgress percent={percent} color={grade.color} />
          <p
            className="text-lg font-bold mt-2"
            style={{ color: grade.color }}
          >
            {grade.label}
          </p>
          <p className="text-gray-500 text-sm mt-1">
            {correctCount} of {questions.length} correct
          </p>
        </div>

        <button
          onClick={onRestart}
          className="w-full py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all"
          style={{ backgroundColor: "#3B5BDB" }}
        >
          <RotateCcw size={16} />
          Play Again
        </button>
      </div>

      {/* Question Review */}
      <div className="w-full max-w-md space-y-3">
        <h2 className="text-white font-semibold text-sm px-1 mb-2">Question Review</h2>
        {questions.map((q, idx) => {
          const userAnswer = answers[idx];
          const isCorrect = userAnswer === q.correctAnswer;

          return (
            <div key={q.id} className="bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-start gap-3 mb-3">
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5 ${
                    isCorrect ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {idx + 1}
                </div>
                <p className="text-sm font-medium text-gray-800 leading-relaxed">{q.question}</p>
              </div>

              <div className="space-y-1.5 ml-9">
                {q.options.map((opt, optIdx) => {
                  const isCorrectOption = optIdx === q.correctAnswer;
                  const isUserWrong = optIdx === userAnswer && !isCorrect;

                  let cls = "text-xs px-3 py-1.5 rounded-lg flex items-center gap-2 ";

                  if (isCorrectOption) {
                    cls += "bg-green-50 text-green-800 font-medium border border-green-200";
                  } else if (isUserWrong) {
                    cls += "bg-red-50 text-red-700 font-medium border border-red-200";
                  } else {
                    cls += "text-gray-500";
                  }

                  return (
                    <div key={optIdx} className={cls}>
                      <span className="font-bold w-4 flex-shrink-0">{OPTION_LABELS[optIdx]}</span>
                      <span>{opt}</span>
                    </div>
                  );
                })}
              </div>

              {!isCorrect && (
                <div className="ml-9 mt-2 text-xs text-gray-500 leading-relaxed bg-gray-50 rounded-lg p-2">
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom restart */}
      <div className="w-full max-w-md mt-4">
        <button
          onClick={onRestart}
          className="w-full py-3 rounded-xl font-semibold bg-white flex items-center justify-center gap-2 hover:bg-gray-50 active:scale-[0.98] transition-all"
          style={{ color: "#3B5BDB" }}
        >
          <Home size={16} />
          Back to Home
        </button>
      </div>
    </div>
  );
}
