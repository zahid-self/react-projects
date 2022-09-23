import React from "react";
import classes from "../styles/Form.module.css";

const Form = ({ children, className, ...rest }) => {
  return (
    <form class={`${className} ${classes.form}`} action="#">
      {children}
    </form>
  );
};

export default Form;
