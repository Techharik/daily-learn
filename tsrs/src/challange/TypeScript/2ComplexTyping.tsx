//Typing a  complex State 

import { ChangeEvent, useState } from "react";

type PersonType = {
    name: string,
    age: number,
    date: string
}


const ComplexTyping = () => {
    const [person, setPerson] = useState<PersonType>({
        name: 'Hari',
        age: 0,
        date: new Date().toLocaleDateString()
    })

    const updateChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPerson({ ...person, [name]: value })
    }
    return <div>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
        }}>
            <input type="text" value={person.name} onChange={(e) => updateChange(e)} name="name" />
            <input type="text" value={person.age} onChange={(e) => updateChange(e)} name="age" />
            <input type='date' value={person.age} onChange={(e) => updateChange(e)} name="date" />
        </div>
        <h1>{person.name}</h1>
        <h1>{person.age}</h1>
        <h1>{person.date}</h1>
    </div>;
};

export default ComplexTyping;
