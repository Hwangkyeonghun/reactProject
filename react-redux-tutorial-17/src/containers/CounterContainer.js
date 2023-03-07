import { connect, useDispatch, useStore } from 'react-redux';
import { useCallback } from 'react';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';
import { useSelector } from 'react-redux';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};
// 커넥트로 들어온 props를 받아서 dispatch 와  counterContainer에 담는다.
export default CounterContainer;
