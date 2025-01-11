import React from "react";

const QuestionCard = ({ question, options, handleAnswer }) => (
  <div className="p-4 max-w-md mx-auto bg-white rounded shadow-md">
    <h2
      className="text-lg font-semibold mb-4"
      dangerouslySetInnerHTML={{ __html: question }}
    ></h2>
    <div className="space-y-2">
      {options.map((option, index) => (
        <button
          key={index}
          className="w-full p-2 bg-gray-100 rounded hover:bg-gray-200"
          onClick={() => handleAnswer(option)}
          dangerouslySetInnerHTML={{ __html: option }}
        ></button>
      ))}
    </div>
  </div>
);

export default QuestionCard;
