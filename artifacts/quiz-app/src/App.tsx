import { useState } from "react";
import { ConfigScreen } from "./pages/ConfigScreen";
import { QuizScreen } from "./pages/QuizScreen";
import { ResultsScreen } from "./pages/ResultsScreen";
import { getQuestions } from "./data/questions";
import type { Question } from "./data/questions";

type Screen = "config" | "quiz" | "results";
type Category = "UAS" | "C-UAS";
type QuestionCount = 5 | 10 | 15 | 20;

function App() {
  const [screen, setScreen] = useState<Screen>("config");
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [finalAnswers, setFinalAnswers] = useState<(number | null)[]>([]);

  function handleStart(category: Category, count: QuestionCount) {
    const selected = getQuestions(category, count);
    setQuizQuestions(selected);
    setScreen("quiz");
  }

  function handleFinish(answers: (number | null)[]) {
    setFinalAnswers(answers);
    setScreen("results");
  }

  function handleRestart() {
    setScreen("config");
    setQuizQuestions([]);
    setFinalAnswers([]);
  }

  if (screen === "config") {
    return <ConfigScreen onStart={handleStart} />;
  }

  if (screen === "quiz") {
    return <QuizScreen questions={quizQuestions} onFinish={handleFinish} />;
  }

  return (
    <ResultsScreen
      questions={quizQuestions}
      answers={finalAnswers}
      onRestart={handleRestart}
    />
  );
}

export default App;
