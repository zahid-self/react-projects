import React from "react";

const Bill = () => {
  return (
    <section className="mt-4 justify-content-end row">
      <div className="col-lg-6">
        <div className="d-flex flex-row align-items-start justify-content-between">
          <span className="fw-bold">Subtotal:</span>
          <span>$1.00</span>
        </div>
        <div className="d-flex flex-row align-items-start justify-content-between">
          <span className="fw-bold">Discount:</span>
          <span>(0%)$0.00</span>
        </div>
        <div className="d-flex flex-row align-items-start justify-content-between">
          <span className="fw-bold">Tax:</span>
          <span>(0%)$0.00</span>
        </div>
        <div className="d-flex flex-row align-items-start justify-content-between"></div>
        <hr />
        <div className="d-flex flex-row align-items-start justify-content-between">
          <span className="fw-bold">Total:</span>
          <span className="fw-bold">$0.00</span>
        </div>
      </div>
    </section>
  );
};

export default Bill;
