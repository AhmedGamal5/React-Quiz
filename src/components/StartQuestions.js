import React from "react";

export default function StartQuestions({ questionsNumber, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{questionsNumber} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start Quiz" })}
      >
        Start Quiz
      </button>
    </div>
  );
}
