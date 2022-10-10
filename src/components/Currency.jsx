import React from "react";

const Currency = () => {
  return (
    <div className="mb-3">
      <label htmlFor="" className="fw-bold form-label">
        Currency:
      </label>
      <select
        aria-label="Change Currency"
        className="btn btn-light my-1 form-select"
      >
        <option value="$">USD (United States Dollar)</option>
        <option value="£">GBP (British Pound Sterling)</option>
        <option value="¥">JPY (Japanese Yen)</option>
        <option value="$">CAD (Canadian Dollar)</option>
        <option value="$">AUD (Australian Dollar)</option>
        <option value="$">SGD (Signapore Dollar)</option>
        <option value="¥">CNY (Chinese Renminbi)</option>
        <option value="₿">BTC (Bitcoin)</option>
      </select>
    </div>
  );
};

export default Currency;
