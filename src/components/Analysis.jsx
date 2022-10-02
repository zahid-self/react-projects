import React from "react";
import Question from "./Question";

const Analysis = ({ answers }) => {
  return (
    <div style={{ margin: "2rem auto" }}>
      <h1>Question Analysis</h1>
      <Question answers={answers} />
    </div>
  );
};

export default Analysis;
