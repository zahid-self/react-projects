import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { BiTrash } from "react-icons/bi";
import { ReactSVG } from "react-svg";
import Fly from "../assets/img/Fly.svg";
import Hr from "./Hr";

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
  const [currency, setCurrency] = useState("$");
  const [date, setDate] = useState("");
  const [itemQty, setItemQty] = useState(0);
  const [itemPrice, setItemPrice] = useState(1.0);
  const [itemInput, setItemInput] = useState({});
  const [tax, setTax] = useState(0.0);
  const [discount, setDiscount] = useState(0.0);
  const [notes, setNotes] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleInvoicePreview = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const [items, setItem] = useState([itemInput]);

  const handleAddItemFormRow = () => {
    let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    let newItems = {
      id: id,
      itemName: "",
      itemDesc: "",
      itemPrice: "1.0",
      itemQty: 1,
    };
    setItem([...items, newItems]);
  };

  const handleItem = (e) => {
    const { name, value } = e.target;
    setItemInput({
      ...itemInput,
      [name]: value,
    });
  };

  const handleRemoveRow = (index) => {
    items.splice(index, 1);
    setItem([...items]);
  };

  const generatePdf = () => {
    html2canvas(document.querySelector("#invoiceCapture")).then((canvas) => {
      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: [612, 792],
      });
      pdf.internal.scaleFactor = 1;
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("invoice.001.pdf");
    });
  };

  console.log(items);

  return (
    <>
      <div className="container">
        <form>
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
                      {items &&
                        items.map((item, index) => (
                          <tr key={index}>
                            <td style={{ width: "100%" }}>
                              <div className="my-1 flex-nowrap input-group">
                                <input
                                  className="form-control"
                                  type={"text"}
                                  required
                                  name="itemName"
                                  placeholder="Item name"
                                  value={item.itemName}
                                  onChange={handleItem}
                                />
                              </div>
                              <div className="my-2 flex-nowrap input-group">
                                <input
                                  className="form-control"
                                  type={"text"}
                                  required
                                  placeholder="Item description"
                                  name="itemDesc"
                                  value={item.itemDesc}
                                  onChange={handleItem}
                                />
                              </div>
                            </td>
                            <td style={{ minWidth: "70px" }}>
                              <input
                                className="form-control"
                                type={"number"}
                                required
                                autoComplete="off"
                                min="1"
                                value={item.itemQty}
                                name="itemQty"
                                onChange={handleItem}
                              />
                            </td>
                            <td style={{ minWidth: "70px" }}>
                              <div className="my-1 flex-nowrap input-group">
                                <span className="bg-light fw-bold border-0 text-secondary px-2 input-group-text">
                                  <span
                                    className="border border-2 border-secondary rounded-circle d-flex align-items-center justify-content-center small"
                                    style={{ width: "20px", height: "20px" }}
                                  >
                                    {currency}
                                  </span>
                                </span>
                                <input
                                  className="form-control"
                                  type={"number"}
                                  required
                                  autoComplete="off"
                                  value={item.itemPrice}
                                  name="itemPrice"
                                  onChange={handleItem}
                                />
                              </div>
                            </td>
                            <td
                              className="text-center"
                              style={{ minWidth: "50px" }}
                            >
                              <BiTrash
                                onClick={handleRemoveRow}
                                style={{
                                  height: "33px",
                                  width: "33px",
                                  padding: "7.5px",
                                }}
                                className="text-white mt-1 btn btn-danger"
                              />
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleAddItemFormRow}
                  >
                    Add Item
                  </button>
                </section>
                <section className="mt-4 justify-content-end row">
                  <div className="col-lg-6">
                    <div className="d-flex flex-row align-items-start justify-content-between">
                      <span className="fw-bold">Subtotal:</span>
                      <span> {currency} 1.00</span>
                    </div>
                    <div className="d-flex flex-row align-items-start justify-content-between">
                      <span className="fw-bold">Discount:</span>
                      <span>
                        ({discount}%) {currency} 0.00
                      </span>
                    </div>
                    <div className="d-flex flex-row align-items-start justify-content-between">
                      <span className="fw-bold">Tax:</span>
                      <span>
                        ({tax}%) {currency} 0.00
                      </span>
                    </div>
                    <div className="d-flex flex-row align-items-start justify-content-between"></div>
                    <hr />
                    <div className="d-flex flex-row align-items-start justify-content-between">
                      <span className="fw-bold">Total:</span>
                      <span className="fw-bold">{currency} 0.00</span>
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
                <button
                  className="btn btn-primary btn-block"
                  onClick={handleInvoicePreview}
                >
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
                  onChange={(e) => setCurrency(e.target.value)}
                  defaultValue={currency}
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

      <Modal
        show={isOpen}
        onHide={hideModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div id="invoiceCapture">
          <Modal.Header className="d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4">
            <div className="w-100">
              <h4 className="fw-bold my-2">{whoIsInvoiceFrom}</h4>
              <h6 className="fw-bold text-secondary mb-1">{invoiceNumber}</h6>
            </div>
            <div className="text-end ms-4">
              <h6 className="fw-bold mt-1 mb-2">Amount Due:</h6>
              <h5 className="fw-bold text-secondary">{currency}1234</h5>
            </div>
          </Modal.Header>
          <Modal.Body className="p-4">
            <div className="row mb-4">
              <div className="col-md-4">
                <div className="fw-bold">Billed to:</div>
                <div>{whoIsInvoiceTo}</div>
                <div>{billingAddressTo}</div>
                <div>{emailTo}</div>
              </div>
              <div className="col-md-4">
                <div className="fw-bold">Billed From:</div>
                <div>{whoIsInvoiceFrom}</div>
                <div>{billingAddressFrom}</div>
                <div>{emailFrom}</div>
              </div>
              <div className="col-md-4">
                <div className="fw-bold">Date of issue:</div>
                <div>2022-02-08</div>
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>QTY</th>
                  <th>DESCRIPTION</th>
                  <th className="text-end">PRICE</th>
                  <th className="text-end">AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                {/* { items &&
                  items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.itemQty}</td>
                      <td>{`${item.itemName} - ${item.itemDesc}`}</td>
                      <td className="text-end">
                        {currency}
                        {item.itemPrice}
                      </td>
                      <td className="text-end">{currency} 1200</td>
                    </tr>
                  ))} */}
              </tbody>
            </table>
            <table className="table">
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="text-end">
                  <td></td>
                  <td className="fw-bold" style={{ width: "100px" }}>
                    SUBTOTAL
                  </td>
                  <td className="text-end" style={{ width: "100px" }}>
                    {currency} 120
                  </td>
                </tr>
                <tr className="text-end">
                  <td></td>
                  <td className="fw-bold" style={{ width: "100px" }}>
                    TAX
                  </td>
                  <td className="text-end" style={{ width: "100px" }}>
                    {currency} {tax}
                  </td>
                </tr>
                <tr className="text-end">
                  <td></td>
                  <td className="fw-bold" style={{ width: "100px" }}>
                    DISCOUNT
                  </td>
                  <td className="text-end" style={{ width: "100px" }}>
                    {currency} {discount}
                  </td>
                </tr>
                <tr className="text-end">
                  <td></td>
                  <td className="fw-bold" style={{ width: "100px" }}>
                    TOTAL
                  </td>
                  <td className="text-end" style={{ width: "100px" }}>
                    {currency} 120
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="bg-light py-3 px-4 rounded">{notes}</div>
          </Modal.Body>
        </div>
        <div className="row p-4">
          <div className="col-md-6">
            <button className="d-block w-100 btn btn-primary">
              <span className="d-flex justify-content-center">
                <ReactSVG src={Fly} />
                Send Invoice
              </span>
            </button>
          </div>
          <div className="col-md-6">
            <button
              className="d-block w-100 mt-3 mt-md-0 btn btn-outline-primary"
              onClick={generatePdf}
            >
              <span className="d-flex justify-content-center">
                <ReactSVG src={Fly} />
                Download Copy
              </span>
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Layout;
