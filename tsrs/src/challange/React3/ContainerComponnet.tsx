import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

// compound Pattern using context;
interface TypeCard {
    toggle: boolean;
    setToggle: Dispatch<SetStateAction<boolean>>;
}
const CardToggleContext = createContext<TypeCard | undefined>(
    undefined
)

const ContainerComponnet = ({ children }: { children: React.ReactNode }) => {
    const [toggle, setToggle] = useState<boolean>(false)

    return <CardToggleContext.Provider value={{ toggle, setToggle }}>
        {children}
    </CardToggleContext.Provider>;
};


const ToggleImg = ({ children }: { children: ReactNode }) => {
    const { toggle, setToggle } = useContext(CardToggleContext)
    return <div>
        {toggle ? 'Hi' : 'Heello'}
        <button onClick={() => setToggle(!toggle)}>{children}</button>
    </div>
}

ContainerComponnet.ToggleImg = ToggleImg;

export default ContainerComponnet;