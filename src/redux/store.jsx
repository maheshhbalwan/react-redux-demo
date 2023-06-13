import { createStore } from "redux";

// reducer is a function which has 2 parameters
// we will use it to handle increment and decrement
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(reducer);
