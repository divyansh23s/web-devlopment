import React from 'react';

const Result = ({ score, total, onRestart }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-lg mx-auto text-center border border-gray-700">
  <h2 className="text-3xl font-bold text-green-400 mb-6">🎉 Your Score: {score} / {total}</h2>
  <button
    onClick={onRestart}
    className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
  >
    Restart Quiz
  </button>
</div>

  );
};

export default Result;