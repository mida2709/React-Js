import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../store/counter';

export const Counter = (props) => {
  const count = useSelector((state) => state.counter.value);
  const user = useDispatch((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter : {props.name}</h2>
      <h2>User: {user.name}</h2>
      <h2>Email: {user.email}</h2>
      <h2>street Address : {user.address.street}</h2>
      <p>Count : {count}</p>

      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};