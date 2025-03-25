import { useState } from "react";

type countType = number;


const StateTyping = () => {
    const [count, setCount] = useState<countType>(0);

    return <div>
        <div>
            <p>{count}</p>
        </div>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>;
};

export default StateTyping;
