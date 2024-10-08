import React from "react";

export default function Questions({ questions, dispatch, answer }) {
  const hasAnswer = answer !== null;
  return (
    <div className="options">
      {questions.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswer
              ? index === questions.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswer}
          onClick={() => {
            dispatch({ type: "answerQuiz", payload: index });
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
