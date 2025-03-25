import React, { ChangeEvent } from "react";

const EventHandlingTyping = () => {

    const handleMouseEvent = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log(e.currentTarget, 'mouse Entered')
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }
    return <div onMouseEnter={handleMouseEvent}>
        Hello Entered
        <input type="text" onChange={handleChange} />
    </div>
};

export default EventHandlingTyping;
