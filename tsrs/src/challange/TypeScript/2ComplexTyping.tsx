//Typing a  complex State 

import { useState } from "react";

type PersonType = {
    name: string,
    age: number,
    date: Date
}


const ComplexTyping = () => {
    const [person, setPerson] = useState<PersonType>({
        name: 'Hari',
        age: 0,
        date: new Date()
    })
    return <div>
        <h1>{person.name}</h1>
        <h1>{person.age}</h1>
        <h1>{person.date.toLocaleDateString()}</h1>
    </div>;
};

export default ComplexTyping;
