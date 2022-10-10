import React from "react";
import Currency from "./Currency";
import Discount from "./Discount";
import Hr from "./Hr";
import Tax from "./Tax";

const RightSideBar = () => {
  return (
    <div className="col-lg-3 col-md-4">
      <div className="my-3 my-xl-4 card">
        <button className="btn btn-primary btn-block">Review Invoice</button>
      </div>
      <Hr />
      <Currency />
      <Tax />
      <Discount />
    </div>
  );
};

export default RightSideBar;
