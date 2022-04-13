import { combineReducers } from "redux";
import laptopReducer from "./laptop/laptopReducer";
import phoneReducer from "./phone/phoneReducer";
import watchReducer from "./watch/watchReducer";

const rootReducer = combineReducers({
  laptop: laptopReducer,
  phone: phoneReducer,
  watch: watchReducer
});

export default rootReducer;
