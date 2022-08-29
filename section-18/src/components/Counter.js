import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../Store/counter-slice';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter)

  const additionHandler = () => {
    dispatch(counterActions.addition());
  };

  const incrimentHandler = () => {
    dispatch(counterActions.increment({amount: 10}))
  }

  const subtractHandler = () => {
    dispatch(counterActions.subtraction())
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toogle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
      <button onClick={subtractHandler}>Decrese</button>
      <button onClick={incrimentHandler}>Increse By 10</button>
      <button onClick={additionHandler}>Increse</button>    
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
