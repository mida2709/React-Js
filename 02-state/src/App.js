import { useState } from 'react' ;
import './App.css';
import { FunctionCounter } from './komponents/FunctionCounter';
function App() {
  const [message, setMessage] = useState('')
  const [counter, setCounter] = useState('0')
  const handleOnReachMax = () => {
    setMessage('you have reached the max value')
  }
  return (
    <div className='App'>
      <p>{message}</p>
      <p>{counter}</p>
      <FunctionCounter 
      name="{1}"
      onCounterChanged = {(counter) => setCounter(counter)} 
      onReachMax={handleOnReachMax}/>
    </div>
  );
}

export default App;