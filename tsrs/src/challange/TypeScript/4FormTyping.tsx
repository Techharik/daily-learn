import React, { useRef } from "react";

const FormTyping = () => {
    const inputRef = useRef<HTMLInputElement>(null)


    const handleFocus = () => {
        inputRef.current?.focus()
    }
    return <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleFocus}>Focus</button>
    </div>;
};

export default FormTyping;
