import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import useQuizList from "../../hooks/useQuizList";
import Answers from "../Answers";
import Miniplayer from "../Miniplayer";
import ProgressBar from "../ProgressBar";

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;
      return questions;
    default:
      return state;
  }
};

const Quiz = () => {
  const { id } = useParams();
  const { loading, error, quiz } = useQuizList(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: "questions",
      value: quiz,
    });
  }, [quiz]);

  const handeAnswerChange = (e, index) => {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion <= quiz.length)
      setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion >= 1 && currentQuestion <= quiz.length)
      setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion - 1);
  };

  const progress =
    quiz.length > 0 ? ((currentQuestion + 1) / quiz.length) * 100 : 0;

  const submit = async () => {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });

    navigate(`/result/${id}`, {
      state: {
        qna,
      },
    });
  };

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error</div>}
      {!loading && !error && quiz && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            options={qna[currentQuestion].options}
            handleChange={handeAnswerChange}
          />
          <ProgressBar
            next={handleNextQuestion}
            prev={handlePreviousQuestion}
            submit={submit}
            progress={progress}
          />
          <Miniplayer />
        </>
      )}
    </>
  );
};

export default Quiz;
