import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';


const MyCounter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    if (count < 10) {
      dispatch(increment());
    }
  };

  const handleDecrement = () => {
    if (count > -10) {
      dispatch(decrement());
    }
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className='myCountBlock'>
      <h1>Поточний рахунок:</h1>
      <p>{count}</p>
      <button className='plus' onClick={handleIncrement}>+</button>
      <button className='minus' onClick={handleDecrement}>-</button>
      <button className='reset' onClick={handleReset}>Reset</button>
    </div>
  );
};

export default MyCounter;