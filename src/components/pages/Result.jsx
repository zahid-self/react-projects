import _ from "lodash";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import useAnswerList from "../../hooks/useAnswerList";
import Analysis from "../Analysis";
import Summary from "../Summary";

const Result = () => {
  const { state } = useLocation();
  const { qna } = state;

  const { id } = useParams();
  const { loading, error, answers } = useAnswerList(id);

  const calculate = () => {
    let score = 0;

    answers.forEach((question, index1) => {
      const correctIndexes = [],
        checkedIndexes = [];

      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);
        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 5;
      }
    });

    return score;
  };

  const userAnswer = calculate();

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There is some error</div>}
      {answers && answers.length > 0 && (
        <>
          <Summary answer={userAnswer} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
};

export default Result;
