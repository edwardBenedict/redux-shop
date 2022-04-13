// // FIRSTLY: WITHOUT LOGGER
///////////////////////////////////////////////
import { createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

export default store;
///////////////////////////////////////////////

// // WITH LOGGER
///////////////////////////////////////////////
// import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import rootReducer from "./rootReducer";

// const store = createStore(rootReducer, applyMiddleware(logger));

// export default store;
////////////////////////////////////////////////
