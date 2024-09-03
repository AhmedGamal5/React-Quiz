import React from "react";
import Options from "./Options";

export default function Question({ questions, dispatch,answer }) {
  return (
    <div>
      <h2>{questions.question}</h2>
      <Options questions={questions} dispatch={dispatch} answer={answer}/>
    </div>
  );
}
