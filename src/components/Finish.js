import React from "react";
const Finish = ({ points, maxPoints,highscore,dispatch}) => {
  const percentOfScore = (points / maxPoints) * 100;
  let emoji;

  switch (true) {
    case percentOfScore === 100:
      emoji = "🎉";
      break;
    case percentOfScore >= 80 && percentOfScore < 100:
      emoji = "👍";
      break;
    case percentOfScore >= 50 && percentOfScore < 80:
      emoji = "🙂";
      break;
    case percentOfScore >= 0 && percentOfScore < 50:
      emoji = "😐";
      break;
    case percentOfScore === 0:
      emoji = "😢";
      break;
    default:
      emoji = "";
  }
  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        <strong>{maxPoints}</strong>
        points ({Math.ceil(percentOfScore)}%)
      </p>
      <p className="highscore">(Highscore: <strong>{highscore}</strong> points )</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
};

export default Finish;
