import React from "react";

const ScoreSummary = ({ score, total, onRetake }) => (
  <div className="p-4 max-w-md mx-auto bg-white rounded shadow-md text-center">
    <h2 className="text-2xl font-bold">
      Your Score: {score}/{total}
    </h2>
    <button
      onClick={onRetake}
      className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
    >
      Retake Quiz
    </button>
  </div>
);

export default ScoreSummary;
