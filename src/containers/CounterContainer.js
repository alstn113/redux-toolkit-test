import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase, increaseByValue } from "../modules/counter";

const CounterContainer = () => {
  const dispatch = useDispatch();
  const { number } = useSelector(({ counter }) => ({ number: counter.number }));
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onIncreaseByValue = useCallback(() => dispatch(increaseByValue(5)), [dispatch]);

  return <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} onIncreaseByValue={onIncreaseByValue} />;
};

export default React.memo(CounterContainer);
