import React, { useState } from "react";
import QuizStart from "./components/QuizStart";
import QuestionCard from "./components/QuestionCard";
import ScoreSummary from "./components/ScoreSummary";
import QuizHistory from "./components/QuizHistory";
import { fetchQuizData } from "./api";

function App() {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [history, setHistory] = useState([]);

  const startQuiz = async ({ category, difficulty, amount }) => {
    const data = await fetchQuizData(category, difficulty, amount);
    setQuizData(data);
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestionIndex].correct_answer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const finishQuiz = () => {
    const newHistory = [
      ...history,
      {
        topic: quizData[0].category,
        score: score,
        total: quizData.length,
        date: new Date(),
      },
    ];
    setHistory(newHistory);
    setQuizStarted(false);
  };

  const retakeQuiz = () => {
    setQuizStarted(false);
  };

  if (!quizStarted) {
    return (
      <>
        <QuizStart onStart={startQuiz} />
        <QuizHistory history={history} />
      </>
    );
  }

  if (currentQuestionIndex < quizData.length) {
    const question = quizData[currentQuestionIndex];
    const options = [
      ...question.incorrect_answers,
      question.correct_answer,
    ].sort();
    return (
      <QuestionCard
        question={question.question}
        options={options}
        handleAnswer={handleAnswer}
      />
    );
  }

  return (
    <ScoreSummary score={score} total={quizData.length} onRetake={retakeQuiz} />
  );
}

export default App;
