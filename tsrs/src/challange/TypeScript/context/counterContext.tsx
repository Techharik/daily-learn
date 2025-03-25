import { createContext, ReactNode, useState } from "react";

type CounterContextType = {
    count: number;
    increment: () => void;
    decrement: () => void;
};

// Creating the context with default values
const CounterContext = createContext<CounterContextType>({
    count: 0,
    increment: () => { },
    decrement: () => { }
});

const MyCounterProvider = ({ children }: { children: ReactNode }) => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);

    return (
        <CounterContext.Provider value={{ count, increment, decrement }}>
            {children}
        </CounterContext.Provider>
    );
};

export { CounterContext, MyCounterProvider };
