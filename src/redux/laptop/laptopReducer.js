import { SELL_LAPTOP } from "./laptopTypes";

const initialState = {
  numberOfLaptops: 100
};

const laptopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELL_LAPTOP:
      return {
        ...state,
        numberOfLaptops: state.numberOfLaptops - 1
      };

    default:
      return state;
  }
};

export default laptopReducer;
