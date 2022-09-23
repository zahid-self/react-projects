import React from "react";
import classes from "../styles/Illustration.module.css";
import SignUpSVG from "./assets/images/signup.svg";

const Illustration = () => {
  return (
    <div class={classes.illustration}>
      <img src={SignUpSVG} alt="Signup" />
    </div>
  );
};

export default Illustration;
