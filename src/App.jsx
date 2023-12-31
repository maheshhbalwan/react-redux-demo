import React from "react";
import Counter from "./components/Count";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center gap-4 ">
      <button
        type="button"
        onClick={(e) => dispatch({ type: "INCREMENT" })}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Increment
      </button>
      <Counter />
      <button
        type="button"
        onClick={(e) => dispatch({ type: "DECREMENT" })}
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
