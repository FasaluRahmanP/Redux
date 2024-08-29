import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count); 

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h1>{count}</h1>
    </div>
  );
};

export default Counter;
