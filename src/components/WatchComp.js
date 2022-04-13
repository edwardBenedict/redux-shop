import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sellWatch } from "../redux";

function WatchHooksComp() {
  const [number, setNumber] = useState(1);
  const numberOfWatches = useSelector((state) => state.watch.numberOfWatches);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Watches [Hooks Example]</h2>
      <h3>
        Number Of Watches : <span className="number">{numberOfWatches}</span>
      </h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button onClick={() => dispatch(sellWatch(number))}>
        Sell {number} Watch
      </button>
    </div>
  );
}

export default WatchHooksComp;
