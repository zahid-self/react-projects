import React from "react";
import { BiTrash } from "react-icons/bi";
import TextInput from "./TextInput";

const ItemAddForm = ({
  item,
  setItemName,
  setItemDesc,
  setItemPrice,
  setItemQty,
  currency,
  handleRemoveRow,
}) => {
  return (
    <tr>
      <td style={{ width: "100%" }}>
        <div className="my-1 flex-nowrap input-group">
          <TextInput
            type={"text"}
            required
            text={"Item name"}
            value={item.itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div className="my-2 flex-nowrap input-group">
          <TextInput
            type={"text"}
            required
            text={"Item description"}
            value={item.itemDesc}
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
          value={item.itemQty}
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
              {currency}
            </span>
          </span>
          <input
            className="form-control"
            type={"number"}
            required
            autoComplete="off"
            value={item.itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
          />
        </div>
      </td>
      <td className="text-center" style={{ minWidth: "50px" }}>
        <BiTrash
          onClick={handleRemoveRow}
          style={{ height: "33px", width: "33px", padding: "7.5px" }}
          className="text-white mt-1 btn btn-danger"
        />
      </td>
    </tr>
  );
};

export default ItemAddForm;
