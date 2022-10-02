import React, { useRef, useState } from "react";
import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";

const ProgressBar = ({ next, prev, submit, progress }) => {
  const tootlipRef = useRef();
  const [tooltip, setTooltip] = useState(false);

  const handleTooltip = () => {
    if (tooltip) {
      setTooltip(false);
      tootlipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tootlipRef.current.style.left = `calc(${progress}% - 65px)`;
      tootlipRef.current.style.display = "block";
    }
  };
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip} ref={tootlipRef}>
          {progress}% Cimplete!
        </div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
            onMouseOver={handleTooltip}
            onMouseOut={handleTooltip}
          ></div>
        </div>
      </div>
      <Button
        className={classes.next}
        onClick={progress === 100 ? submit : next}
      >
        <span>{progress === 100 ? "Submit" : "Next Question"}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
};

export default ProgressBar;
