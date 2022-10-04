import React from "react";
import useFetch from "../hooks/useFetch";
import classes from "../styles/Summary.module.css";
import image from "./assets/images/success.png";

const Summary = ({ answer, noq }) => {
  const keywordGenerate = () => {
    if ((answer / (noq * 5)) * 100 < 50) {
      console.log((answer / (noq * 5)) * 100);
      return "failed";
    } else if ((answer / (noq * 5)) * 100 < 75) {
      console.log((answer / (noq * 5)) * 100);
      return "good";
    } else if ((answer / (noq * 5)) * 100 < 100) {
      console.log((answer / (noq * 5)) * 100);
      return "very good";
    } else {
      console.log((answer / (noq * 5)) * 100);
      return "excellent";
    }
  };

  const keyword = keywordGenerate();

  const { loading, error, data } = useFetch(keyword);
  const finalImage = data ? data?.photos[0].src.medium : image;

  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {answer} out of {noq * 5}
        </p>
      </div>

      {loading && <div className={classes.badge}>Loading...</div>}
      {error && <div className={classes.badge}>There is an error.</div>}
      {!loading && !error && (
        <div className={classes.badge}>
          <img src={finalImage} alt="Success" />
        </div>
      )}
    </div>
  );
};

export default Summary;
