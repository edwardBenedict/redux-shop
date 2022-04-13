import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import LaptopStore from "./components/LaptopComp";
// import "./styles.css";
import PhoneHooksComp from "./components/PhoneHooksComp";
import WatchComp from "./components/WatchComp";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>ClarusShop</h1>
        <LaptopStore />
        <PhoneHooksComp />
        <WatchComp />
      </div>
    </Provider>
  );
};

export default App;
