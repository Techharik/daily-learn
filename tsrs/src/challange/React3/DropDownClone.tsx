import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
    FC,
    ReactElement,
} from "react";

// 1. Define Context type



// 3. Container Component


const Dropdown = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div >
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as ReactElement, { isOpen, setIsOpen });
                }
                return child;
            })}
        </div>
    );
};

// 4. Toggle Component
const Toggle = ({ children, setIsOpen, isOpen }: {
    children: ReactNode,
    setIsOpen?: Dispatch<SetStateAction<boolean>>,
    isOpen?: boolean
}) => {


    return (
        <button
            onClick={() => setIsOpen?.(!isOpen)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
        >
            {children} {isOpen ? "▲" : "▼"}
        </button>
    );
};

// 5. Menu Component
const Menu: FC<{ children: ReactNode, isOpen?: boolean }> = ({ children, isOpen }) => {



    if (!isOpen) return null;

    return (
        <div className="absolute mt-2 w-48 bg-white shadow-lg rounded p-2 border z-10">
            {children}
        </div>
    );
};

// 6. Attach to compound object
Dropdown.Toggle = Toggle;
Dropdown.Menu = Menu;

export default Dropdown;
