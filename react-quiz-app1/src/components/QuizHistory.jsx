import React from "react";

const QuizHistory = ({ history }) => {
  const totalQuizzes = history.length;
  const totalScore = history.reduce((sum, quiz) => sum + quiz.score, 0);
  const averageScore =
    totalQuizzes > 0 ? (totalScore / totalQuizzes).toFixed(2) : 0;
  const bestScore = Math.max(0, ...history.map((quiz) => quiz.score));

  return (
    <div className="p-4 max-w-lg mx-auto bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Quiz History</h2>
      <p>
        <strong>Average Score:</strong> {averageScore}
      </p>
      <p>
        <strong>Best Score:</strong> {bestScore}
      </p>
      {totalQuizzes === 0 ? (
        <p>No quizzes taken yet.</p>
      ) : (
        <ul className="space-y-4">
          {history.map((quiz, index) => (
            <li key={index} className="p-2 border border-gray-300 rounded">
              <p>
                <strong>Topic:</strong> {quiz.topic}
              </p>
              <p>
                <strong>Score:</strong> {quiz.score}/{quiz.total}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(quiz.date).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QuizHistory;
