import { useEffect } from "react";
import { useEffect } from "react";

export const LuasLingkaran = () => {
    const [jariJari, setJariJari] = useState(0)
    const [hasil, setHasil] = useState (0)

    useEffect(()=> {
        setHasil(22/7 * jariJari * jariJari)
    }, [jariJari])

    return <div>
        jari jari:
        <input type="number" value={jariJari} onChange={(e) => setJariJari(e.target.value)} /><br/>

        luas: { hasil }
    </div>
}

export default LuasLingkaran;