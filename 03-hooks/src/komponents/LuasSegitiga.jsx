import { useEffect } from "react";
import { useState } from "react";

export const LuasSegitiga =() => {
    const [alas, setAlas] = useState(0)
    const [tinggi, seTinggi] = useState(0)
    const [hasil, setHasil] = useState(0)

    useEffect(() => {
        alert('Component did mount')
        return () => {
            alert('Component will unmount')
        }
    }, [])

    useEffect(() => {
        setHasil(0.5 * alas * tinggi)
    }, [alas, tinggi])

    return <div>
        alas:
        <input type="number" value={alas} onChange={(e) => setAlas (e.target.value)} /><br/>
        tinggi:
        <input type="number" value={tinggi} onChange={(e) => setTinggi (e.target.value)} /><br/>
        
        luas: { hasil }
    </div>
}
export default LuasSegitiga;