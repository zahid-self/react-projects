import React from "react";
import Bill from "./Bill";
import BillInfo from "./BillInfo";
import Header from "./Header";
import ItemAdd from "./ItemAdd";
import Notes from "./Notes";

const LeftSideBar = () => {
  return (
    <div className="col-lg-9 col-md-8">
      <div className="p-4 p-xl-5 my-3 my-xl-4 card">
        <Header />
        <BillInfo />
        <ItemAdd />
        <Bill />
        <Notes />
      </div>
    </div>
  );
};

export default LeftSideBar;
