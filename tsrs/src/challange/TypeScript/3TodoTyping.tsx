import React, { useState } from "react";

//type a array of todo 

type todoListType = {
    id: number,
    desc: string
}






const TodoTyping = () => {
    const [todo, setTodo] = useState<todoListType[]>([
        {
            id: 1,
            desc: 'This is new description'
        }, {
            id: 2,
            desc: 'this is a  default Desctription'
        }

    ])

    return <div>
        {
            todo.map((val, ind) => {
                return (
                    <div key={ind}>
                        {val.desc}
                    </div>
                )
            })
        }
    </div>;
};

export default TodoTyping;
