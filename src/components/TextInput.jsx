import React from "react";

const TextInput = ({ type, text, ...rest }) => {
  return (
    <input type={type} className="form-control" placeholder={text} {...rest} />
  );
};

export default TextInput;
