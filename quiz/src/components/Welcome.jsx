import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../img/quiz.svg";

import "./Welcome.css";

export function Welcome() {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id="welcome">
      <h2>Welcome to the Quiz App</h2>
      <p>Vamos começar!!!</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src={Quiz} alt="Quiz" />
    </div>
  );
}
