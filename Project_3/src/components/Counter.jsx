import { useState } from "react";

function Counter() {
    const [counter, setcounter] = useState(0);
    
    const decrease = () => {
        if (counter >  0) {
            setcounter(counter - 1);
        }
        
    }

    const increase = () => {
        setcounter(counter +1)
    }

    return (
        <div>
            <button onClick={decrease}>-</button>
            <strong>{counter}</strong>
            <button onClick={increase}>+</button>
    </div>
)
}

export default Counter