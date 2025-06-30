import React, { useState } from 'react';
import questions from './data/questions';
import QuestionCard from './components/QuestionCard';
import Result from './components/Result';

function App() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (option) => {
    setSelected(option);
  };

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    setSelected(null);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
  <div className="w-full max-w-3xl">
    <h1 className="text-4xl font-bold text-center mb-8 text-indigo-300 drop-shadow">
      🧠 React Quiz App
    </h1>

    {!showResult ? (
      <>
        <QuestionCard
          question={questions[current].question}
          options={questions[current].options}
          selectedOption={selected}
          onOptionSelect={handleOptionSelect}
        />
        <div className="text-center">
          <button
            disabled={!selected}
            onClick={handleNext}
            className={`mt-4 px-6 py-2 rounded-lg font-medium transition duration-300 ${
              selected
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
          >
            {current + 1 === questions.length ? 'Finish' : 'Next'}
          </button>
        </div>
      </>
    ) : (
      <Result score={score} total={questions.length} onRestart={handleRestart} />
    )}
  </div>
</div>

  );
}

export default App;

