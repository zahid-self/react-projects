import React, { useState } from "react";
import Hr from "./Hr";
import TextInput from "./TextInput";

const Layout = () => {
  const [invoiceNumber, setInvoiceNumber] = useState(1);
  const [whoIsInvoiceTo, setWhoIsInvoiceTo] = useState("");
  const [emailTo, setEmailTo] = useState("");
  const [billingAddressTo, setBillingAddressTo] = useState("");
  const [whoIsInvoiceFrom, setWhoIsInvoiceFrom] = useState("");
  const [emailFrom, setEmailFrom] = useState("");
  const [billingAddressFrom, setBillingAddressFrom] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemDesc, setItemDesc] = useState("");
  const [itemQty, setItemQty] = useState(0);
  const [itemPrice, setItemPrice] = useState(1.0);
  const [tax, setTax] = useState(0.0);
  const [discount, setDiscount] = useState(0.0);
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(invoiceNumber, whoIsInvoiceFrom, emailFrom, billingAddressFrom);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-9 col-md-8">
            <div className="p-4 p-xl-5 my-3 my-xl-4 card">
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
                    value={whoIsInvoiceTo}
                    onChange={(e) => setWhoIsInvoiceTo(e.target.value)}
                  />
                  <input
                    type="email"
                    className="form-control my-2"
                    placeholder="Email address"
                    required
                    value={emailTo}
                    onChange={(e) => setEmailTo(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control my-2"
                    placeholder="Billing address"
                    required
                    value={billingAddressTo}
                    onChange={(e) => setBillingAddressTo(e.target.value)}
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
                    value={whoIsInvoiceFrom}
                    onChange={(e) => setWhoIsInvoiceFrom(e.target.value)}
                  />
                  <input
                    type="email"
                    className="form-control my-2"
                    placeholder="Email address"
                    required
                    value={emailFrom}
                    onChange={(e) => setEmailFrom(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control my-2"
                    placeholder="Billing address"
                    required
                    value={billingAddressFrom}
                    onChange={(e) => setBillingAddressFrom(e.target.value)}
                  />
                </div>
              </section>
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
                          <TextInput
                            type={"text"}
                            required
                            text={"Item name"}
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                          />
                        </div>
                        <div className="my-2 flex-nowrap input-group">
                          <TextInput
                            type={"text"}
                            required
                            text={"Item description"}
                            value={itemDesc}
                            onChange={(e) => setItemDesc(e.target.value)}
                          />
                        </div>
                      </td>
                      <td style={{ minWidth: "70px" }}>
                        <TextInput
                          type={"number"}
                          required
                          autoComplete="off"
                          min="1"
                          value={itemQty}
                          onChange={(e) => setItemQty(e.target.value)}
                        />
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
                            value={itemPrice}
                            onChange={(e) => setItemPrice(e.target.value)}
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
                          style={{
                            height: "33px",
                            width: "33px",
                            padding: "7.5px",
                          }}
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
              <Hr />
              <label htmlFor="" className="fw-bold form-label">
                Notes:
              </label>
              <textarea
                className="form-control my-2"
                rows="1"
                placeholder="Thanks for your business!"
                onChange={(e) => setNotes(e.target.value)}
                defaultValue={notes}
              ></textarea>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="my-3 my-xl-4 card">
              <button className="btn btn-primary btn-block">
                Review Invoice
              </button>
            </div>
            <Hr />
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
            <div className="mb-3">
              <label htmlFor="" className="fw-bold form-label">
                Tax rate:
              </label>
              <div className="my-1 flex-nowrap input-group">
                <input
                  type="number"
                  min="1"
                  required
                  className="form-control"
                  autoComplete="off"
                  value={tax}
                  onChange={(e) => setTax(e.target.value)}
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
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default Layout;
