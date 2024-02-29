"use client"; // This is a client-side file
import { useCounterStore, useCounterStore2 } from "./store";

const App = () => {
  return <OtherComponent />;
};

const OtherComponent = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const incrementBy = useCounterStore((state) => state.incrementBy);

  const count2 = useCounterStore2((state) => state.count);
  const increment2 = useCounterStore2((state) => state.increment);
  const decrement2 = useCounterStore2((state) => state.decrement);
  const incrementBy2 = useCounterStore2((state) => state.incrementBy);

  const handleIncrementBy2 = () => {
    incrementBy2(5);
  };

  const handleIncrementBy = () => {
    incrementBy(5);
  };
  return (
    <div>
      <div>
        <div className="flex justify-center m-10 text-white">
          {" "}
          Count 1 : {count}
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={increment}
            className="bg-white text-black rounded-md p-2 m-4 hover:cursor-pointer"
          >
            Increment
          </button>
          <button
            className="bg-blue-600 text-white rounded-md p-2  hover:cursor-pointer m-4"
            onClick={decrement}
          >
            Decrement
          </button>
          <button
            className="bg-red-500 text-white hover:cursor-pointer rounded-md p-2 m-4"
            onClick={handleIncrementBy}
          >
            Increment By 5
          </button>
        </div>
      </div>
      <div>
        <div className="flex justify-center m-10 text-white">
          {" "}
          Count 2 : {count2}
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={increment2}
            className="bg-white text-black rounded-md p-2 m-4 hover:cursor-pointer"
          >
            Increment
          </button>
          <button
            className="bg-blue-600 text-white rounded-md p-2  hover:cursor-pointer m-4"
            onClick={decrement2}
          >
            Decrement
          </button>
          <button
            className="bg-red-500 text-white hover:cursor-pointer rounded-md p-2 m-4"
            onClick={handleIncrementBy2}
          >
            Increment By 5
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
