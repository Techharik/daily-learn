import React, { ChangeEvent, useState } from "react";

//type a array of todo 

type todoListType = {
    id: number,
    desc: string,
    completed: boolean
}

const TodoTyping = () => {
    const [todo, setTodo] = useState<string>('')
    const [todoList, setTodoList] = useState<todoListType[]>([
        {
            id: 1,
            desc: 'This is new description',
            completed: false
        }, {
            id: 2,
            desc: 'this is a  default Desctription',
            completed: false
        }

    ])

    const addTodo = (): void => {
        if (todo != '') {
            setTodoList([...todoList, {
                id: todoList.length,
                desc: todo,
                completed: false
            }])
            setTodo('')
        } else {
            alert('not to be empty')
        }
    }

    const handleCheck = (e: ChangeEvent<HTMLInputElement>, ind: number) => {
        console.log(e, ind)
        const isCompleted: boolean = e.target.checked;
        const newTodoList = todoList.map(val => {
            if (val.id === ind + 1) {
                return {
                    ...val, completed: isCompleted
                }
            }
            return val;
        })
        setTodoList(newTodoList)

    }


    return <div>
        <div>
            <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
            <button onClick={addTodo}>addTodo</button>
        </div>
        {
            todoList.map((val, ind) => {
                return (
                    <div key={ind}>
                        {val.desc}
                        <input type="checkbox" name="" id="" onChange={(e) => handleCheck(e, ind)} />
                    </div>
                )
            })
        }
    </div>;
};

export default TodoTyping;
