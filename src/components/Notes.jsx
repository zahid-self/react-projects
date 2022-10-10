import React from "react";
import Hr from "./Hr";

const Notes = () => {
  return (
    <>
      <Hr />
      <label htmlFor="" className="fw-bold form-label">
        Notes:
      </label>
      <textarea
        className="form-control my-2"
        rows="1"
        placeholder="Thanks for your business!"
      ></textarea>
    </>
  );
};

export default Notes;
