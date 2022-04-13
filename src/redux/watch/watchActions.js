import { SELL_WATCH } from "./watchTypes";

export const sellWatch = (number = 1) => {
  return {
    type: SELL_WATCH,
    payload: number
  };
};
