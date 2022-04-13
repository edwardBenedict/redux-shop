import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sellPhone } from "../redux";

function PhoneHooksComp() {
  const numberOfPhones = useSelector((state) => state.phone.numberOfPhones);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Phones [Hooks Example]</h2>
      <h3>
        Number Of Phones : <span className="number">{numberOfPhones}</span>
      </h3>
      <button onClick={() => dispatch(sellPhone())}>Sell Phone</button>
    </div>
  );
}

export default PhoneHooksComp;
