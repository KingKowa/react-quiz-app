import React, { useState } from "react";

const QuizStart = ({ onStart }) => {
  const [category, setCategory] = useState("9");
  const [difficulty, setDifficulty] = useState("easy");
  const [amount, setAmount] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    onStart({ category, difficulty, amount });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 max-w-md mx-auto bg-white rounded shadow-md"
    >
      <label className="block mb-2">
        Category:
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="block w-full mt-1 p-2 border border-gray-300 rounded"
        >
          <option value="9">General Knowledge</option>
          <option value="17">Science</option>
          <option value="23">History</option>
        </select>
      </label>
      <label className="block mb-2">
        Difficulty:
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="block w-full mt-1 p-2 border border-gray-300 rounded"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
      <label className="block mb-2">
        Number of Questions:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="block w-full mt-1 p-2 border border-gray-300 rounded"
        />
      </label>
      <button
        type="submit"
        className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Start Quiz
      </button>
    </form>
  );
};

export default QuizStart;
