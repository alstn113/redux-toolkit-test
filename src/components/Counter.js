const Counter = ({ number, onIncrease, onDecrease, onIncreaseByValue }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        <button onClick={onIncreaseByValue}>수치만큼 증가</button>
      </div>
    </div>
  );
};

export default Counter;
