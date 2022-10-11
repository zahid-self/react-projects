import React, { useState } from "react";
import Hr from "./Hr";

const Header = () => {
  const [date, setDate] = useState();
  const [invoiceNumber, setInvoiceNumber] = useState(1);
  return (
    <>
      <section className="d-flex flex-row align-items-start justify-content-between mb-3">
        <div className="d-flex flex-column">
          <div className="d-flex flex-column">
            <div className="mb-2">
              <span className="fw-bold">Current Date:</span>
              <span>
                {Number(new Date().getMonth() + 1) +
                  "/" +
                  new Date().getDate() +
                  "/" +
                  new Date().getFullYear()}
              </span>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center">
            <span className="fw-bold d-block me-2">Due Date:</span>
            <input
              type="date"
              className="form-control"
              style={{ maxWidth: "150px" }}
            />
          </div>
        </div>
        <div className="d-flex flex-row align-items-center">
          <span className="fw-bold me-2">Invoice Number:</span>
          <input
            type="number"
            min="1"
            required
            className="form-control"
            style={{ maxWidth: "70px" }}
            autoComplete="off"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
          />
        </div>
      </section>
      <Hr className={"my-4"} />
    </>
  );
};

export default Header;
