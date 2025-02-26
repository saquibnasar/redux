import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { useState } from "react";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "../counter/counterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const [number, setNumber] = useState<number>();

  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <p>Wait a second to increment</p>
      <button onClick={() => dispatch(incrementAsync(3))}>Increment</button>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(number || 0))}>
        Increment by {number}
      </button>
    </div>
  );
}
