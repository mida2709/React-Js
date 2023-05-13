import { createContext, useState  } from "react";
import  {createContext } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    return <CounterContext.Provider value={{ count, setCount }}>
        { childern }
    </CounterContext.Provider>
}