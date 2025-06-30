import React from 'react';

const QuestionCard = ({ question, options, selectedOption, onOptionSelect }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 w-full max-w-xl mx-auto mb-6 border border-gray-700">
  <h2 className="md:text-2xl font-semibold mb-5 text-indigo-300">{question}</h2>
  <div className="flex flex-col gap-3">
    {options.map((option, index) => (
      <button
        key={index}
        className={`text-left border px-4 py-2 rounded-lg transition duration-200 shadow-sm ${
          selectedOption === option
            ? 'bg-indigo-500 text-white font-medium'
            : 'bg-gray-700 text-gray-100 hover:bg-gray-600'
        }`}
        onClick={() => onOptionSelect(option)}
      >
        {option}
      </button>
    ))}
  </div>
</div>

  );
};

export default QuestionCard;