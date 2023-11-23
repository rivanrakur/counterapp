'use client';

import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex justify-center items-center m-auto h-screen text-center">
      <div>
        <div className="flex mb-3 font-semibold text-4xl items-center justify-center">
          <h1 className="">Current Count :</h1>
          <h1 className="mx-1">{count}</h1>
        </div>
        <div className="grid grid-cols-2">
          <div className="">
            <button
              className="py-2 px-2 rounded-lg border-2 border-red-300 bg-red-500 text-white"
              type="button"
              onClick={increment}
            >
              Increment
            </button>
          </div>
          <div>
            <button
              className="py-2 px-2 rounded-lg border-2 border-stone-600"
              type="button"
              onClick={decrement}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
