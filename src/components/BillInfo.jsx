import React from "react";

const BillInfo = () => {
  return (
    <section className="mb-5 row">
      <div className="col">
        <label className="fw-bold form-label" htmlFor="">
          Bill to:
        </label>
        <input
          type="text"
          className="form-control my-2"
          placeholder="Who is this invoice to?"
          required
        />
        <input
          type="email"
          className="form-control my-2"
          placeholder="Email address"
          required
        />
        <input
          type="text"
          className="form-control my-2"
          placeholder="Billing address"
          required
        />
      </div>
      <div className="col">
        <label className="fw-bold form-label" htmlFor="">
          Bill from:
        </label>
        <input
          type="text"
          className="form-control my-2"
          placeholder="Who is this invoice from?"
          required
        />
        <input
          type="email"
          className="form-control my-2"
          placeholder="Email address"
          required
        />
        <input
          type="text"
          className="form-control my-2"
          placeholder="Billing address"
          required
        />
      </div>
    </section>
  );
};

export default BillInfo;
