import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
    FC,
} from "react";

// 1. Define Context type
interface DropdownContextType {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

// 2. Create Context
const DropdownContext = createContext<DropdownContextType | undefined>(undefined);

// 3. Container Component
interface DropdownProps {
    children: ReactNode;
}

const Dropdown: FC<DropdownProps> & {
    Toggle?: FC<{ children: ReactNode }>;
    Menu?: FC<{ children: ReactNode }>;
} = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
            <div className="relative inline-block">{children}</div>
        </DropdownContext.Provider>
    );
};

// 4. Toggle Component
const Toggle: FC<{ children: ReactNode }> = ({ children }) => {
    const context = useContext(DropdownContext);
    if (!context) {
        throw new Error("Dropdown.Toggle must be used within Dropdown");
    }
    const { isOpen, setIsOpen } = context;

    return (
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
        >
            {children} {isOpen ? "▲" : "▼"}
        </button>
    );
};

// 5. Menu Component
const Menu: FC<{ children: ReactNode }> = ({ children }) => {
    const context = useContext(DropdownContext);
    if (!context) {
        throw new Error("Dropdown.Menu must be used within Dropdown");
    }
    const { isOpen } = context;

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
