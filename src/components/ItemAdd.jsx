import React from "react";
import TextInput from "./TextInput";

const ItemAdd = () => {
  return (
    <section>
      <table className="table">
        <thead>
          <tr>
            <th>ITEM</th>
            <th>QTY</th>
            <th>PRICE/RATE</th>
            <th className="text-center">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: "100%" }}>
              <div className="my-1 flex-nowrap input-group">
                <TextInput type={"text"} required text={"Item name"} />
              </div>
              <div className="my-2 flex-nowrap input-group">
                <TextInput type={"text"} required text={"Item description"} />
              </div>
            </td>
            <td style={{ minWidth: "70px" }}>
              <TextInput type={"number"} required autoComplete="off" min="1" />
            </td>
            <td style={{ minWidth: "70px" }}>
              <div className="my-1 flex-nowrap input-group">
                <span className="bg-light fw-bold border-0 text-secondary px-2 input-group-text">
                  <span
                    className="border border-2 border-secondary rounded-circle d-flex align-items-center justify-content-center small"
                    style={{ width: "20px", height: "20px" }}
                  >
                    $
                  </span>
                </span>
                <TextInput
                  type={"number"}
                  required
                  autoComplete="off"
                  min="1"
                />
              </div>
            </td>
            <td className="text-center" style={{ minWidth: "50px" }}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-white mt-1 btn btn-danger"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: "33px", width: "33px", padding: "7.5px" }}
              >
                <path
                  fill="none"
                  d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"
                ></path>
                <path d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"></path>
                <path d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"></path>
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-primary">Add Item</button>
    </section>
  );
};

export default ItemAdd;
