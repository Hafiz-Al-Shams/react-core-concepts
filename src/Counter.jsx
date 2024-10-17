import { useState } from "react"  // useState REACT er 1ta hook. hook= 1type of function

export default function Counter() {
    const [count, setCount] = useState(0);     // 1ta param dte hbe, ja initial state

    const handleAdd = () => {
        const newCount = count + 1;  // ekhane ++ / += dile hobe na, cuz that involves =
        setCount(newCount);   // evabe 1ta state manage kora gelo
    }

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    return (
        <div style={{ border: '2px solid blue' }}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleReduce} style={{ margin: '10px' }}>reduce</button>
        </div>
    )
}
// eta hocche state management er very primary level