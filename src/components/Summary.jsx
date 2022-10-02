import React from "react";
import classes from "../styles/Summary.module.css";
import image from "./assets/images/success.png";

const Summary = ({ answer, noq }) => {
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {answer} out of {noq * 5}
        </p>
      </div>

      <div className={classes.badge}>
        <img src={image} alt="Success" />
      </div>
    </div>
  );
};

export default Summary;
