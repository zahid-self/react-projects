import React from "react";

const Discount = () => {
  return (
    <div className="mb-3">
      <label htmlFor="" className="fw-bold form-label">
        Discount rate:
      </label>
      <div className="my-1 flex-nowrap input-group">
        <input
          type="number"
          min="1"
          required
          className="form-control"
          autoComplete="off"
        />
        <span className="bg-light fw-bold border-0 text-secondary px-2 input-group-text">
          <span
            className="rounded-circle d-flex align-items-center justify-content-center small"
            style={{ width: "20px", height: "20px" }}
          >
            %
          </span>
        </span>
      </div>
    </div>
  );
};

export default Discount;
