import React, { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartQuestions from "./StartQuestions";
import Question from "./Question";
import NextQuestion from "./NextQuestion";
import Progress from "./Progress";
import Finish from "./Finish";
import Footer from "./Footer";
const App = () => {
  //handle data
  const initialState = {
    questions: [],
    // loading, error, active, ready, finished
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
  };
  function reducer(state, action) {
    switch (action.type) {
      case "dataRecevied":
        return {
          ...state,
          questions: action.payload,
          status: "ready",
        };
      case "dataFeiled":
        return {
          ...state,
          status: "error",
        };
      case "start Quiz":
        return {
          ...state,
          status: "active",
        };
      case "answerQuiz":
        const question = state.questions.at(state.index);
        return {
          ...state,
          answer: action.payload,
          points:
            action.payload === question.correctOption
              ? state.points + question.points
              : state.points,
        };
      case "nextQuestion":
        return {
          ...state,
          index: state.index + 1,
          answer: null,
        };
      case "finish":
        return {
          ...state,
          status: "finish",
          highscore:
            state.points > state.highscore ? state.points : state.highscore,
        };
      case "restart":
        return {
          ...initialState,
          questions: state.questions,
          status: "ready",
        };
      default:
        throw new Error("Action not supported");
    }
  }

  const [{ status, questions, index, answer, points, highscore }, dispatch] =
    useReducer(reducer, initialState);
  const questionsNumber = questions.length;
  const maxPoints = questions.reduce(
    (total, question) => total + question.points,
    0
  );
  // fetch data
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecevied", payload: data }))
      .catch((err) => dispatch({ type: "dataFeiled" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <>
            <StartQuestions
              questionsNumber={questionsNumber}
              dispatch={dispatch}
            />
            <Footer />
          </>
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestion={questionsNumber}
              points={points}
              maxPoints={maxPoints}
              answer={answer}
            />
            <Question
              questions={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextQuestion
              dispatch={dispatch}
              answer={answer}
              numQuestions={questionsNumber}
              index={index}
            />
          </>
        )}
        {status === "finish" && (
          <>
            <Finish
              points={points}
              maxPoints={maxPoints}
              highscore={highscore}
              dispatch={dispatch}
            />
            <Footer />
          </>
        )}
      </Main>
    </div>
  );
};

export default App;
