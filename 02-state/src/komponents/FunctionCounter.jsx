import { useState } from "react"
import propTypes from 'prop-types'
export const FunctionCounter = (props) => {
  const [count, setCount] = useState(0)
  const handleIncrement = () => {
    const counter = count + 1;
    if (counter >= 10 ) {
      setCount(0)
      props.onCounterChanged(0)
      props.onReachMax()
      return 
    }
    setCount(counter)
    props.onCounterChanged(counter)
  }

  return <div>
    <h2> Counter: {props.name} </h2>
    <p> Count : { count } </p>
    <button onClick={ handleIncrement } > Increment</button>
  </div>
}

function isAlphabet(prop, propName, componentName){
    if(typeof prop[propName] !== 'string') {
        return new Error (`Invalid prop ${propName} supplied to ${componentName}. Expected a string`)
    }
    const regex = /^[a-zA-Z]+/;
    if(!regex.test(prop[propName])) {
        return new Error(``)
    }
}
FunctionCounter.propTypes = {
    name: propTypes.string.isRequired,
    onReachMax: propTypes.func,
    onCounterChanged: propTypes.func
}
FunctionCounter.defaultProps = {
    name: 'Counter 1',
    onReachMax: () => {},
    onCounterChanged: () => {},
}