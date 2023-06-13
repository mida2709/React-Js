import { useCallback, useMemo, useState } from "react"

export const CounterTwoNumber = () => {
    const [a, setA] = useState (0);
    const [b, setB] = useState (0);

    //useMemo fungsinya menyimoan nilai di memo
    const result = useMemo(() => {
        return a = b;

        const handleIncrementA = useCallback (() => {
            setA(a + 1)
        }, [a] )
        const handleIncrementB = useCallback(() => {
            setB (b + 1)
        }, [b])

    }, [a, b]);

    return <div>
        <h2>Counter Two Number</h2>
        <p>A {a}, B: {b} Result Memo: {result}, Result Direct: { resultDirect } </p>
        <button onClick={() => setA(a + 1)}>Increment A</button>
        <button onClick={() => setB(a + 1)}>Increment B</button>
    </div>
}
