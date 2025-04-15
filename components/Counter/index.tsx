"use client";

import { useCounter } from "@/utils/hooks/counterHook";
import React from "react";

const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={increment}
        className="max-w-[100px] cursor-pointer rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        Increment
      </button>
      <button
        onClick={decrement}
        className="max-w-[100px] cursor-pointer rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        Decrement
      </button>
      <p>Count: {count}</p>
    </div>
  );
};

export default Counter;
